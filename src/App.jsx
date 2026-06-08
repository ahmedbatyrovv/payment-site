import './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TerminalSection from './components/TerminalSection'
import SmsSection from './components/SmsSection'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#030712' }}>
      <Navbar />
      <Hero />
      <TerminalSection />
      <SmsSection />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}
