import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-[#fbe9ff] rounded-[24px] sm:rounded-[40px] p-10 sm:p-16 md:p-24 text-center relative overflow-hidden group shadow-[0_0_80px_rgba(251,233,255,0.05)] border border-[#fbe9ff]/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-[#080617] mb-4 sm:mb-6 tracking-tight relative z-10 leading-[1] md:leading-[1.1]">
            Let's make your content hit harder.
          </h2>
          <p className="text-[#080617]/80 text-sm sm:text-base max-w-[600px] mx-auto mb-10 relative z-10 font-medium tracking-tight">
            Whether you need a one-off edit or a monthly retainer, I'm easy to work with and fast to deliver. Drop me a message and let's figure out what makes sense for you.
          </p>
          <div className="flex justify-center relative z-20">
            <a
              href="mailto:ilyas@battahcreative.com"
              className="cta-shine text-white px-10 py-4 rounded-full font-bold text-[15px] inline-block relative group"
            >
              <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <span className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <span className="absolute top-0 left-[10%] right-[10%] h-[40%] bg-gradient-to-b from-white/10 to-transparent rounded-full" />
              </span>
              Book a call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
