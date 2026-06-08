import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Phone, Copy, Check, Terminal, Wifi } from 'lucide-react'
import Toast from './Toast'

const TERMINAL_NUMBERS = [
  { id: 1, number: '+99362434203' },
  { id: 2, number: '+99364989842' },
]

function TerminalCard({ number, onCopy }) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(number)
    setCopied(true)
    onCopy(t('toast.copied'))
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        rotateX: 4,
        rotateY: -4,
        transition: { duration: 0.3 }
      }}
      className="card-3d relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        background: 'linear-gradient(135deg, rgba(14,31,58,0.9), rgba(6,13,32,0.95))',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      }}
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          padding: '1px',
          background: 'linear-gradient(135deg, rgba(34,211,238,0.5), rgba(59,130,246,0.3))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      />

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-cyan-400/20 flex items-center justify-center">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <span className="font-body text-xs text-slate-500 uppercase tracking-widest">Terminal</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Wifi className="w-3 h-3 text-green-400" />
          <span className="font-body text-[10px] text-green-400">Online</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-gradient-to-r from-transparent via-white/08 to-transparent" />

      {/* Number display */}
      <div className="px-5 py-5">
        <div
          className="rounded-xl p-4 flex items-center gap-4"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
            <Phone className="w-4.5 h-4.5 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body text-xs text-slate-500 mb-1">Nomer</p>
            <p className="number-display text-white font-semibold text-lg tracking-wide">{number}</p>
          </div>
        </div>
      </div>

      {/* Copy button */}
      <div className="px-5 pb-5">
        <motion.button
          onClick={handleCopy}
          whileTap={{ scale: 0.96 }}
          className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-300 ${
            copied
              ? 'bg-emerald-500/20 border border-emerald-400/30 text-emerald-400'
              : 'btn-primary text-white'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              {t('terminal.copied')}
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              {t('terminal.copy')}
            </>
          )}
        </motion.button>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #22d3ee, transparent)' }}
      />
    </motion.div>
  )
}

export default function TerminalSection() {
  const { t } = useTranslation()
  const [toast, setToast] = useState({ visible: false, message: '' })

  const showToast = (msg) => {
    setToast({ visible: true, message: msg })
    setTimeout(() => setToast({ visible: false, message: '' }), 3000)
  }

  return (
    <section id="terminal" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-400/20 text-sm mb-5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-body text-blue-300">01</span>
          </div>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {t('terminal.title')}
          </h2>
          <p className="font-body text-slate-400 text-lg max-w-md mx-auto">
            {t('terminal.subtitle')}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {TERMINAL_NUMBERS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TerminalCard number={item.number} onCopy={showToast} />
            </motion.div>
          ))}
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </section>
  )
}
