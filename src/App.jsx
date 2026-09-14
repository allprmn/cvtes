// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profil from './pages/Profil'
import PengingatTugas from './pages/PengingatTugas';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/pengingat-tugas" element={<PengingatTugas />} /> 
        {/* Kamu bisa menambahkan rute lain di sini nanti */}
      </Routes>
    </Router>
  )
}