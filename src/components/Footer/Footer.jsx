import React from 'react'
import BookmarkLogo from '../icons/BookmarkLogo'

export default function Footer() {
    return (
        <footer className='bg-Blue-950 text-white py-8 flex flex-col gap-12 items-center md:flex-row md:px-20 md:justify-between lg:px-41.25'>
            <div className='flex flex-col gap-8 md:flex-row md:items-center md:gap-16'>
                <a href="#">
                    <BookmarkLogo bgColor="Blue-600" iconColor="white" />
                </a>
                <nav>
                    <ul className='flex flex-col gap-6 text-center text-[15px] uppercase md:flex-row lg:gap-12'>
                        <li><a href="#features" className='hover:text-Red-400 transition-all'>Features</a></li>
                        <li><a href="#" className='hover:text-Red-400 transition-all'>Pricing</a></li>
                        <li><a href="#contact" className='hover:text-Red-400 transition-all'>Contact</a></li>
                    </ul>
                </nav>
            </div>

            <div className='flex justify-center items-center gap-10 md:gap-6 lg:gap-10'>
                <a href="https://facebook.com" target='_blank' aria-label='Facebook' className='cursor-pointer hover:opacity-70 transition-opacity'>
                    <img src="/images/icon-facebook.svg" alt="Facebook icon" />
                </a>
                <a href="https://twitter.com" target='_blank' aria-label='Facebook' className='cursor-pointer hover:opacity-70 transition-opacity'>
                    <img src="/images/icon-twitter.svg" alt="Twitter icon" />
                </a>
            </div>
        </footer>
    )
}
