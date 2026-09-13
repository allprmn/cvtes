import React from 'react'

// Data jadwal mata kuliah kamu
const mataKuliah = [
  { no: 1, nama: "20100470501024 - Manajemen Basis Data - SMT 5", kelas: "A", sks: 3, ruang: "R.4.09", hari: "Senin", waktu: "09:30:00 s/d 12:00:00", dosen: "- Wildan Budiawan Zulfikar S.T., M.Kom." },
  { no: 2, nama: "20100470501026 - Jaringan Komputer - SMT 5", kelas: "A", sks: 3, ruang: "R.4.11", hari: "Rabu", waktu: "09:30:00 s/d 12:00:00", dosen: "- Cecep Nurul Alam M.T." },
  { no: 3, nama: "20100470501028 - Pengembangan Aplikasi Mobile - SMT 5", kelas: "A", sks: 3, ruang: "R.4.01", hari: "Kamis", waktu: "09:30:00 s/d 12:00:00", dosen: "- H. Aldy Rialdy Atmadja M.T" },
  { no: 4, nama: "20100470501030 - Pengembangan Aplikasi Web - SMT 5", kelas: "A", sks: 3, ruang: "R.4.01", hari: "Kamis", waktu: "15:30:00 s/d 18:00:00", dosen: "- Muhammad Deden Firdaus ST, M.Kom" },
  { no: 5, nama: "20100470501032 - Interaksi Manusia dan Komputer - SMT 5", kelas: "A", sks: 3, ruang: "R.4.01", hari: "Rabu", waktu: "07:00:00 s/d 09:30:00", dosen: "- Dr. Cepy Slamet S.T., M.Kom." },
  { no: 6, nama: "20100470501033 - Intelegensia Buatan - SMT 5", kelas: "A", sks: 3, ruang: "R.4.10", hari: "Selasa", waktu: "15:30:00 s/d 18:00:00", dosen: "- Jumadi ST., M.Cs." },
  { no: 7, nama: "20100470501034 - Manajemen Proyek Perangkat Lunak - SMT 5", kelas: "A", sks: 3, ruang: "R.4.01", hari: "Senin", waktu: "07:00:00 s/d 09:30:00", dosen: "- Agung Wahana S.E., M.T." },
  { no: 8, nama: "20100470503006 - Kewirausahaan & Etika Bisnis - SMT 7", kelas: "A", sks: 2, ruang: "R.4.11", hari: "Selasa", waktu: "10:20:00 s/d 12:00:00", dosen: "- Adam Farooqi ST., MT." },
]

export default function About() {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-10 bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Bio Singkat */}
        <h2 className="text-3xl font-bold text-white mb-6">Tentang Saya</h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-12">
          Saya adalah seorang pengembang aplikasi dan web yang berfokus pada desain mobile, 
          performa tinggi, dan kolaborasi teknologi terkini. Berpengalaman membangun 
          aplikasi mobile, website interaktif, serta mengintegrasikan teknologi digital.
        </p>

        {/* Judul Tabel */}
        <h3 className="text-2xl font-semibold text-white mb-6">Jadwal Mata Kuliah Semester Ini</h3>
        
        {/* Container Tabel dengan Scroll Horizontal untuk Layar Kecil */}
        <div className="w-full overflow-x-auto rounded-xl border border-slate-700 bg-slate-800">
          <table className="w-full text-left text-sm whitespace-nowrap">
            {/* Header Tabel */}
            <thead className="bg-slate-700 text-slate-300 uppercase text-xs font-semibold tracking-wider">
              <tr>
                <th className="px-6 py-4">No</th>
                <th className="px-6 py-4">Matakuliah</th>
                <th className="px-6 py-4">Kelas</th>
                <th className="px-6 py-4 text-center">SKS</th>
                <th className="px-6 py-4">Ruang</th>
                <th className="px-6 py-4">Hari</th>
                <th className="px-6 py-4">Waktu</th>
                <th className="px-6 py-4">Dosen</th>
              </tr>
            </thead>
            
            {/* Isi Tabel */}
            <tbody className="divide-y divide-slate-700">
              {mataKuliah.map((item, index) => (
                <tr 
                  key={item.no} 
                  className={`transition-colors hover:bg-slate-700/50 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'}`}
                >
                  <td className="px-6 py-4 text-slate-300">{item.no}</td>
                  <td className="px-6 py-4 font-medium text-white">{item.nama}</td>
                  <td className="px-6 py-4 text-slate-300">{item.kelas}</td>
                  <td className="px-6 py-4 text-center text-slate-300">{item.sks}</td>
                  <td className="px-6 py-4 text-slate-300">{item.ruang}</td>
                  <td className="px-6 py-4 text-slate-300">{item.hari}</td>
                  <td className="px-6 py-4 text-slate-300">{item.waktu}</td>
                  <td className="px-6 py-4 text-slate-400">{item.dosen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}