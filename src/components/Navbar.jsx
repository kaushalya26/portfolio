import React, { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Exploring', href: '#exploring' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
      px-[5%] h-[68px] transition-all duration-300 backdrop-blur-md border-b border-accent/20
      ${scrolled ? 'bg-navy/97 shadow-lg shadow-black/20' : 'bg-navy/90'}`}>

      <span className="font-display text-xl text-accent tracking-wider select-none">KTJ</span>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-7 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}
              className={`text-[0.78rem] font-semibold tracking-widest uppercase transition-colors duration-200
                ${active === l.href.slice(1) ? 'text-amber-300' : 'text-amber-300/70 hover:text-gold'}`}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* ✅ FIXED — <a tag was missing */}
      <a
        href="/Kaushalya_TJ_Resume.pdf"
        download="Kaushalya_TJ_Resume.pdf"
        className="hidden md:flex items-center gap-1.5 bg-accent text-navy
          px-4 py-1.5 rounded-sm text-[0.75rem] font-bold tracking-widest uppercase
          hover:bg-gold transition-all duration-200 hover:-translate-y-0.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
        </svg>
        Resume
      </a>

      {/* Hamburger — mobile */}
      <button className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenu(!menuOpen)} aria-label="Toggle menu">
        <span className={`block w-6 h-0.5 bg-white/80 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white/80 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white/80 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-navy/98 border-b border-accent/20 md:hidden">
          <ul className="flex flex-col py-4 px-6 gap-4 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMenu(false)}
                  className="block text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}

            {/* ✅ FIXED — <a tag was missing here too */}
            <li>

              <a href="/Kaushalya_TJ_Resume.pdf"
                download="Kaushalya_TJ_Resume.pdf"
                onClick={() => setMenu(false)}
                className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-accent hover:text-gold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}