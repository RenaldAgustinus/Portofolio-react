const Footer = () => {
  return (
    // Tambahkan 'flex' dan 'items-center' di sini
    <div className="mt-32 py-10 border-t border-zinc-800 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        
        <div className="flex gap-7">
            <a href="#beranda" className="opacity-50 hover:opacity-100 transition-opacity">Beranda</a>
            <a href="#tentang" className="opacity-50 hover:opacity-100 transition-opacity">Tentang</a>
            <a href="#proyek" className="opacity-50 hover:opacity-100 transition-opacity">Proyek</a>
        </div>
        
        <div className="flex items-center gap-4">
            <a href="#" className="hover:text-violet-500 transition-colors">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#" className="hover:text-violet-500 transition-colors">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#" className="hover:text-violet-500 transition-colors">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer