import React from 'react'
import FAQList from './FAQList'

export default function FAQSection() {
  return (
    <section className='flex flex-col gap-14 px-8 self-center md:px-0 lg:max-w-135'>
      <div className='flex flex-col gap-4 text-center'>
        <h2 className='text-3xl font-semibold md:text-[32px]'>Frequently Asked Questions</h2>
        <p className='text-[15px] text-gray-400 md:text-base'>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
      </div>

      <FAQList />

      <button className='bg-Blue-600 text-white text-sm w-28.5 font-medium py-3 self-center rounded shadow-md hover:bg-white hover:text-Blue-600 hover:outline-2 transition-all'>
        More Info
      </button>
    </section>
  )
}
