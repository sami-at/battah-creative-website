import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StandardSection from './components/StandardSection'
import SystemSection from './components/SystemSection'
import OperatingSystem from './components/OperatingSystem'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Navbar />
      <main>
        <Hero />
        <StandardSection />
        <SystemSection />
        <OperatingSystem />
        <CaseStudies />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </motion.div>
  )
}
