import React from 'react'
import chromeLogo from '/images/logo-chrome.svg';
import firefoxLogo from '/images/logo-firefox.svg';
import operaLogo from '/images/logo-opera.svg';
import DownloadItem from './DownloadItem';

export default function DownloadSection() {
    const items = [
        {
            img: chromeLogo,
            name: "Chrome",
            ver: "62"
        },
        {
            img: firefoxLogo,
            name: "Firefox",
            ver: "55"
        },
        {
            img: operaLogo,
            name: "Opera",
            ver: "46"
        }
    ];

    return (
        <section className='max-w-225 flex flex-col items-center self-center text-center gap-10 px-8 md:px-20 md:gap-16 lg:gap-12 lg:px-0'>
            <div className='max-w-150 flex flex-col gap-4 md:px-9'>
                <h2 className='text-3xl font-medium md:text-[32px]'>Download the extension</h2>
                <p className='text-[15px] text-gray-400 md:text-base'>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            </div>

            <div className='flex flex-col gap-10 px-4 md:px-0 md:flex-row md:gap-2 lg:gap-8 lg:h-112.75 lg:items-center'>
                {items.map(item => (
                    <DownloadItem key={item.name} {...item} />
                ))}
            </div>
        </section>
    )
}
