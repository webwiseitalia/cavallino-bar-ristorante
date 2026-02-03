import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/chi-siamo', label: 'Chi Siamo' },
    { to: '/menu', label: 'Menu' },
    { to: '/terrazza', label: 'Terrazza' },
    { to: '/territorio', label: 'Territorio' },
    { to: '/galleria', label: 'Galleria' },
    { to: '/contatti', label: 'Contatti' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo('.menu-link',
        { y: 80, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        }
      )
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Header container */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'h-20 bg-white shadow-md' : 'h-24 md:h-28'
        }`}
      >
        <div className="relative h-full px-6 md:px-10 flex items-center justify-between">
          {/* Logo a sinistra */}
          <Link
            to="/"
            className="relative z-50 group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isOpen || scrolled ? 'bg-stone-800' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <span className="font-serif text-xl font-bold text-white">C</span>
              </div>
              <div className={`hidden sm:block transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <span className={`font-serif text-lg font-bold block leading-none transition-colors ${
                  scrolled ? 'text-stone-900' : 'text-white'
                }`}>Il Cavallino</span>
              </div>
            </motion.div>
          </Link>

          {/* Navbar centrata */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {links.slice(1, 5).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`link-hover text-sm font-medium tracking-wide uppercase transition-colors ${
                  scrolled ? 'text-stone-900' : 'text-white'
                } ${location.pathname === link.to ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottoni a destra */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:+393391513234"
              className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-2xl font-medium text-sm transition-all duration-300 ${
                scrolled
                  ? 'bg-stone-800 text-white hover:bg-stone-700'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Prenota
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 w-12 h-12 flex flex-col justify-center items-center gap-1.5"
              aria-label="Menu"
            >
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 6 : 0,
                  backgroundColor: isOpen ? '#ffffff' : scrolled ? '#44403c' : '#ffffff'
                }}
                className="w-7 h-0.5 block origin-center"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                  backgroundColor: isOpen ? '#ffffff' : scrolled ? '#44403c' : '#ffffff'
                }}
                className="w-7 h-0.5 block"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -6 : 0,
                  backgroundColor: isOpen ? '#ffffff' : scrolled ? '#44403c' : '#ffffff'
                }}
                className="w-7 h-0.5 block origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 3rem) 3rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-stone-800"
          >
            <div className="h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
              <nav className="space-y-2">
                {links.map((link, i) => (
                  <div key={link.to} className="overflow-hidden">
                    <Link
                      to={link.to}
                      className="menu-link block"
                      style={{ opacity: 0 }}
                    >
                      <span className="flex items-baseline gap-4 group">
                        <span className="text-amber-400/50 text-sm font-mono">0{i + 1}</span>
                        <span className={`font-serif text-5xl md:text-7xl lg:text-8xl text-white transition-all duration-300 group-hover:text-amber-400 ${
                          location.pathname === link.to ? 'text-amber-400' : ''
                        }`}>
                          {link.label}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 right-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Telefono</p>
                    <a href="tel:+393391513234" className="text-white text-2xl md:text-3xl font-serif hover:text-amber-400 transition-colors">
                      339 151 3234
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Indirizzo</p>
                    <p className="text-white/80">Via Tù 24, Vezza d'Oglio</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
