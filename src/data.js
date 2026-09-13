// src/data.js



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


// Certifikat
import cert1 from './assets/certificates/cert-1.jpg';
import cert2 from './assets/certificates/cert-2.jpg';
import cert3 from './assets/certificates/cert-3.jpg';

export const certificates = [
  {
    id: 1,
    title: "Higher Education - University Student",
    issuer: "Google For Education",
    date: "September 2026",
    image: cert1,
    alt: "Sertifikat Higher Education - University Student dari Google For Education",
    link: "hhttps://drive.google.com/file/d/1Jgp8TScpVdP6MnzeqMYnMP5RBAJ5dQlT/view",
    detail: "Sertifikat kelulusan kursus React Dasar dari Dicoding. Materi: state, props, hooks, dan routing."
  },
  {
    id: 2,
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicodibg Camp",
    date: "Agust 2026",
    image: cert2,
    alt: "Sertifikat Belajar Membuat Aplikasi Web dengan React dari Dicoding Camp",
    link: "https://www.dicoding.com/certificates/98XW8R6R9PM3",
    detail: "Sertifikat penyelesaian kursus React Dasar dari Dicoding. Materi: Belajar tentang membangun UI di React seperti mengenal element dan component. Serta, belajar juga konsep component properti yang membuat UI aplikasi bersifat reusable"
  },
  {
    id: 3,
    title: "Siswa Tersertifikasi Gemini",
    issuer: "Google",
    date: "Agust 2026",
    image: cert3,
    alt: "Sertifikat Siswa Tersertifikasi Gemini dari Google",
    link: "https://edu.google.accredible.com/60a3e746-b668-44a7-936e-3b50649f78bb#acc.I7D9ihMV",
    detail: "Mahasiswa Gemini University yang tersertifikasi Google dapat mengartikulasikan dan menunjukkan pengetahuan dasar tentang konsep Ai generatif serta fitur dan kemampuan inti Gemini dalam konteks pendidikan. Individu yang telah meraih sertifikasi ini dapat menunjukkan Status mereka dengan sertifikat dan lencana yang dipersonalisasi. Sertifikasi ini berlaku selama 3 tahun."
  }
];

