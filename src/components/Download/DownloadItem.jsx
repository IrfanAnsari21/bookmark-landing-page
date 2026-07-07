import React from 'react'
import dotsImg from '/images/bg-dots.svg'

export default function DownloadItem({ img, name, ver }) {
    return (
        <div className='flex flex-col gap-6 py-8 bg-white shadow-[0_10px_20px_rgba(73,93,207,0.15)] rounded-2xl md:py-6 md:gap-4 lg:first:self-start lg:last:self-end lg:py-8 lg:gap-6'>
            <div className='flex flex-col gap-8 items-center md:gap-4 lg:gap-8'>
                <img
                src={img} alt={`${name} logo`}
                className='h-25 md:h-20 lg:h-25'
                />
                <div className='flex flex-col gap-2 md:gap-0 lg:gap-2'>
                    <h3 className='text-2xl font-medium md:text-xl'>Add to {name}</h3>
                    <p className='text-[15px] text-gray-400 md:text-sm'>Minimum version {ver}</p>
                </div>
            </div>

            <img src={dotsImg} alt="Dots" />

            <button className='bg-Blue-600 text-white px-8 py-3 self-center text-sm font-medium rounded shadow-md cursor-pointer hover:bg-white hover:text-Blue-600 hover:outline-2 transition-all md:px-3 md:py-1 lg:px-8 lg:py-3'>
                Add & Install Extension
            </button>
        </div>
    )
}
