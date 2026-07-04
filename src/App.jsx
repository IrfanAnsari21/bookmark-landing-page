import { useState } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='font-rubik text-base text-Blue-950 min-h-screen bg-white'>
      <Header openMenu={() => setIsMenuOpen(true)} />
      <main>
        <HeroSection />
      </main>
      {isMenuOpen && (
        <Menu closeMenu={() => setIsMenuOpen(false)} />
      )}
    </div>
  )
}

export default App
