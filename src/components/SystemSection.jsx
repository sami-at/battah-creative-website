import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Onboarding & Brief',
    description:
      'You share your raw footage, brand references, and any notes. I learn your style, your audience, and what \u2018done\u2019 looks like for you. We set up a shared workspace (Frame.io or Dropbox) so everything stays organized from day one.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
  },
  {
    number: '02',
    title: 'First Cut',
    description:
      'I edit your footage into a tight, paced short-form video \u2014 with cuts, text overlays, transitions, and music synced to your content. You get a first draft fast, usually within 24\u201348 hours.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=200&fit=crop',
  },
  {
    number: '03',
    title: 'Review & Revisions',
    description:
      'You leave feedback directly on the draft. I refine the cut \u2014 adjusting pacing, text, audio, whatever needs tuning. Two rounds of revisions are included so the final product feels exactly right.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop',
  },
  {
    number: '04',
    title: 'Final Delivery',
    description:
      'You get the finished video exported and ready to post \u2014 optimized for whichever platform you\u2019re publishing on. Reels, TikTok, Shorts \u2014 all formatted correctly, no extra work on your end.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-[#1e1c2b] rounded-2xl overflow-hidden border border-white/5 hover:border-[#fbe9ff]/20 transition-colors flex flex-col h-full group">
        <div className="bg-[#2d2a41] h-[160px] p-4 relative overflow-hidden">
          <img
            src={step.image}
            alt={step.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="bg-[#fbe9ff] w-8 h-8 rounded text-[#101010] font-bold flex items-center justify-center text-sm absolute top-4 left-4 z-10">
            {step.number}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c2b] to-transparent opacity-50 pointer-events-none" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-3 tracking-tight">
            {step.title}
          </h3>
          <p className="text-white/70 text-base leading-relaxed font-medium">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function SystemSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="process" className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-20 md:py-32">
      {/* Header */}
      <motion.div
        ref={headerRef}
        className="text-center mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge mb-6">OUR APPROACH</div>
        <h2 className="heading-display text-2xl sm:text-3xl md:text-5xl mb-4 sm:mb-6 tracking-tight">
          How it works
        </h2>
        <p className="max-w-xl mx-auto font-medium text-[20px] leading-[112%] text-white/80">
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  )
}
