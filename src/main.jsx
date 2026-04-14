import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx' 
import 'remixicon/fonts/remixicon.css'
import Preloader from './component/Preloader.jsx'
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <div className='container mx-auto px-4'>
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)