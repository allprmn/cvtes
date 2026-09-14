import React from 'react';
import Navbar from '../components/Navbar'; // Ingat: pakai ../
import Footer from '../components/Footer'; // Ingat: pakai ../

export default function PengingatTugas() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '8rem 5%', backgroundColor: '#0F172A', color: '#F8FAFC' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pengingat Deadline Tugas</h1>
        <p>Halaman ini akan menampilkan daftar tugas dan tenggat waktunya.</p>
        {/* Nanti kamu bisa menambahkan komponen daftar tugas di sini */}
      </main>
      <Footer />
    </>
  );
}