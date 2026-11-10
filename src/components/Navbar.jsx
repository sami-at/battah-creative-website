import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = ['Client Login', 'Book a call']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0">
        <motion.div
          className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mt-3 sm:mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={`rounded-[18px] sm:rounded-[23px] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border border-white/5 transition-all duration-500`}
            style={{
              backgroundColor: 'rgba(45, 42, 65, 0.4)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 text-white" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <span className="font-black text-[26px] tracking-tight">BATTAH CREATIVE</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#case-studies"
                className="text-white/60 px-5 py-2.5 rounded-lg font-medium text-sm hover:text-white transition-colors"
              >
                Work
              </a>
              <a
                href="#services"
                className="text-white/60 px-5 py-2.5 rounded-lg font-medium text-sm hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-white/60 px-5 py-2.5 rounded-lg font-medium text-sm hover:text-white transition-colors"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-white/60 px-5 py-2.5 rounded-lg font-medium text-sm hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="cta-shine-light px-6 py-2.5 rounded-lg font-bold"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Burger */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="md:hidden mt-2 px-0"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#1e1c2b] rounded-xl p-4 flex flex-col gap-3 border border-white/10 shadow-xl">
                  <a
                    href="#case-studies"
                    className="text-white/60 py-3 rounded-lg font-medium text-sm text-center hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Work
                  </a>
                  <a
                    href="#services"
                    className="text-white/60 py-3 rounded-lg font-medium text-sm text-center hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#process"
                    className="text-white/60 py-3 rounded-lg font-medium text-sm text-center hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Process
                  </a>
                  <a
                    href="#contact"
                    className="text-white/60 py-3 rounded-lg font-medium text-sm text-center hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <a
                    href="#contact"
                    className="cta-shine-light px-6 py-3 rounded-lg font-bold text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    Let's Talk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </>
  )
}
