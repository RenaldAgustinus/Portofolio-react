const Image = {
  // Tidak perlu pakai import di atas, langsung tulis jalurnya sebagai string
  HeroImage: "/assets/renald-profile.jpeg", 
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: "/assets/tools/vscode.png",
    nama: "Visual Studio Code",
    keterangan: "Code Editor",
  },
  {
    id: 2,
    gambar: "/assets/tools/reactjs.png",
    nama: "React JS",
    keterangan: "Framework",
  },
  {
    id: 3,
    gambar: "/assets/tools/tailwind.png",
    nama: "Tailwind CSS",
    keterangan: "Framework",
  },
  {
    id: 4,
    gambar: "/assets/tools/vite.png", // Pastikan file vite.png ada di folder
    nama: "Vite",
    keterangan: "Build Tool",
  },
  {
    id: 5,
    gambar: "/assets/tools/laravel.jpg", // Pastikan file laravel.png ada di folder
    nama: "Laravel",
    keterangan: "PHP Framework",
  },
  {
    id: 6,
    gambar: "/assets/tools/php.png", // Pastikan file php.png ada di folder
    nama: "PHP",
    keterangan: "Language",
  },
  {
    id: 7,
    gambar: "/assets/tools/github.png",
    nama: "Github",
    keterangan: "Repository",
  },
  {
    id: 8,
    gambar: "/assets/tools/figma.png",
    nama: "Figma",
    keterangan: "Design App",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
// Jangan lupa import gambarnya di bagian atas file data.js ya!
// Contoh: import ProyekSibeta from "../assets/sibeta.png"
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Bebas Tanggungan (SiBeTa)",
    desk: "Sistem informasi untuk mengelola persyaratan akademik mahasiswa akhir di POLINEMA agar bebas tanggungan wisuda.",
    tools: ["HTML", "Javascript", "Bootstrap", "MySQL", "CSS", "PHP"],
    link: "https://github.com/RenaldAgustinus/PBL_SistemBebasTanggungan", // <--- TAMBAHKAN INI
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2, 
    nama: "Website Tracer Study",
    desk: "Platform untuk melacak jejak karier alumni dan mengumpulkan feedback pengguna lulusan guna evaluasi kurikulum.",
    tools: ["Laravel", "Bootstrap", "PHP", "MySQL"],
    link: "https://github.com/RenaldAgustinus/PBL_TracerStudy", // <--- TAMBAHKAN INI
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3, 
    nama: "HRIS Mobile App",
    desk: "Aplikasi manajemen SDM untuk absensi dan penggajian karyawan secara real-time melalui perangkat mobile.",
    tools: ["Flutter", "Dart", "Laravel", "PHP"],
    link: "https://github.com/BagasSatriaYn/PBL_HRISKel3", // <--- TAMBAHKAN INI
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4, 
    nama: "Personal Portfolio",
    desk: "Website portofolio interaktif untuk memamerkan proyek pengembangan perangkat lunak dan desain UI/UX.",
    tools: ["Vite", "ReactJS", "NodeJS", "TailwindCSS"],
    link: "https://github.com/RenaldAgustinus/portofolio-react", // <--- TAMBAHKAN INI
    dad: "500",
  },
];
