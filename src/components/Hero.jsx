import React from 'react'
import MoltenMetal from './MoltenMetal';

export default function Hero() {
  return (
    <header className="hero relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-black text-white">
      {/* Background Molten Metal */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <MoltenMetal
          color1="#6655a9"
          color2="#924d8f"
          color3="#FFFFFF"
          speed={0.45}
          scale={5.8}
          detail={4}
          glow={1.65}
          coreSize={0.1}
          swirl={0.7}
          fold={-0.2}
          blackPoint={0.07}
          brightness={1.15}
          colorMode="molten"
          grain
          grainIntensity={0.06}
          mouseInteraction
          mouseStrength={0.25}
          opacity={1}
        />
      </div>

      {/* Konten */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Halo, saya <span className="text-indigo-400">Nama Kamu</span> 👋
        </h1>
        <p className="text-lg md:text-xl mb-8">Web Developer yang suka membangun hal-hal keren.</p>
        <a href="#projects" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
          Lihat Project
        </a>
      </div>
    </header>
  )
}