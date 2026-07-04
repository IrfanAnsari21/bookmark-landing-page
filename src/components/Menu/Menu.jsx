import React from 'react'
import BookmarkLogo from '../icons/BookmarkLogo'

export default function Menu({closeMenu}) {
  return (
    <div className='lg:hidden fixed inset-0 z-10'>
      <div className='fixed inset-0 bg-Blue-950 opacity-95' />
      <div className='relative z-20 h-full px-8 md:px-20 py-10 flex flex-col justify-between gap-4'>
        <div className='flex flex-col gap-10'>
          <div className='flex justify-between items-center'>
            <BookmarkLogo />
            <button type='button' onClick={closeMenu}>
              <img src="/images/icon-close.svg" alt="Close icon" />
            </button>
          </div>
          <div className='flex flex-col gap-6 md:gap-8'>
            <nav>
              <ul className='flex flex-col text-center text-white uppercase text-xl tracking-widest'>
                <li className='py-6 md:py-8 border-b border-gray-500 border-t'><a href="#">Features</a></li>
                <li className='py-6 md:py-8 border-b border-gray-500'><a href="#">Pricing</a></li>
                <li className='py-6 md:py-8 border-b border-gray-500'><a href="#">Contact</a></li>
              </ul>
            </nav>
            <button className='text-white uppercase text-xl border-2 rounded py-2'>Login</button>
          </div>
        </div>
        <div className='flex justify-center items-center gap-10'>
          <img src="/images/icon-facebook.svg" alt="Facebook icon" />
          <img src="/images/icon-twitter.svg" alt="Twitter icon" />
        </div>
      </div>
    </div>
  )
}
