import { motion } from 'framer-motion'

const tickerImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=356&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=356&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=356&fit=crop',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=356&fit=crop',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=356&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=356&fit=crop',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=356&fit=crop',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=356&fit=crop',
]

function TickerItem({ src }) {
  return (
    <div className="w-[100px] sm:w-[130px] md:w-[155px] aspect-[9/16] rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-white/5 mx-1">
      <img
        src={src}
        alt="Client content"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

function MarqueeRow() {
  return (
    <div className="flex shrink-0 justify-around [gap:var(--gap)] flex-row animate-marquee">
      {tickerImages.map((src, i) => (
        <TickerItem key={i} src={src} />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto overflow-hidden text-center relative min-h-[calc(100dvh-5rem)] sm:min-h-[calc(100dvh-6rem)] flex flex-col items-center justify-center pb-4 sm:pb-6 px-4 pt-24 sm:pt-28">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#fbe9ff]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Trust Badge */}
      <motion.div
        className="mb-3 sm:mb-4 inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-[11px] sm:text-[13px] font-medium text-white/80 tracking-wide">
          50+ CREATORS SERVED
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="heading-display relative z-10 text-center mb-4 sm:mb-5"
        style={{ fontSize: 'clamp(26px, 5vw, 56px)' }}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Your content, edited to hit.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="max-w-xl mx-auto mb-6 relative z-10 text-center font-medium text-[15px] sm:text-[17px] leading-[140%] text-white/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Short-form video editing for creators who move fast and need every clip to land. Clean cuts, sharp pacing, scroll-stopping output — delivered on time, every time.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <a href="#contact" className="w-full sm:w-auto relative group">
          <span className="absolute inset-0 rounded-xl bg-[#fbe9ff] blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
          <span className="relative block cta-shine-light px-8 py-3.5 rounded-xl font-bold">
            See the work
          </span>
        </a>
        <a
          href="#case-studies"
          className="w-full sm:w-auto border border-white/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-center"
        >
          Let's Talk
        </a>
      </motion.div>

      {/* Marquee Ticker */}
      <motion.div
        className="mt-6 sm:mt-10 w-full relative z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 1%, black 99%, transparent)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div
          className="group flex overflow-hidden p-2 flex-row"
          style={{ '--duration': '50s', '--gap': '0.5rem' }}
        >
          <MarqueeRow />
          <MarqueeRow />
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </motion.div>
    </section>
  )
}
