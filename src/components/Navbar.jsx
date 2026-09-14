import React from 'react';
import CardNav from './CardNav';
import { Link } from 'react-router-dom';


const items = [
  {
    label: "About",
    bgColor: "#1B1722",
    textColor: "#fff",
    links: [
      { label: "Home", href: "/" },        // Mengarah ke halaman Home
      { label: "Profil", href: "/profil" }, // Mengarah ke halaman Profil
      { label: "Projects", href: "/#projects" }, // Contoh jika ingin kembali ke section
    ]
  },
  {
    label: "Projects",
    bgColor: "#2F293A",
    textColor: "#fff",
    links: [
      { label: "Semua Proyek", ariaLabel: "Lihat Semua Proyek", href: "#projects" },
      { label: "Sertifikat", ariaLabel: "Lihat Sertifikat", href: "#certificates" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#2F293A",
    textColor: "#fff",
    links: [
      { label: "Email", ariaLabel: "Kirim Email", href: "mailto:aldipramanaaldi9@gmail.com" }, // GANTI
      { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/aldi-pramana-732828430/" }, // GANTI
      { label: "Instagram", ariaLabel: "Instagram", href: "https://www.instagram.com/all_prmn14/" } // GANTI
    ]
  }
];

export default function Navbar() {
  return (
    <CardNav
      logoText="WELCOME TO MY PORTFOLIO"
      logoAlt="Welcome"
      items={items}
      baseColor="#0F172A"
      menuColor="#F8FAFC"
      buttonBgColor="#7C3AED"
      buttonTextColor="#fff"
      ctaLabel="LinkedIn"
      ctaHref="https://www.linkedin.com/in/aldi-pramana-732828430/"
      ease="power3.out"
    />
  );
}