import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  { name: 'Medhat', role: 'Entrepreneur', initial: 'M', vimeoId: '1144122013' },
  { name: 'Diana', role: 'Founder', initial: 'D', vimeoId: '1144121636' },
  { name: 'Mira Daher', role: 'CEO', initial: 'M', vimeoId: '1144121766' },
  { name: 'Hager', role: 'Creator', initial: 'H', vimeoId: '1144121241' },
  { name: 'Jihad', role: 'Expert', initial: 'J', vimeoId: '1144121096' },
  { name: 'Vennre', role: 'Founder', initial: 'V', vimeoId: '1144121387' },
  { name: 'Leo', role: 'Consultant', initial: 'L', vimeoId: '1144122134' },
  { name: 'Reem', role: 'Coach', initial: 'R', vimeoId: '1144121444' },
  { name: 'Suzan', role: 'Creator', initial: 'S', vimeoId: '1144122103' },
  { name: 'Steve', role: 'Founder', initial: 'S', vimeoId: '1144122058' },
  { name: 'Pavel', role: 'Consultant', initial: 'P', vimeoId: '1144121872' },
  { name: 'Hala', role: 'Chef', initial: 'H', vimeoId: '1144121290' },
  { name: 'Sara', role: 'Dentist', initial: 'S', vimeoId: '1144121493' },
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="shrink-0" style={{ width: 'calc(50% - 8px)' }}>
      <div className="w-full aspect-[9/16] rounded-[24px] bg-black shrink-0 relative overflow-hidden border border-white/10 cursor-pointer shadow-lg group">
        {/* Vimeo Background */}
        <div className="absolute inset-0 z-[1]">
          <iframe
            src={`https://player.vimeo.com/video/${testimonial.vimeoId}?autoplay=0&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0`}
            className="w-full h-[120%] -mt-[10%] scale-[1.05]"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
            title={`${testimonial.name} testimonial`}
          />
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-[3]">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
        </div>

        {/* Name Badge */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-[2] pointer-events-none">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#fbe9ff] rounded-full flex items-center justify-center shrink-0 shadow-md">
              <span className="font-bold text-[#080617] text-sm">{testimonial.initial}</span>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm leading-tight drop-shadow-md">{testimonial.name}</h4>
              <p className="text-xs font-medium text-white/80 drop-shadow-md">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  const itemsPerPage = 2
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const goPrev = () => setPage((p) => Math.max(0, p - 1))
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1))

  return (
    <section className="py-12 sm:py-20 md:py-32 w-full overflow-hidden border-y border-white/5 relative bg-[#080617]">
      {/* Header */}
      <motion.div
        ref={headerRef}
        className="text-center mb-12 sm:mb-16 md:mb-20 max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge mb-6">Testimonials</div>
        <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 tracking-tight">
          Hear From Our Clients
        </h2>
        <p className="max-w-2xl mx-auto font-medium text-[20px] leading-[112%] text-white/80">
          Don't just take our word for it. Hear directly from the experts who've
          transformed their market positioning with us.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative max-w-5xl mx-auto px-12 sm:px-16">
        {/* Prev */}
        <button
          onClick={goPrev}
          disabled={page === 0}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed border border-white/20"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={goNext}
          disabled={page >= totalPages - 1}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed border border-white/20"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              gap: '16px',
              transform: `translateX(calc(-${page * 100}% - ${page * 16}px))`,
            }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page
                  ? 'bg-[#fbe9ff] w-6'
                  : 'bg-white/30 hover:bg-white/50 w-2'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
