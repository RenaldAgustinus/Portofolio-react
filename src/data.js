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

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];
