import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    number: '01',
    title: 'Short-Form Video Editing',
    description:
      'The core of what I do. I take your raw clips \u2014 whether it\u2019s a 45-minute podcast recording or a quick phone video \u2014 and cut them into punchy, scroll-stopping short-form content. Clean pacing, bold text overlays, sound design, and platform-native formatting included.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=450&fit=crop',
    direction: 'normal',
  },
  {
    number: '02',
    title: 'Podcast & Talking Head Clips',
    description:
      'Long conversations deserve short highlights. I pull the best moments from your podcast or talking-head footage and edit them into standalone clips that work on their own \u2014 with captions, layout adjustments, and hooks that grab attention in the first second.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    direction: 'reverse',
  },
  {
    number: '03',
    title: 'Content Repurposing',
    description:
      'One shoot, multiple outputs. I take a single piece of footage and break it down into several ready-to-post videos across formats \u2014 vertical for Reels and TikTok, square for feed posts, horizontal for YouTube. You create once, I multiply.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    direction: 'normal',
  },
]

function FeatureRow({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isReverse = feature.direction === 'reverse'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`flex flex-col ${
          isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-start gap-8 sm:gap-10 md:gap-20`}
      >
        {/* Video/Image */}
        <div className="w-full md:w-[63%] rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#2d2a41] border border-white/10 aspect-[16/9] shadow-2xl relative group">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-[32%] flex flex-col gap-4">
          <span className="text-[#fbe9ff] font-medium text-lg mb-2">
            {feature.number}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
            {feature.title}
          </h3>
          <p className="text-white/70 text-lg leading-relaxed mt-2">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function OperatingSystem() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32">
      {/* Header */}
      <motion.div
        ref={headerRef}
        className="text-center mb-12 sm:mb-20 md:mb-32"
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge mb-6">CAPABILITIES</div>
        <h2 className="heading-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 tracking-tight max-w-3xl mx-auto">
          What I Edit
        </h2>
        <p className="max-w-2xl mx-auto font-medium text-[20px] leading-[112%] text-white/80">
        </p>
      </motion.div>

      {/* Feature Rows */}
      <div className="flex flex-col gap-16 sm:gap-24 md:gap-40">
        {features.map((feature, i) => (
          <FeatureRow key={feature.number} feature={feature} index={i} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-16 sm:mt-24 md:mt-32 flex justify-center relative z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a href="#contact" className="w-full sm:w-auto relative group">
          <span className="absolute inset-0 rounded-xl bg-[#fbe9ff] blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
          <span className="relative block cta-shine-light px-10 py-4 rounded-xl font-bold text-lg text-center">
            Book a call
          </span>
        </a>
      </motion.div>
    </section>
  )
}
