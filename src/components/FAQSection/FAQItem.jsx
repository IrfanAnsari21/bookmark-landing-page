import React, { useState } from 'react'
import ArrowIcon from '/images/icon-arrow.svg'

export default function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex flex-col gap-4 py-4 border-b border-[rgba(36,42,69,0.15)] first-of-type:border-t'>
            <button
                onClick={() => setOpen(prev => !prev)}
                type='button'
                className='flex justify-between items-center cursor-pointer'
            >
                <p className='text-[15px] md:text-base hover:text-Red-400 transition-all'>{question}</p>
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    className={open ? "rotate-180 fill-Red-400 transition-all" : "rotate-0 fill-Blue-600 transition-all"}
                >
                    <path d="M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                </svg>
            </button>

            {open && (
                <p className='text-gray-400 text-[15px] font-light md:text-[16px]'>{answer}</p>
            )}
        </div>
    )
}
