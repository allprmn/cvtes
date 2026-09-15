import React from 'react';
import AccordionGallery from './AccordionGallery'; // Sesuaikan path jika ada di folder 'ui'
import { education } from '../data';
import EchoText from './EchoText';

export default function Education() {
  // Konversi data dari data.js ke format AccordionGallery
  const galleryItems = education.map((item) => ({
    image: item.image,
    label: `${item.institution} (${item.year})`, // Label yang muncul di accordion
    link: item.link,
  }));

  return (
    <section id="education" className="w-full py-20 px-4 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-center items-center mb-8">
          <EchoText
            text="Riwayat Pendidikan"
            echoes={12}
            lag={0.24}
            offset={36}
            direction="right"
            fade={0.72}
            blur={3}
            tint="#ffffff"
            mode="both"
            cursorRadius={320}
            duration={900}
            ease="ease-out"
            fontSize="clamp(2rem, 5vw, 4rem)"
            fontWeight={800}
            color="#8b56e7"
          />
        </div>

        <p className="text-center text-slate-400 mb-12">
          Perjalanan pendidikan yang membentuk saya
        </p>

        {/* ================= ACCORDION GALLERY ================= */}
        <div className="w-full">
          <AccordionGallery
            items={galleryItems}
            defaultIndex={3} // Membuka kartu terakhir (UIN) secara default
            expandRatio={0.52}
            trigger="hover"
            accentColor="#a78bfa" // Ungu, sesuai tema portofoliomu
            overlayColor="#060010"
            textColor="#ffffff"
            grayscale
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={460}
            gap={10}
            radius={16}
            orientation="horizontal"
          />
        </div>
      </div>
    </section>
  );
}