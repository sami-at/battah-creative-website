import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

function useLoopAnimation(totalDuration = 1.2, interval = 4000) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-40px' })

  useEffect(() => {
    if (!inView) return
    let cancelled = false
    const run = async () => {
      while (!cancelled) {
        await controls.start('visible')
        await new Promise((r) => setTimeout(r, interval - totalDuration * 1000))
        if (cancelled) break
        controls.set('hidden')
      }
    }
    run()
    return () => { cancelled = true }
  }, [inView, controls, totalDuration, interval])

  return { controls, ref }
}

function CheckIcon() {
  const { controls, ref } = useLoopAnimation(1.1, 4000)
  return (
    <motion.svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#080617"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      animate={controls}
    >
      <motion.path
        d="M4 12.6L9.5 18L20 6"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.3 } },
        }}
      />
    </motion.svg>
  )
}

function TrendingUpIcon() {
  const { controls, ref } = useLoopAnimation(1.4, 4000)
  return (
    <motion.svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#080617"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      animate={controls}
    >
      <motion.polyline
        points="2 17 8.5 10.5 13.5 15.5 22 7"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.3 } },
        }}
      />
      <motion.polyline
        points="16 7 22 7 22 13"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.9 } },
        }}
      />
    </motion.svg>
  )
}

function GridPlusIcon() {
  const { controls, ref } = useLoopAnimation(1.5, 4000)
  return (
    <motion.svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#080617"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      animate={controls}
    >
      <motion.rect x="3" y="3" width="7" height="7" rx="1.5"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 } } }}
      />
      <motion.rect x="14" y="3" width="7" height="7" rx="1.5"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.5 } } }}
      />
      <motion.rect x="3" y="14" width="7" height="7" rx="1.5"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.7 } } }}
      />
      <motion.line x1="17.5" y1="14" x2="17.5" y2="21"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, ease: 'easeInOut', delay: 0.9 } } }}
      />
      <motion.line x1="14" y1="17.5" x2="21" y2="17.5"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, ease: 'easeInOut', delay: 1.1 } } }}
      />
    </motion.svg>
  )
}

const services = [
  {
    type: 'split',
    title: 'Short-Form Video Editing',
    description:
      'The core of what I do. I take your raw clips — whether it\'s a 45-minute podcast recording or a quick phone video — and cut them into punchy, scroll-stopping short-form content. Clean pacing, bold text overlays, sound design, and platform-native formatting included.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=500&fit=crop',
  },
  {
    type: 'wide',
    title: 'Podcast & Talking Head Clips',
    description:
      'Long conversations deserve short highlights. I pull the best moments from your podcast or talking-head footage and edit them into standalone clips that work on their own — with captions, layout adjustments, and hooks that grab attention in the first second.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop',
  },
  {
    type: 'split-reverse',
    title: 'Content Repurposing',
    description:
      'One shoot, multiple outputs. I take a single piece of footage and break it down into several ready-to-post videos across formats — vertical for Reels and TikTok, square for feed posts, horizontal for YouTube. You create once, I multiply.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
  },
]

export default function StandardSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32">
      {/* Header */}
      <motion.div
        ref={headerRef}
        className="text-center mb-12 sm:mb-16 md:mb-24"
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-badge mb-6">WHAT WE DO</div>
        <h2
          className="heading-display text-2xl sm:text-3xl md:text-5xl mb-4 tracking-tight"
        >
          Video editing for
          <br />
          content creators.
        </h2>
        <p className="mt-6 font-medium text-[20px] leading-[112%] text-white/80">
          Battah Creative is a video editing studio built for content creators. I take your raw footage — talking heads, vlogs, podcasts, behind-the-scenes clips — and turn it into polished short-form content that’s ready to post. No back-and-forth chaos. No missed deadlines. Just clean, punchy edits that match your voice and keep your audience watching.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-6 md:gap-4 max-w-5xl mx-auto">
        {/* Card 1 — Split: Image + Pink Card */}
        <ServiceCard index={0} />
        {/* Card 2 — Wide Pink Card */}
        <ServiceCard index={1} />
        {/* Card 3 — Split Reverse: Image + Pink Card */}
        <ServiceCard index={2} />
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
            See the work
          </span>
        </a>
      </motion.div>
    </section>
  )
}

function ServiceCard({ index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const service = services[index]

  if (index === 0) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col md:flex-row gap-4 items-stretch h-auto md:h-[450px]">
          <div className="w-full md:w-1/2 h-[350px] md:h-full rounded-[24px] overflow-hidden relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover bg-black/10"
            />
          </div>
          <div className="w-full md:w-1/2 bg-[#fbe9ff] rounded-[24px] p-8 sm:p-12 flex flex-col justify-end relative text-[#080617] overflow-hidden min-h-[300px] md:min-h-0 md:h-full">
            <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-[#e7c1ef] flex items-center justify-center shadow-sm">
              <CheckIcon />
            </div>
            <h3 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight mt-12 md:mt-0">
              {service.title}
            </h3>
            <p className="text-base sm:text-lg font-medium opacity-80 leading-relaxed max-w-sm">
              {service.description}
            </p>
          </div>
        </div>
      </motion.div>
    )
  }

  if (index === 1) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full bg-[#fbe9ff] rounded-[24px] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-5 md:gap-8 relative text-[#080617] overflow-hidden h-auto md:h-[450px]">
          <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
            <div className="w-12 h-12 rounded-full bg-[#e7c1ef] flex items-center justify-center shadow-sm">
              <TrendingUpIcon />
            </div>
            <div className="mt-5 md:mt-auto">
              <h3 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg font-medium opacity-80 leading-relaxed max-w-sm">
                {service.description}
              </p>
            </div>
          </div>
          <div className="w-full md:w-[35%] h-[380px] md:h-full bg-[#E7C1EF] rounded-[20px] overflow-hidden ml-auto">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    )
  }

  // index === 2
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col md:flex-row gap-4 items-stretch w-full h-auto md:h-[450px]">
        <div className="w-full md:w-[31.7%] h-[450px] md:h-full rounded-[24px] overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover bg-black/10"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px] pointer-events-none" />
        </div>
        <div className="w-full md:w-[68.3%] bg-[#fbe9ff] rounded-[24px] p-8 sm:p-12 md:p-12 lg:p-16 flex flex-col justify-end relative text-[#080617] overflow-hidden mt-0 min-h-[300px] md:min-h-0 md:h-full">
          <div className="absolute top-8 left-8 md:top-12 md:left-12 w-12 h-12 rounded-full bg-[#e7c1ef] flex items-center justify-center shadow-sm">
            <GridPlusIcon />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight mt-16 sm:mt-0">
            {service.title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl font-medium opacity-80 leading-relaxed max-w-md">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
