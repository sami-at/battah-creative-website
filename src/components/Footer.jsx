import { motion } from 'framer-motion'

const footerLinks = {
  Navigation: [
    { label: 'Work', href: '#case-studies' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  Socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white text-[#080617] rounded-t-[32px] sm:rounded-t-[48px] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand + socials */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block mb-5">
              <span className="text-2xl font-black italic tracking-tight text-[#080617]">
                BATTAH CREATIVE
              </span>
            </a>
            <p className="text-[#080617]/60 text-sm leading-relaxed max-w-xs mb-6 tracking-tight">
              Short-form video editing for creators.
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#080617] flex items-center justify-center hover:bg-[#080617]/80 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#080617] flex items-center justify-center hover:bg-[#080617]/80 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#080617] flex items-center justify-center hover:bg-[#080617]/80 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-[#080617] mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#080617]/60 text-sm hover:text-[#080617] transition-colors tracking-tight"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#080617]/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#080617]/50">
          <p className="tracking-tight">© 2026 Battah Creative LLC. All rights reserved.</p>
          <p className="tracking-tight">
          </p>
        </div>
      </div>
    </footer>
  )
}
