import React from 'react'
import GooeyNav from './GooeyNav' // Sesuaikan path jika file ada di folder 'ui'

// Menu navigasi
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav 
      className="navbar" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0,
        width: '100%', 
        zIndex: 100, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem 5%',
        backgroundColor: 'rgba(15, 23, 42, 0.8)', // Background gelap transparan
        backdropFilter: 'blur(10px)' // Efek kaca
      }}
    >
      {/* Logo di Kiri */}
      <div className="logo" style={{ color: '#F8FAFC', fontWeight: 'bold', fontSize: '1.2rem' }}>
        WELCOME TO MY PORTFOLIO
      </div>

      {/* GooeyNav di Kanan */}
      <div style={{ height: '60px', position: 'relative', minWidth: '350px' }}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </nav>
  )
}