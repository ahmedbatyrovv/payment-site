import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import TerminalCard from './components/TerminalCard'
import SMSCard from './components/SMSCard'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { translations } from './i18n/translations'
import { terminalNumbers, smsNumbers } from './data/payments'

const SECTIONS = ['payments', 'contact']

export default function App() {
  const [lang, setLang] = useState('tk')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('payments')
  const [activeTab, setActiveTab] = useState('terminal')
  const t = translations[lang]

  const handleSection = (section) => {
    setActiveSection(section)
    setSidebarOpen(false)
  }

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: 'linear-gradient(135deg, #020817 0%, #040f2e 40%, #071345 80%, #020817 100%)',
        color: '#e2e8f0',
      }}
    >
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: '-20%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: '10%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <Navbar lang={lang} setLang={setLang} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar open={sidebarOpen} activeSection={activeSection} setActiveSection={handleSection} setSidebarOpen={setSidebarOpen} t={t} />

      {/* Main layout */}
      <div className="flex pt-16">
        {/* Spacer for open sidebar on desktop */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              exit={{ width: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="hidden md:block flex-shrink-0"
            />
          )}
        </AnimatePresence>

        {/* Content */}
        <main className="flex-1 min-w-0 px-4 md:px-8 py-8 max-w-4xl mx-auto w-full">

          {/* === PAYMENTS === */}
          {activeSection === 'payments' && (
            <motion.div
              key="payments"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Tab bar */}
              <div
                className="flex gap-1 p-1 rounded-2xl mb-8 w-fit"
                style={{
                  background: 'rgba(7,19,69,0.7)',
                  border: '1px solid rgba(99,102,241,0.18)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {['terminal', 'sms'].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                    style={{ color: activeTab === tab ? '#fff' : '#64748b' }}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tabBg"
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(59,130,246,0.4))',
                          boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
                        }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      {tab === 'terminal' ? (
                        <>
                          <Zap size={14} />
                          {t.tabs.terminal}
                        </>
                      ) : (
                        <>{t.tabs.sms}</>
                      )}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                {activeTab === 'terminal' && (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-white mb-1">{t.terminal.title}</h2>
                      <p className="text-sm text-slate-400">{t.terminal.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {terminalNumbers.map((item, i) => (
                        <TerminalCard
                          key={item.id}
                          number={item.number}
                          label={item.label}
                          copyLabel={t.terminal.copy}
                          copiedLabel={t.terminal.copied}
                          index={i}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'sms' && (
                  <motion.div
                    key="sms"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-white mb-1">{t.sms.title}</h2>
                      <p className="text-sm text-slate-400">{t.sms.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {smsNumbers.map((item, i) => (
                        <SMSCard
                          key={item.id}
                          number={item.number}
                          label={item.label}
                          copyLabel={t.sms.copy}
                          copiedLabel={t.sms.copied}
                          payLabel={t.sms.pay}
                          index={i}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* === CONTACT === */}
          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Contact t={t} />
            </motion.div>
          )}

          <Footer t={t} />
        </main>
      </div>
    </div>
  )
}
