import { useState } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import HeroSection from './components/HeroSection/HeroSection'
import FeaturesSection from './components/Features/FeaturesSection'
import DownloadSection from './components/Download/DownloadSection'
import FAQSection from './components/FAQSection/FAQSection'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='font-rubik text-base text-Blue-950 min-h-screen bg-white'>
      <Header openMenu={() => setIsMenuOpen(true)} />
      <main className='flex flex-col gap-32'>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <FAQSection />
      </main>
      {isMenuOpen && (
        <Menu closeMenu={() => setIsMenuOpen(false)} />
      )}
    </div>
  )
}

export default App
