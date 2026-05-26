"use client";

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as THREE from 'three';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const phases = [
  {
    title: "The Foundation",
    subtitle: "We find the signal...",
    description: "It starts by gathering empathy, deep research, and strategy to build the core foundation. Navigating through the noise to locate the primary nodes."
  },
  {
    title: "The Path",
    subtitle: "Connecting the data...",
    description: "Aligning cross-functional teams to build the operational framework. Linking engineering, design, and business goals into a cohesive structure."
  },
  {
    title: "The Vision",
    subtitle: "To the destination.",
    description: "The Final Product: An MVP defined by clarity, focus, and a unified vision. The guiding light for the rest of the journey."
  }
];

const starNodes = [
  [-3, -2, -10],
  [-2, 3, -15],
  [2, 3, -20],
  [1, -2, -25],
  [4, 0, -32],
  [5, 2, -40],
  [8, 4, -55], // Polaris
] as [number, number, number][];

const foundationPoints = [starNodes[0], starNodes[1], starNodes[2], starNodes[3], starNodes[0]];
const pathPoints = [starNodes[3], starNodes[4], starNodes[5]];
const visionPoints = [starNodes[5], starNodes[6]];

// Simple helper to calculate approx length
const getLineLength = (pts: [number, number, number][]) => {
  let length = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const dx = pts[i+1][0] - pts[i][0];
    const dy = pts[i+1][1] - pts[i][1];
    const dz = pts[i+1][2] - pts[i][2];
    length += Math.sqrt(dx*dx + dy*dy + dz*dz);
  }
  return length;
};

const foundationLength = getLineLength(foundationPoints);
const pathLength = getLineLength(pathPoints);
const visionLength = getLineLength(visionPoints);

function ConstellationScene({ scrollRef }: { scrollRef: React.MutableRefObject<{ scroll: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Line Material Refs
  const line1Ref = useRef<any>(null);
  const line2Ref = useRef<any>(null);
  const line3Ref = useRef<any>(null);
  
  // Background Stars
  const [bgStars] = useState(() => {
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 150;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 150;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100 - 30;
    }
    return pos;
  });

  useFrame((state, delta) => {
    const scroll = scrollRef.current.scroll;

    // 1. Dolly Camera Forward Toward Polaris
    // Polaris is at [8, 4, -55]. We move the camera toward it over the scroll.
    state.camera.position.x = THREE.MathUtils.lerp(0, 4, scroll);
    state.camera.position.y = THREE.MathUtils.lerp(0, 2, scroll);
    state.camera.position.z = THREE.MathUtils.lerp(0, -35, scroll);
    
    // Always lock the camera's focus on the final Polaris star
    state.camera.lookAt(8, 4, -55);
    
    // Ambient float for the group (removes the hard scroll rotation that threw stars off screen)
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }

    // 2. Animate Lines via DashOffset
    // Foundation: 0% to 35%
    const p1 = Math.min(1, Math.max(0, scroll / 0.35));
    if (line1Ref.current?.material) {
      line1Ref.current.material.dashOffset = foundationLength * (1 - p1);
    }
    
    // Path: 35% to 75%
    const p2 = Math.min(1, Math.max(0, (scroll - 0.35) / 0.4));
    if (line2Ref.current?.material) {
      line2Ref.current.material.dashOffset = pathLength * (1 - p2);
    }

    // Vision: 75% to 100%
    const p3 = Math.min(1, Math.max(0, (scroll - 0.75) / 0.25));
    if (line3Ref.current?.material) {
      line3Ref.current.material.dashOffset = visionLength * (1 - p3);
    }
  });

  return (
    <>
      <Points positions={bgStars} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#4f46e5" size={0.15} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.5} />
      </Points>

      <group ref={groupRef}>
        {/* The 7 Main Nodes */}
        {starNodes.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={i === 6 ? [0.25, 32, 32] : [0.12, 16, 16]} />
            <meshBasicMaterial color={i === 6 ? [4, 4, 6] : [1, 1, 2]} toneMapped={false} />
          </mesh>
        ))}

        {/* Connecting Lines */}
        <Line 
          ref={line1Ref} 
          points={foundationPoints} 
          color="#8a33ff" 
          lineWidth={2} 
          dashed 
          dashSize={foundationLength} 
          dashOffset={foundationLength} 
          gapSize={foundationLength} 
          transparent 
          opacity={0.8} 
        />
        <Line 
          ref={line2Ref} 
          points={pathPoints} 
          color="#8a33ff" 
          lineWidth={2} 
          dashed 
          dashSize={pathLength} 
          dashOffset={pathLength} 
          gapSize={pathLength} 
          transparent 
          opacity={0.8} 
        />
        <Line 
          ref={line3Ref} 
          points={visionPoints} 
          color="#ffffff" 
          lineWidth={3} 
          dashed 
          dashSize={visionLength} 
          dashOffset={visionLength} 
          gapSize={visionLength} 
          transparent 
          opacity={1} 
        />
      </group>

      <EffectComposer enableNormalPass={false}>
        <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
      </EffectComposer>
    </>
  );
}

export default function ProductThinking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef({ scroll: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 0.5,
          pin: true,
        }
      });

      // Animate the 3D scroll state from 0 to 1 over a conceptual duration of 10s
      tl.to(scrollRef.current, { scroll: 1, ease: "none", duration: 10 }, 0);

      // Text animations synced to the same 10s timeline
      textRefs.current.forEach((text, i) => {
        if (!text) return;
        
        // Phase timings on the 10s timeline:
        // Phase 1: 0 -> 3.5 (0% to 35%)
        // Phase 2: 3.5 -> 7.5 (35% to 75%)
        // Phase 3: 7.5 -> 10 (75% to 100%)
        const start = i === 0 ? 0 : i === 1 ? 3.5 : 7.5;
        const end = i === 0 ? 3.5 : i === 1 ? 7.5 : 10;
        
        // Set initial state
        gsap.set(text, { opacity: 0, x: 50 });

        // Fade In (takes 0.4 units of time, faster transformations)
        tl.to(text, { opacity: 1, x: 0, ease: "power2.out", duration: 0.4 }, start);

        // Fade Out (takes 0.4 units of time before the phase ends)
        if (i < phases.length - 1) {
          tl.to(text, { opacity: 0, x: -50, ease: "power2.in", duration: 0.4 }, end - 0.4);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#050505] text-white overflow-hidden font-outfit">
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0 bg-black">
        <Canvas camera={{ position: [0, 0, 0], fov: 60 }}>
          <color attach="background" args={['#020205']} />
          <ambientLight intensity={0.5} />
          <ConstellationScene scrollRef={scrollRef} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-[5] pointer-events-none" />

      {/* Overlay Text Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-start max-w-7xl mx-auto px-6 lg:px-12 pointer-events-none">
        <div className="w-full md:w-5/12 relative h-[300px]">
          {phases.map((phase, index) => (
            <div 
              key={index}
              ref={el => { textRefs.current[index] = el; }}
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-0"
            >
              <div className="text-indigo-400 font-bold tracking-[0.3em] mb-4 text-xs md:text-sm uppercase flex items-center gap-4">
                <span className="w-8 h-[2px] bg-indigo-400 block shadow-[0_0_10px_#8a33ff]"></span>
                {phase.subtitle}
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] tracking-tight">
                {phase.title}
              </h2>
              <p className="text-lg md:text-xl font-ovo text-slate-300 leading-relaxed max-w-md">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
