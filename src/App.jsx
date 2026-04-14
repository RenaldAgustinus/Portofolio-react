import DataImage from "./data"
import {listTools, listProyek} from "./data"
import { useEffect } from "react"; // Tambahkan ini
import AOS from "aos"; // Tambahkan ini
import "aos/dist/aos.css"; // Tambahkan ini

function App() {

  useEffect(() => {
    AOS.init({
      once: false, // Biar animasi bisa muncul berkali-kali saat di-scroll up/down
    });
  }, []);
  
  return (
    <>
      {/* SECTION HERO */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Renald Agustinus</h1>
          <p className="text-base/loose mb-6 opacity-50">
            "Mahasiswa Sistem Informasi Bisnis yang sedang mendalami Front-End Development dan UI/UX Design. 
            Memiliki latar belakang sebagai Junior Storyboard Artist yang membantu saya dalam memahami alur visual sebuah aplikasi."
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a 
              href="/CV_Renald_Agustinus.pdf" 
              download="CV_Renald_Agustinus.pdf" 
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500"
            >
              Download CV <i className="ri-download-2-fill ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">Lihat Proyek <i className="ri-arrow-down-fill ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>

      {/* SECTION TENTANG */}
      <div className="tentang mt-32 py-10"id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg " data-aos="fade-up" data-aos-duration="1000">
          <div className="text-base/loose md:text-lg/relaxed space-y-6 text-zinc-300">
          <p>
            Halo! Saya <span className="text-white font-bold">Renald Agustinus</span>, mahasiswa Sistem Informasi Bisnis di <span className="text-white font-semibold">Politeknik Negeri Malang</span>.
          </p>

          <p>
            Perjalanan saya di dunia digital dimulai dari peran sebagai <span className="italic text-zinc-100">Junior Storyboard Artist</span>. Pengalaman ini memberikan saya pondasi kuat dalam memahami komposisi dan alur visual, yang kini sangat berguna saat saya merancang antarmuka pengguna di dunia <span className="text-violet-400 font-semibold">UI/UX Design</span>.
          </p>

          <p>
            Saat ini, saya sedang fokus mengembangkan keahlian di bidang <span className="text-violet-400 font-semibold">Front-End Development</span>. Saya sangat menikmati proses mengubah desain visual menjadi kode fungsional yang interaktif menggunakan <span className="text-white font-medium">React</span> dan <span className="text-white font-medium">Tailwind CSS</span>.
          </p>
        </div>
          
          <div className="flex justify-end gap-10 mt-6">
            <div className="text-right">
              <h1 className="text-2xl font-bold">4 <span className="text-violet-500">+</span></h1>
              <p className="text-sm opacity-60">Proyek Selesai</p>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold">2 <span className="text-violet-500">+</span></h1>
              <p className="text-sm opacity-60">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
     {/* SECTION TOOLS */}
      <div className="tools mt-32 pb-20"> {/* Hapus text-center di sini */}
        
        {/* Judul & Deskripsi tetap di tengah */}
        <h1 className="text-4xl/snug font-bold mb-2 text-center" data-aos="fade-up" data-aos-duration="1000">TOOLS</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 mx-auto text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website ataupun Design
        </p>

        {/* Kotak-kotak tools */}
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-4 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} 
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt={tool.nama} className="w-14 bg-zinc-800 p-3 rounded-lg group-hover:bg-zinc-900" />
              
              {/* Teks di sini sekarang otomatis rata kiri karena text-center di atas sudah dibuang */}
              <div className="text-left"> 
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.keterangan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     {/* SECTION PROYEK */}
        <div className="proyek mt-32 py-10" id="proyek">
            <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
            <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut adalah proyek yang saya buat</p>
        </div>

        <div className="proyek-box mt-14 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
            {listProyek.map((proyek) => (
                <div key={proyek.id} className="p-6 bg-zinc-800 rounded-lg flex flex-col h-full shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
                    {/* Gambar: Dibuat w-full supaya tetap besar mengikuti lebar card */}
                    <div className="w-full overflow-hidden rounded-md mb-6">
                        <img 
                            src={proyek.gambar} 
                            alt="Proyek Image" 
                            loading="lazy" 
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    
                    {/* Konten: Menggunakan flex-1 agar div ini memenuhi sisa ruang */}
                    <div className="flex flex-col flex-1">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold mb-3">{proyek.nama}</h1>
                            <p className="text-base/loose opacity-70 mb-5">{proyek.desk}</p>
                            
                            <div className="flex flex-wrap gap-2">
                                {proyek.tools.map((tool, index) => (
                                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-700 rounded-md text-sm font-semibold" key={index}>
                                        {tool}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Tombol: mt-auto akan memaksa tombol ini nempel ke dasar card */}
                        <div className="mt-auto pt-4">
                            <a href="#" className="bg-violet-700 py-3 rounded-lg block w-full text-center font-bold hover:bg-violet-600 transition-colors shadow-md">
                                Lihat Project
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* SECTION KONTAK */}
        <div id="kontak" className="kontak mt-32 py-10 w-full">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-delay="300">Mari Terhubung dengan saya</p>
            <form 
              action="https://formsubmit.co/renaldagustinus41@gmail.com" 
              method="POST" 
              className="bg-zinc-800 p-10 w-full max-w-2xl mx-auto rounded-md" 
              autoComplete="off"
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay="500"
            >
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-white">Nama Lengkap</label>
                        <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-zinc-500 bg-zinc-900 text-white p-2 rounded-md focus:border-violet-500 outline-none" required />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-white">Email</label>
                        <input type="email" name="email" placeholder="Masukkan Email" className="border border-zinc-500 bg-zinc-900 text-white p-2 rounded-md focus:border-violet-500 outline-none" required />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label htmlFor="pesan" className="font-semibold text-white">Pesan</label>
                        <textarea name="pesan" id="pesan" rows="7" className="border border-zinc-500 bg-zinc-900 text-white p-2 rounded-md focus:border-violet-500 outline-none resize-none" required placeholder="Pesan ..."></textarea>
                    </div>
                    
                    <div className="text-center">
                        <button type="submit" className="bg-violet-700 py-3 rounded-lg w-full cursor-pointer text-center font-bold hover:bg-violet-600 transition-colors shadow-md text-white">
                            Kirim Pesan
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </>
  );
}

export default App