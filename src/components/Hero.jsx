import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MoltenMetal from './MoltenMetal'
import StrokeText from './StrokeText'
import profileImage from '../assets/profile.png'
import styles from './Hero.module.css'
import BlurText from "./BlurText";
import ProfileCard from './ProfileCard';
import SpecularButton from './SpecularButton';


export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <header id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '100dvh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F172A', paddingTop: '5.5rem', paddingBottom: '2rem' }}>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
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

      {/* ================= KONTEN HERO ================= */}
      <div className={styles.heroContent}>

        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.titleContainer}>
            <span className={styles.greeting}>Hi I'm</span>
            <span className={styles.strokeWrapper}>
              <StrokeText
                text="ALDI PRAMANA"
                strokeColor="#A78BFA"
                fillColor="#F8FAFC"
                strokeWidth={1.4}
                drawDuration={1.6}
                fillDelay={0.2}
                stagger={0.05}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={56}
                fontWeight={800}
                letterSpacing={-1}
                reverse={false}
              />
            </span>
          </h1>

          <div className={styles.description}>
            <BlurText
              text="Pengembangan aplikasi dan web yang berfokus pada desain mobile,
            performance tinggi, dan kolaboratif teknologi terkini. Berpengalaman
            membangun aplikasi mobile, website interaktif, serta mengintegrasikan
            teknologi digital untuk memastikan inovasi yang bermutu."
              delay={60}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-base md:text-lg text-slate-300 leading-relaxed text-left"
            />
          </div>

          <div className={styles.buttons}>
            {/* Tombol Download CV — Memicu modal */}
            <SpecularButton
              size="lg"
              radius={18}
              tint="#ffffff"
              tintOpacity={0}
              blur={0}
              textColor="#ffffff"
              lineColor="#a78bfa"
              baseColor="#7C3AED"
              intensity={1}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
              autoAnimate={false}
              onClick={() => setShowModal(true)}
            >
              Download CV
            </SpecularButton>

            {/* Tombol Lihat Sertifikat — Smooth Scroll ke section */}
            <SpecularButton
              size="lg"
              radius={18}
              tint="#ffffff"
              tintOpacity={0}
              blur={0}
              textColor="#A78BFA"
              lineColor="#7C3AED"
              baseColor="#1e293b"
              intensity={1}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
              autoAnimate={false}
              onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Sertifikat
            </SpecularButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ProfileCard
            name="Aldi Pramana"
            title="Fullstack Developer"
            handle="allprmncvv"
            status="Online"
            contactText="Hubungi Saya"
            avatarUrl={profileImage}
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/assets/demo/iconpattern.png"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </motion.div>

      </div>

      {/* ================= MODAL KONFIRMASI DOWNLOAD CV ================= */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ikon Download */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
              </div>

              {/* Judul */}
              <h3 className="text-xl font-bold text-white text-center mb-2">
                Unduh CV?
              </h3>

              {/* Deskripsi */}
              <p className="text-slate-400 text-center text-sm leading-relaxed mb-6">
                Kamu akan mengunduh file <span className="text-indigo-400 font-medium">CV-Aldi-Pramana.pdf</span>. File ini berisi riwayat pendidikan, pengalaman, dan keahlian saya.
              </p>

              {/* Tombol Aksi */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirmDownload}
                  className="flex-1 px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
                >
                  Ya, Unduh
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}