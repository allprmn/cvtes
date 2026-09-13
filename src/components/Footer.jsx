import React from 'react';
import { motion } from 'framer-motion';
import GradientWaves from './GradientWaves'; // Sesuaikan path jika ada di folder 'ui'

export default function Footer() {
  // Ganti link di bawah ini dengan akun sosial mediamu
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/username-kamu/', // <-- GANTI
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/username-kamu/', // <-- GANTI
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:aldi@example.com', // <-- GANTI dengan email kamu
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
  ];

  return (
    // 1. TINGGI DIKURANGI: min-h dari 400px menjadi 320px
    // 2. BACKGROUND DASAR: slate-950 agar menyatu dengan gelapnya horizon
    <footer className="relative overflow-hidden bg-slate-950 text-slate-200 pt-5 pb-3 flex items-center">
      
      {/* ================= BACKGROUND GRADIENT WAVES ================= */}
      <div className="absolute inset-0 z-0">
        <GradientWaves
          // 3. WARNA DISESUAIKAN DENGAN DEMO
          horizonColor="#0a0314"    // Gelap pekat di bagian atas
          waveColor="#7C3AED"       // Ungu cerah untuk gelombang
          crestColor="#FFFFFF"      // Putih untuk puncak gelombang
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1}            // 4. BRIGHTNESS DINAIKKAN (sebelumnya 0.6)
          opacity={1}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
        />
      </div>

      {/* 5. OVERLAY DIHAPUS: Tidak ada lagi lapisan gelap yang membuat kusam */}
      {/* Teks diberi drop-shadow agar tetap terbaca di atas gelombang */}
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center w-full drop-shadow-md">
        
        {/* Nama / Logo */}
        <motion.h3 
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Aldi Pramana
        </motion.h3>
        
        <p className="text-slate-300 mb-6 text-center max-w-md text-sm">
          Terima kasih telah mengunjungi portofolio saya. Mari terhubung dan berkolaborasi!
        </p>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="flex gap-4 mb-8">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className="group flex items-center justify-center w-11 h-11 bg-black/40 hover:bg-indigo-600 backdrop-blur-md border border-white/20 hover:border-indigo-500 rounded-full transition-colors duration-300 text-white"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Garis Pemisah */}
        <div className="w-full h-px bg-white/20 mb-6" />

        {/* Copyright */}
        <p className="text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} Aldi Pramana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}