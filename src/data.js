// src/data.js



export const projects = [
  {
    id: 1,
    title: "Aplikasi Cuaca",
    description: "Aplikasi cuaca real-time dengan OpenWeather API.",
    tech: ["React", "Axios", "CSS"],
    image: "https://via.placeholder.com/400x300?text=Todo",
    link: "https://github.com/username/weather-app",
    detail: "Aplikasi ini menampilkan cuaca terkini berdasarkan lokasi pengguna. Dibangun dengan React dan menggunakan API OpenWeather untuk mengambil data. Fitur: pencarian kota, tampilan 5 hari ke depan, dan grafik suhu."
  },
  {
    id: 2,
    title: "Todo List",
    description: "Aplikasi manajemen tugas dengan drag-and-drop.",
    tech: ["React", "DnD", "Tailwind"],
    image: "https://via.placeholder.com/400x300?text=Todo",
    link: "https://github.com/username/todo-app",
    detail: "Todo list dengan fitur drag-and-drop untuk mengurutkan prioritas. Data disimpan di localStorage. Dibangun dengan React dan Tailwind CSS."
  },
  {
    id: 3,
    title: "Portfolio Saya",
    description: "Website portfolio ini sendiri.",
    tech: ["React", "Framer Motion", "CSS Modules"],
    image: "https://via.placeholder.com/400x300?text=Portfolio",
    link: "https://github.com/username/portfolio",
    detail: "Portfolio interaktif dengan animasi halus dan desain dark mode. Menggunakan React Router untuk navigasi dan Framer Motion untuk efek transisi."
  }
];

// data sertifikat
import cert1 from './assets/images/certificate-1.jpg';
export const certificates = [
  {
    id: 1,
    title: "Sertifikat React Dasar",
    issuer: "Dicoding",
    date: "Januari 2024",
    image: cert1,
    detail: "Sertifikat kelulusan kursus React Dasar dari Dicoding. Materi: state, props, hooks, dan routing."
  },
  {
    id: 2,
    title: "Sertifikat JavaScript ES6",
    issuer: "FreeCodeCamp",
    date: "Desember 2023",
    image: "https://via.placeholder.com/300x200?text=JS",
    detail: "Sertifikat penyelesaian kursus JavaScript ES6 dari FreeCodeCamp. Topik: arrow functions, destructuring, spread, dan classes."
  },
  {
    id: 3,
    title: "Sertifikat UI/UX Design",
    issuer: "Google",
    date: "November 2023",
    image: "https://via.placeholder.com/300x200?text=UIUX",
    detail: "Sertifikat dari Google tentang prinsip desain UI/UX, prototyping, dan usability testing."
  }
];

// data riwayat pendidikan
export const education = [
  {
    id: 1,
    institution: "SDN 2 NEGLASARI",
    degree: "MURID",
    year: "2012 - 2018",
    description: "Awal mla study dan mulai belajar semua dasar dasar dari sebuah pendidikan",
    icon: "🎓" // bisa pakai emoji atau gambar
  },
  {
    id: 2,
    institution: "SMPN 5 CIBEBER",
    degree: "MURID",
    year: "2018 - 2021",
    description: "Menjadi ketua osis dan pengurus di ekstrakurikuler pramuka. adalah awal dari dari pembentukan karakter dan keorganisasian",
    icon: "📚"
  },
  {
    id: 3,
    institution: "MAN 2 LEBAK",
    degree: "MURID Ipa",
    year: "2021 - 2024",
    description: "Aktif dalam kegiatan ekstrakurikuler robotika dan programming club. Mengikuti beberapa perlombaan Nasional dan Internasional",
    icon: "🤖"
  },
  {
    id: 4,
    institution: "UIN SUNAN GUNUNG DJATI BANDUNG",
    degree: "Mahasiswa Teknik Informatika",
    year: "2024 - Sekarang",
    description: "Sedang menempuh pendidikan sarjana di bidang Teknik Informatika. Fokus pada pengembangan perangkat lunak dan kecerdasan buatan. Aktif dalam komunitas coding kampus.",
    icon: "💻"
  }
];