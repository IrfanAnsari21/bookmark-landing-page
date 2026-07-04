import React from 'react'

export default function HeroSection() {
    return (
        <section className='flex flex-col items-center gap-12 md:gap-18 lg:pl-41 lg:flex-row-reverse lg:gap-0'>
            <div className='relative flex px-2.5 pt-8 pb-2 md:px-14 md:pb-6 lg:shrink-0 lg:w-183.75 lg:p-0 lg:pl-4 lg:pb-6.5'>
                <img
                    src="/images/illustration-hero.svg"
                    alt="Screen illustration"
                    className='z-5' />
                <div className='absolute bottom-0 right-0 bg-Blue-600 w-[80%] h-[70%] rounded-l-full md:w-[70%] md:h-[65%]' />
            </div>

            <div className='flex flex-col text-center gap-6 px-8 md:px-28.5 lg:text-start lg:p-0'>
                <h1 className='text-3xl font-medium md:text-5xl'>A Simple Bookmark <br />Manager</h1>
                <p className='text-[15px] text-gray-400 md:text-base'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className='flex justify-center gap-4 lg:justify-start'>
                    <button className='max-w-41.5 grow text-sm bg-Blue-600 text-white font-medium py-3 rounded shadow-md hover:bg-white hover:text-Blue-600 hover:outline-2 transition-all'>Get it on Chrome</button>
                    <button className='max-w-41.5 grow text-sm bg-Grey-50 text-gray-600 font-medium py-3 rounded shadow-md hover:bg-white hover:text-gray-600 hover:outline-2 transition-all'>Get it on Firefox</button>
                </div>
            </div>
        </section>
    )
}
