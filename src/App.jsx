import DataImage from "./data"
import {listTools} from "./data"
function App() {
  return (
    <>
      {/* SECTION HERO */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-3 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>KATAKATA/DESKRIPSI</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Renald Agustinus</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Deskripsi Singkat 
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">Download CV <i className="ri-download-2-fill ri-lg"></i></a> 
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">Lihat Proyek <i className="ri-arrow-down-fill ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
      </div>

      {/* SECTION TENTANG */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <p className="text-base mb-10">
            Hi, perkenalkan saya Bagas Satria Yudho Nugraha... (isi deskripsi kamu)
          </p>
          
          <div className="flex justify-end gap-10 mt-6">
            <div className="text-right">
              <h1 className="text-2xl font-bold">45 <span className="text-violet-500">+</span></h1>
              <p className="text-sm opacity-60">Proyek Selesai</p>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold">45 <span className="text-violet-500">+</span></h1>
              <p className="text-sm opacity-60">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TOOLS */}
      <div className="tools mt-32 pb-20 text-center"> {/* Tambah pb-20 supaya ada jarak di bawah saat di-scroll */}
        <h1 className="text-4xl/snug font-bold mb-2">TOOLS</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 mx-auto">
          Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website ataupun Design
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md
          hover:bg-zinc-800 group" key={tool.id}>
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-3 rounded-lg group-hover:bg-zinc-900" />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.keterangan}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App