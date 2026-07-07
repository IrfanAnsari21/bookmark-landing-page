import React, { useState } from 'react'

export default function ContactSection() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function validateEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function handleSubmit() {
        if (!validateEmail(email)) {
            setError("Whoops, make sure it's an email");
        } else {
            setError("");
        }
    }
    return (
        <section className='bg-Blue-600 h-90 px-8 flex flex-col gap-8 justify-center items-center text-center md:px-40' id='contact'>
            <div className='text-white flex flex-col gap-4 md:gap-6 max-w-110'>
                <p className='uppercase text-xs font-medium tracking-[5px] md:text-sm md:font-semibold'>35,000+ already joined</p>
                <h2 className='text-2xl font-medium md:text-[32px]'>Stay up-to-date with what we're doing</h2>
            </div>

            <div className='flex flex-col gap-4 md:flex-row w-full max-w-110'>
                <div className={`w-full md:grow ${error ? "bg-Red-400 rounded-b-[5px]" : ""}`}>
                    <div className={`relative bg-white rounded-[5px] ${error ? "border-2 border-Red-400" : ""}`}>
                        <input
                            type="text"
                            placeholder='Enter your email address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full h-12 px-4 rounded-[5px] text-[15px] outline-none md:px-6 md:text-[14px]'
                        />

                        {error && (
                            <img
                                src="/images/icon-error.svg" alt="Error icon"
                                className='absolute right-3 top-1/2 -translate-y-1/2'
                            />
                        )}
                    </div>
                    {error && (
                        <div className='text-white text-[10px] italic px-4 pt-1 pb-1.5 text-left'>
                            {error}
                        </div>
                    )}
                </div>
                <button
                    onClick={handleSubmit}
                    className='shrink-0 h-12 text-sm bg-Red-400 text-white px-8 py-2.5 rounded shadow-md cursor-pointer hover:bg-white hover:text-Red-400 hover:outline-2 transition-all'
                >
                    Contact Us
                </button>
            </div>
        </section>
    )
}
