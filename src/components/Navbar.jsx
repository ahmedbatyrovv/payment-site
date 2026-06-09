import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'

const langLabels = { tk: 'Türkmençe', ru: 'Русский', tr: 'Türkçe' }

export default function Navbar({ lang, setLang, sidebarOpen, setSidebarOpen }) {
  const [langOpen, setLangOpen] = useState(false)

  return (
    <>
      {/* Lang dropdown overlay */}
      <AnimatePresence>
        {langOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setLangOpen(false)}
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-50 h-16">
        <div
          className="h-full px-4 md:px-6 flex items-center justify-between"
          style={{
            background: 'rgba(4, 15, 46, 0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(99, 102, 241, 0.15)',
            boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
          }}
        >
          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-blue-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>

            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #3b82f6)',
                  boxShadow: '0 0 16px rgba(99,102,241,0.5)',
                }}
              >
                AD
              </div>
              <span className="font-bold text-white text-sm md:text-base tracking-tight hidden sm:block">
                AhmedDev{' '}
                <span className="text-indigo-400">–</span>{' '}
                IsmailUSA
              </span>
            </div>
          </div>

          {/* Right: lang switcher */}
          <div className="relative z-50">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-blue-200 hover:text-white transition-colors"
              style={{
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(99,102,241,0.25)',
              }}
            >
              <Globe size={15} />
              <span className="hidden sm:inline">{langLabels[lang]}</span>
              <span className="sm:hidden">{lang.toUpperCase()}</span>
              <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-44 rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(7,19,69,0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                  }}
                >
                  {Object.entries(langLabels).map(([code, label]) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setLangOpen(false) }}
                      className="w-full px-4 py-3 text-left text-sm transition-colors flex items-center gap-3"
                      style={{
                        color: lang === code ? '#a5b4fc' : '#94a3b8',
                        background: lang === code ? 'rgba(99,102,241,0.15)' : 'transparent',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,0.1)'}
                      onMouseLeave={e => e.currentTarget.style.background = lang === code ? 'rgba(99,102,241,0.15)' : 'transparent'}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full inline-block ${lang === code ? 'bg-indigo-400' : ''}`} />
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  )
}
