import React from 'react';
import { motion } from 'framer-motion';
import Lanyard from './Lanyard';
import fotoDepan from '../assets/profil2.png';
import logoBelakang from '../assets/logo.png';

export default function About() {
    return (
        <section
            id="about"
            className="w-full py-2 px-4 bg-slate-950 text-slate-200 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">

                {/* Kartu Container dengan Border Gradasi Ungu */}
                <div className="relative rounded-3xl border-2 border-purple-600/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-8 shadow-[0_0_60px_rgba(124,58,237,0.3)]">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* ================= KOLOM KIRI: TEKS ================= */}
                        <motion.div
                            className="pl-4 md:pl-8 lg:pl-12"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                About Me
                            </h2>

                            <p className="text-slate-400 leading-relaxed mb-4">
                                Saya Aldi Pramana, Mahasiswa Teknik Informatika yang berfokus
                                pada perancangan dan pengembangan produk digital. Memiliki
                                kombinasi keahlian di bidang UI/UX & Desain Grafis,
                                Web Development (Java & PHP), serta Digital Content
                                Creation (Image & Video Editing).
                            </p>

                            <p className="text-slate-400 leading-relaxed mb-8">
                                Terbiasa mentransformasikan ide visual menjadi antarmuka
                                aplikasi yang intuitif serta membangun sistem back-end yang
                                andal. Selalu antusias untuk mempelajari teknologi baru
                                dan berkolaborasi dalam menciptakan solusi digital yang berdampak.
                            </p>

                            <p className="text-slate-500 italic text-sm">
                                Working with heart, creating with mind.
                            </p>
                        </motion.div>

                        {/* ================= KOLOM KANAN: LANYARD 3D ================= */}
                        <motion.div
                            className="h-[350px] md:h-[450px] w-full relative" // <-- Tinggi dikurangi drastis
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Lanyard
                                position={[0, 0, 20]}
                                gravity={[0, -40, 0]}
                                frontImage={fotoDepan}
                                backImage={logoBelakang}
                                imageFit="cover"
                                lanyardWidth={1}
                            />
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}