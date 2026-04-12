import DataImage from "./data"

function App() {
  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div>
        <div className="flex items-center gap-3 mb-3 bg-zinc-800 w-fit p-4 rounded-2xl">
           <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md"/>
           <q>KATAKATA/DESKRIPSI</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Renald Agustinus</h1>
        <p className="text-base/loose mb-6 opacity-50">
          Deskripsi Singkat 
        </p>
        <div className="flex items-center sm:gap-4 gap2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">Download CV <i className="ri-download-2-fill ri-lg"></i></a> 
          <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">Lihat Proyek <i className="ri-arrow-down-fill ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto"/>
    </div>
    </>
  )
}

export default App