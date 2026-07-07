import React, { useState } from 'react'

import tab1Illust from '/images/illustration-features-tab-1.svg';
import tab2Illust from '/images/illustration-features-tab-2.svg';
import tab3Illust from '/images/illustration-features-tab-3.svg';

export default function FeaturesSection() {
    const [tab, setTab] = useState(0);

    const tabs = [
        {
            id: "simple",
            label: "Simple Bookmarking",
            img: tab1Illust,
            title: "Bookmark in one click",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        },
        {
            id: "search",
            label: "Speedy Searching",
            img: tab2Illust,
            title: "Intelligent search",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
        {
            id: "share",
            label: "Easy Sharing",
            img: tab3Illust,
            title: "Share your bookmarks",
            description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        }
    ]
    return (
        <section id='features' className='flex flex-col gap-8 md:gap-16 lg:gap-18'>
            <div className='flex flex-col self-center text-center gap-4 px-8 md:px-28.5 lg:px-0 lg:w-135'>
                <h2 className='text-3xl font-medium'>Features</h2>
                <p className='text-[15px] text-gray-400 md:text-base'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>

            <div
                role='tablist'
                aria-label='Features'
                className='grid grid-rows-[repeat(3,60px)] text-[15px] text-center self-center w-full px-8 lg:max-w-182.5 md:px-20 md:grid-rows-none md:grid-cols-3 md:text-[16px] lg:px-0'
            >
                {tabs.map((t, i) => (
                    <button
                        key={t.id}
                        role="tab"
                        id={`tab-${t.id}`}
                        aria-selected={tab === i}
                        aria-controls={`panel-${t.id}`}
                        onClick={() => setTab(i)}
                        type='button'
                        className={`relative flex items-center justify-center border-b border-gray-400 ${i === 0 ? 'border-t md:border-t-0' : ''} md:pb-8 cursor-pointer transition-colors hover:text-Red-400 ${tab === i ? "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-40.75 after:bg-Red-400 md:after:w-full after:transition-all motion-reduce:transition-none" : "text-gray-400"}`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className='flex flex-col gap-8 text-center md:gap-16 lg:gap-30 lg:flex-row lg:text-start lg:items-center'>
                <div className='relative px-8 pb-9 pt-2 md:px-15 md:pb-22 md:pt-0 lg:px-0 lg:shrink-0 lg:w-176.25'>
                    <img
                        key={tab}
                        src={tabs[tab].img} alt=""
                        className='relative z-5 w-full md:pl-28 lg:w-134 lg:p-0 lg:ml-auto animate-fadeIn'
                    />
                    <div className='absolute bg-Blue-600 w-[80%] h-[85%] left-0 bottom-0 rounded-r-full md:w-[85%] md:h-[80%] animate-fadeIn' />
                </div>

                <div
                    role='tabpanel'
                    id={`panel-${tabs[tab].id}`}
                    aria-labelledby={`tab-${tabs[tab].id}`}
                    key={tab}
                    className='flex flex-col gap-4 items-center md:px-40 md:gap-6 lg:pl-0 lg:pr-42 lg:items-start lg:pb-18 animate-fadeInText'
                >
                    <div className='flex flex-col gap-4 md:gap-6'>
                        <h2 className='text-3xl font-medium md:text-[32px]'>
                            {tabs[tab].title}
                        </h2>
                        <p className='text-[15px] text-gray-400 md:text-base'>
                            {tabs[tab].description}
                        </p>
                    </div>
                    <button className='bg-Blue-600 text-white text-sm w-28.5 font-medium py-3 rounded shadow-md cursor-pointer hover:bg-white hover:text-Blue-600 hover:outline-2 transition-all'>
                        More Info
                    </button>
                </div>
            </div>
        </section>
    )
}
