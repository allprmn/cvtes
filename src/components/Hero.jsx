import React from 'react'
import { motion } from 'framer-motion'
import MoltenMetal from './MoltenMetal'
import StrokeText from './StrokeText'
import profileImage from '../assets/profile.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header style={{ position: 'relative', overflow: 'hidden', minHeight: '100dvh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F172A', paddingTop: '4rem', paddingBottom: '2rem' }}>
      
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

        {/* Sisi Kiri: Teks & Tombol */}
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

          <p className={styles.description}>
            Pengembangan aplikasi dan web yang berfokus pada desain mobile,
            performance tinggi, dan kolaboratif teknologi terkini. Berpengalaman
            membangun aplikasi mobile, website interaktif, serta mengintegrasikan
            teknologi digital untuk memastikan inovasi yang bermutu.
          </p>

          <div className={styles.buttons}>
            <motion.a
              href="#"
              className={styles.cta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#projects"
              className={styles.ctaSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Proyek
            </motion.a>
          </div>
        </motion.div>

        {/* Sisi Kanan: Foto Profil */}
        <motion.div
          className={styles.avatarWrapper}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: '0 0 30px rgba(124, 58, 237, 0.6)',
            transition: { duration: 0.3 },
          }}
        >
          <div className={styles.avatarBorder}>
            <motion.img
              src={profileImage}
              alt="Aldi Pramana"
              className={styles.avatarImage}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(124,58,237,0.2)',
                  '0 0 40px rgba(124,58,237,0.6)',
                  '0 0 20px rgba(124,58,237,0.2)',
                ],
                transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          </div>
        </motion.div>

      </div>
    </header>
  )
}