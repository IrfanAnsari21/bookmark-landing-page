import React from 'react'

export default function Header({openMenu}) {
  return (
    <header className='flex justify-between items-center px-8 py-10 md:px-20 lg:px-42.75 lg:py-12 lg:mb-14'>
      <a href="#">
        <img src="/images/logo-bookmark.svg" alt="Bookmark logo" />
      </a>
      <button
      onClick={openMenu}
        type='button'
        className='cursor-pointer lg:hidden'>
        <img src="/images/icon-hamburger.svg" alt="Menu icon" />
      </button>
      <nav className='hidden lg:block'>
        <ul className='flex gap-12 items-center uppercase text-sm tracking-wider'>
          <li><a href="#features" className='hover:text-Red-400 transition-all'>Features</a></li>
          <li><a href="#" className='hover:text-Red-400 transition-all'>Pricing</a></li>
          <li><a href="#contact" className='hover:text-Red-400 transition-all'>Contact</a></li>
          <li><button className=' uppercase text-sm bg-Red-400 text-white px-8 py-2.5 rounded shadow-md cursor-pointer hover:bg-white hover:text-Red-400 hover:outline-2 transition-all'>Login</button></li>
        </ul>
      </nav>
    </header>
  )
}
