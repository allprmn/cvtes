import React from 'react';
import CardNav from './CardNav';

const items = [
  {
    label: "About",
    bgColor: "#1B1722",
    textColor: "#fff",
    links: [
      { label: "Home", ariaLabel: "Halaman Utama", href: "#home" },
      { label: "Mata Kuliah", ariaLabel: "Jadwal Mata Kuliah", href: "#about" }
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