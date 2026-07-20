"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { productProcess } from "@/assets/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Create a winding path for the roadmap
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-8, -4, -40),
  new THREE.Vector3(6, 2, -30),
  new THREE.Vector3(-6, 0, -20),
  new THREE.Vector3(8, -2, -10),
  new THREE.Vector3(0, 0, 0)
]);

const points = curve.getPoints(100);

function RoadmapScene({ scrollRef }: { scrollRef: React.MutableRefObject<{ progress: number }> }) {
  const lineRef = useRef<any>(null);
  const particleRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  // Background ambient particles
  const [bgParticles] = useState(() => {
    const pos = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80 - 20;
    }
    return pos;
  });

  useFrame((state) => {
    const p = scrollRef.current.progress;
    
    // Draw the line as user scrolls
    if (lineRef.current?.material) {
      lineRef.current.material.dashOffset = 100 * (1 - p);
    }

    // Move the glowing particle along the curve
    if (particleRef.current) {
      const point = curve.getPoint(p);
      particleRef.current.position.copy(point);
    }

    // Gentle camera movement
    camera.position.x = THREE.MathUtils.lerp(0, 2, p);
    camera.position.y = THREE.MathUtils.lerp(2, -1, p);
    camera.position.z = THREE.MathUtils.lerp(15, 10, p);
    camera.lookAt(0, 0, -20);
  });

  return (
    <>
      <Points positions={bgParticles} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffffff" size={0.05} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.3} />
      </Points>

      {/* The Roadmap Line */}
      <Line
        ref={lineRef}
        points={points}
        color="#6366f1"
        lineWidth={3}
        dashed
        dashSize={100}
        dashOffset={100}
        gapSize={100}
        transparent
        opacity={0.6}
      />

      {/* The Moving Particle (Current Position) */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#a5b4fc" toneMapped={false} />
      </mesh>

      {/* Stage Nodes (Fixed positions along curve) */}
      {[0.15, 0.3, 0.45, 0.6, 0.75, 0.9].map((t, i) => {
        const pt = curve.getPoint(t);
        return (
          <mesh key={i} position={pt}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshBasicMaterial color="#ffffff" opacity={0.5} transparent />
          </mesh>
        );
      })}

      <EffectComposer enableNormalPass={false}>
        <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
      </EffectComposer>
    </>
  );
}

export default function ProductProcess() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef({ progress: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // Animate 3D scene progress from 0 to 1
      tl.to(scrollRef.current, { progress: 1, ease: "none", duration: 10 }, 0);

      // Animate text sections (6 stages)
      const stageDuration = 10 / 6;
      
      textRefs.current.forEach((text, i) => {
        if (!text) return;
        
        const start = i * stageDuration;
        const end = start + stageDuration;
        
        gsap.set(text, { opacity: 0, y: 50 });
        
        // Fade in
        tl.to(text, { opacity: 1, y: 0, ease: "power2.out", duration: 0.5 }, start);
        
        // Fade out
        if (i < 5) {
          tl.to(text, { opacity: 0, y: -50, ease: "power2.in", duration: 0.5 }, end - 0.5);
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className="relative w-full h-[600vh] bg-[#020205] border-t border-zinc-900">
      
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden font-inter text-white">
        
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0 bg-[#020205]">
          <Canvas camera={{ position: [0, 2, 15], fov: 60 }}>
            <color attach="background" args={['#020205']} />
            <ambientLight intensity={0.5} />
            <RoadmapScene scrollRef={scrollRef} />
          </Canvas>
        </div>

        {/* Shadow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-[#020205] z-[5] pointer-events-none opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-transparent to-transparent z-[5] pointer-events-none opacity-90" />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-start max-w-[90rem] mx-auto px-6 pointer-events-none">
          
          <div className="absolute top-12 left-6 md:left-12 opacity-50 flex items-center gap-4">
             <span className="w-12 h-[1px] bg-indigo-500 block"></span>
             <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase font-geist">The Process Framework</span>
          </div>

          <div className="w-full lg:w-5/12 relative h-[80vh] md:h-[500px]">
            {productProcess.map((stage, index) => (
              <div 
                key={index}
                ref={el => { textRefs.current[index] = el; }}
                className="absolute inset-0 flex flex-col justify-start md:justify-center pt-8 md:pt-0 w-full opacity-0 pointer-events-auto pr-6"
              >
                <div className="mb-8 flex items-end gap-4">
                  <span className="text-7xl font-bold font-geist text-zinc-800">0{index + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white font-geist mb-2 tracking-tight">{stage.stage}</h3>
                </div>
                
                <p className="text-lg md:text-xl font-inter text-slate-300 leading-relaxed mb-8">
                  {stage.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-geist mb-3">Key Frameworks</h4>
                    <ul className="space-y-2">
                      {stage.details.frameworks.map((fw, i) => (
                        <li key={i} className="text-sm text-slate-400 font-inter flex items-center gap-3">
                          <span className="w-1 h-1 bg-indigo-500 rounded-full shrink-0" />
                          {fw}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-geist mb-3">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {stage.details.deliverables.map(del => (
                        <span key={del} className="text-[11px] font-bold tracking-wider bg-zinc-900 border border-zinc-800 text-slate-300 px-3 py-1.5 rounded-md font-geist uppercase">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block pt-6 mt-6 border-t border-zinc-800/50">
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 font-geist mb-3">In Practice</h4>
                     <p className="text-sm text-slate-400 font-inter leading-relaxed italic border-l-2 border-indigo-500/30 pl-4 py-1">
                       &ldquo;{stage.details.example}&rdquo;
                     </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
