import React, { useId, useState } from 'react'
import ArrowIcon from '/images/icon-arrow.svg'

export default function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);
    const id = useId()

    return (
        <div className='flex flex-col gap-4 py-4 border-b border-[rgba(36,42,69,0.15)] first-of-type:border-t'>
            <button
                onClick={() => setOpen(prev => !prev)}
                type='button'
                aria-expanded={open}
                aria-controls={`faq-panel-${id}`}
                className='flex justify-between items-center w-full cursor-pointer'
            >
                <span className='text-[15px] md:text-base hover:text-Red-400 transition-all'>{question}</span>
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    aria-hidden="true"
                    className={`transition-transform duration-300 motion-reduce:transform-none ${open ? "rotate-180 fill-Red-400" : "rotate-0 fill-Blue-600"}`}
                >
                    <path d="M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                </svg>
            </button>

            <div
                id={`faq-panel-${id}`}
                role='region'
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transform-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <p className=' overflow-hidden text-gray-400 text-[15px] font-light md:text-[16px]'>{answer}</p>
            </div>
        </div>
    )
}
