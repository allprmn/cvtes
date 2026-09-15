import React, { useState } from 'react';
import DepthCarousel from './DepthCarousel'; // Sesuaikan path jika ada di folder 'ui'
import { certificates } from '../data';
import BlurText from "./BlurText";


export default function Certificates() {
  // State untuk menyimpan sertifikat yang sedang diklik (untuk modal)
  const [selectedCert, setSelectedCert] = useState(null);

  // Konversi data dari data.js ke format yang dibutuhkan DepthCarousel
  const carouselItems = certificates.map((cert) => ({
    image: cert.image,
    alt: cert.alt || cert.title,
    originalData: cert, // Simpan data asli untuk modal
  }));

  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


  return (
    <section id="certificates" className="w-full py-20 px-4 bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto">
        
         <div className="flex justify-center mb-4">
          <BlurText
            text="Sertifikat & Penghargaan"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          />
        </div>


        <p className="text-center text-slate-400 mb-12">
          Klik pada kartu untuk melihat detail sertifikat
        </p>

        {/* ================= CAROUSEL ================= */}
        <div style={{ height: '500px', position: 'relative' }}>
          <DepthCarousel
            items={carouselItems}
            depth={220}
            spread={90}
            tilt={22}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.2}
            blur={6}
            autoplay={false}
            loop
            cardWidth={420}
            cardHeight={300}
            radius={18}
            tint="#05060a"
            duration={700}
            ease="power3.out"
            autoplayDelay={3200}
            showControls
            showIndicators
            onItemSelect={(item) => setSelectedCert(item.originalData)}
          />
        </div>

      </div>

      {/* ================= MODAL DETAIL SERTIFIKAT ================= */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)} // Klik di luar modal untuk menutup
        >
          <div 
            className="bg-slate-800 rounded-2xl max-w-3xl w-full p-6 md:p-8 relative shadow-2xl border border-slate-700 animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal menutup modal
          >
            {/* Tombol Close */}
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-700 hover:bg-red-500 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            {/* Konten Modal */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full h-auto rounded-xl object-contain bg-slate-900 border border-slate-700"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-indigo-400 font-medium mb-1">{selectedCert.issuer}</p>
                <p className="text-slate-400 text-sm mb-4">{selectedCert.date}</p>
                <p className="text-slate-300 leading-relaxed mb-6">{selectedCert.detail}</p>
                
                <a 
                  href={selectedCert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Lihat Sertifikat Asli →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}