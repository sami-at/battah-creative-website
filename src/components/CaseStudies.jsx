import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const caseStudies = [
]

function CaseStudyCard({ study, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-white text-black rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 relative overflow-hidden cursor-pointer group shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-black/5 hover:shadow-[0_8px_40px_rgba(251,233,255,0.15)] transition-shadow duration-500">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          {/* Name */}
          <div className="flex-1 mb-6 lg:mb-0">
            <h3
              className="text-4xl sm:text-[50px] font-black uppercase tracking-tight leading-[0.9] mb-2"
              style={{ wordSpacing: '-0.1em' }}
            >
              {study.name.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h3>
            <p className="font-bold text-sm sm:text-base uppercase tracking-wider text-black">
              {study.role}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 sm:gap-12 items-start shrink-0 flex-wrap">
            {study.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <p className="text-4xl sm:text-[44px] font-black tracking-tight mb-1 leading-[1]">
                  {stat.value}
                </p>
                {stat.label && (
                  <p className="font-bold text-black text-xs sm:text-sm">{stat.label}</p>
                )}
                {stat.note && (
                  <p className="text-[11px] font-medium text-black/70 max-w-[160px] mt-1 leading-snug">
                    {stat.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expandable section for Leena */}
        {study.expandable && (
          <div className="pt-8 mt-6 border-t border-black/10">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
              <div className="flex-[1.2]">
                <h4 className="font-black text-base mb-2">Before</h4>
                <p className="text-sm font-medium text-black/80 max-w-[280px]">
                  {study.before}
                </p>
              </div>
              <div className="flex-[1.2]">
                <h4 className="font-black text-base mb-3">What we did</h4>
                <ul className="space-y-3 mb-8">
                  {study.actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-0.5 rounded-full bg-[#fbe9ff] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" width="10" height="10" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium leading-snug">{action}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-black text-base mb-2">Impact</h4>
                <p className="text-sm font-medium text-black/80 max-w-md leading-relaxed">
                  {study.impact}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="case-studies" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32">
      {/* Header */}
      <motion.div
        ref={headerRef}
        className="text-center mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge mb-6">RECENT WORK</div>
        <h2 className="heading-display text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6 tracking-tight">
          Selected edits
        </h2>
        <p className="max-w-xl mx-auto font-medium text-[20px] leading-[112%] text-white/80">
          Want to see more?
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={i} study={study} index={i} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-16 sm:mt-24 flex justify-center relative z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a href="#contact" className="w-full sm:w-auto relative group">
          <span className="absolute inset-0 rounded-xl bg-[#fbe9ff] blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
          <span className="relative block cta-shine-light px-10 py-4 rounded-xl font-bold text-lg text-center">
            View full portfolio
          </span>
        </a>
      </motion.div>
    </section>
  )
}
