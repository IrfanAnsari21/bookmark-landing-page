import React, { useEffect, useRef } from 'react'
import BookmarkLogo from '../icons/BookmarkLogo'

export default function Menu({ isOpen, closeMenu }) {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement
      closeBtnRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      triggerRef.current?.focus?.()
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === "Escape") return closeMenu()
      if (e.key !== "Tab" || !panelRef.current) return

      const focusables = panelRef.current.querySelectorAll("a[href], button:not([disabled])");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
      else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, closeMenu])

  return (
    <div
      id='mobile-menu'
      className={`lg:hidden fixed inset-0 z-10 transition-opacity duration-300 ease-out motion-reduce:transition-none ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div onClick={closeMenu} className='fixed inset-0 bg-Blue-950 opacity-95' />
      <div
        ref={panelRef}
        role='dialog'
        aria-modal='true'
        aria-label='Mobile navigation menu'
        className={`relative z-20 h-full px-8 md:px-20 py-10 flex flex-col justify-between gap-4 transition-transform duration-300 ease-out motion-reduce:transition-none ${isOpen ? "translate-x-0" : "translate-x-50"}`}
      >
        <div className='flex flex-col gap-10'>
          <div className='flex justify-between items-center'>
            <BookmarkLogo />
            <button
              ref={closeBtnRef}
              type='button'
              onClick={closeMenu}
              aria-label='Close menu'
            >
              <img src="/images/icon-close.svg" alt="" />
            </button>
          </div>
          <div className='flex flex-col gap-6 md:gap-8'>
            <nav aria-label='Main'>
              <ul className='flex flex-col text-center text-white uppercase text-xl tracking-widest'>
                <li className='py-6 md:py-8 border-b border-gray-500 border-t'><a href="#features">Features</a></li>
                <li className='py-6 md:py-8 border-b border-gray-500'><a href="#">Pricing</a></li>
                <li className='py-6 md:py-8 border-b border-gray-500'><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <button className='text-white uppercase text-xl border-2 rounded py-2'>Login</button>
          </div>
        </div>
        <div className='flex justify-center items-center gap-10'>
          <a href="https://facebook.com" aria-label='Facebook' target='_blank'>
            <img src="/images/icon-facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com" aria-label='Twitter' target='_blank'>
            <img src="/images/icon-twitter.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
