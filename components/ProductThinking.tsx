"use client";

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, ContactShadows } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as THREE from 'three';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const phases = [
  {
    title: "Discovery",
    description: "Ambiguity is where I thrive. I dive deep into user problems, untangling complex requirements and finding the core 'why'."
  },
  {
    title: "Strategy",
    description: "Data-driven decisions. I connect user needs to business goals, defining clear roadmaps that align cross-functional teams."
  },
  {
    title: "Execution",
    description: "From concept to launch. I manage scopes, mitigate risks, and empower engineering and design to ship high-quality products."
  },
  {
    title: "Growth",
    description: "Launch is just day one. I obsess over metrics, user feedback, and iterative loops to drive retention and scale impact."
  }
];

function GlassShape({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth continuous rotation
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
      
      // Target rotation based on scroll (lerped for smoothness)
      const targetZ = scrollProgress * Math.PI * 2;
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetZ, 0.05);
      
      // Target scale based on scroll
      const scale = 1 + scrollProgress * 0.3;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[3, 0, 0]}>
        <torusKnotGeometry args={[1.5, 0.5, 256, 64]} />
        <MeshTransmissionMaterial 
          backside
          backsideThickness={0.5}
          thickness={1}
          chromaticAberration={0.06}
          anisotropicBlur={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
          resolution={1024}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
}

export default function ProductThinking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%", // 4 screens
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          }
        }
      });

      textRefs.current.forEach((text, i) => {
        if (!text) return;
        
        // 1. Fade in and slide up
        tl.fromTo(text, 
          { opacity: 0, y: 100, scale: 0.95 },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          i * 4 // Start time on the timeline
        );

        // 2. Hold state for a bit so it's readable
        tl.to(text, { opacity: 1, duration: 2 }, (i * 4) + 1);

        // 3. Fade out and slide up (except for the last one)
        if (i < phases.length - 1) {
          tl.to(text, {
            opacity: 0,
            y: -100,
            scale: 1.05,
            duration: 1,
            ease: "power2.in"
          }, (i * 4) + 3);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-indigo-900/10 to-[#0f172a] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} />
          <Environment preset="city" />
          <GlassShape scrollProgress={scrollProgress} />
          <ContactShadows position={[3, -2.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
        </Canvas>
      </div>

      {/* Overlay Text Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-start max-w-7xl mx-auto px-6 lg:px-12 pointer-events-none">
        <div className="w-full md:w-5/12 relative h-[400px]">
          {phases.map((phase, index) => (
            <div 
              key={index}
              ref={el => { textRefs.current[index] = el; }}
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-0"
            >
              <div className="text-indigo-400 font-bold tracking-[0.3em] mb-4 text-xs md:text-sm uppercase flex items-center gap-4">
                <span className="w-8 h-[2px] bg-indigo-400 block"></span>
                Phase 0{index + 1}
              </div>
              <h2 className="text-5xl md:text-7xl font-bold font-outfit mb-6 text-white drop-shadow-xl tracking-tight">
                {phase.title}
              </h2>
              <p className="text-lg md:text-xl font-ovo text-slate-300 leading-relaxed shadow-sm">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
