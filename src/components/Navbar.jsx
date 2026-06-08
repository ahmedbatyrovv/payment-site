import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Menu, X, Zap, Globe } from 'lucide-react'

const languages = [
  { code: 'tk', label: 'TM', flag: '🇹🇲' },
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  const navLinks = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.terminal', href: '#terminal' },
    { key: 'nav.sms', href: '#sms' },
    { key: 'nav.features', href: '#features' },
    { key: 'nav.contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/5 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 blur-sm opacity-50 group-hover:opacity-80 transition-opacity" />
            </div>
            <div>
              <span className="font-display font-700 text-white text-lg tracking-tight">Ahmed</span>
              <span className="font-display font-300 text-cyan-400 text-lg">Dev</span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="font-body text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/08 hover:border-cyan-400/30 text-sm font-body text-slate-300 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>{currentLang.flag}</span>
                <span className="hidden sm:inline">{currentLang.label}</span>
              </motion.button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 glass-card rounded-xl overflow-hidden min-w-[120px] shadow-2xl"
                    onMouseLeave={() => setLangOpen(false)}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code)
                          setLangOpen(false)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150 hover:bg-white/05 ${
                          i18n.language === lang.code ? 'text-cyan-400' : 'text-slate-300'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="font-body">{lang.label}</span>
                        {i18n.language === lang.code && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.a
              href="#terminal"
              className="hidden sm:flex btn-primary text-white text-sm font-display font-semibold px-4 py-2.5 rounded-lg items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="w-3.5 h-3.5" />
              {t('hero.cta')}
            </motion.a>

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg glass text-slate-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/05 glass"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/04 transition-all font-body text-sm"
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
