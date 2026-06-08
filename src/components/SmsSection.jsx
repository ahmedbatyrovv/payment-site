import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MessageSquare, Copy, Check, Send, Hash } from 'lucide-react'
import Toast from './Toast'

const SMS_NUMBERS = [
  { id: 1, number: '62434203' },
  { id: 2, number: '64989842' },
  { id: 3, number: '65429862' },
  { id: 4, number: '65000000' },
  { id: 5, number: '61234567' },
]

function SmsCard({ number, onToast }) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const [amount, setAmount] = useState('')

  const handleCopy = () => {
    navigator.clipboard.writeText(number)
    setCopied(true)
    onToast(t('toast.copied'))
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePay = () => {
    const smsBody = encodeURIComponent(`${number} ${amount || ''}`.trim())
    window.location.href = `sms:0804?body=${smsBody}`
    onToast(t('toast.smsOpened'))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        rotateX: 3,
        rotateY: -3,
        transition: { duration: 0.3 }
      }}
      className="card-3d relative rounded-2xl overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, rgba(10,22,40,0.95), rgba(6,13,32,0.98))',
        boxShadow: '0 16px 48px rgba(0,0,0,0.35)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Hover border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          padding: '1px',
          background: 'linear-gradient(135deg, rgba(34,211,238,0.4), rgba(99,102,241,0.3))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      />

      <div className="p-5 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-400/20 border border-cyan-400/20 flex items-center justify-center">
              <Hash className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <span className="font-body text-[10px] text-slate-500 uppercase tracking-widest">SMS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="font-body text-[10px] text-green-400">Active</span>
          </div>
        </div>

        {/* Number */}
        <div
          className="rounded-xl p-3.5 flex items-center gap-3"
          style={{ background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.1)' }}
        >
          <MessageSquare className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span className="number-display text-white font-semibold text-base flex-1">{number}</span>
          <motion.button
            onClick={handleCopy}
            whileTap={{ scale: 0.9 }}
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
              copied
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-white/05 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </motion.button>
        </div>

        {/* Amount input */}
        <input
          type="number"
          min="1"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder={t('sms.amountPlaceholder')}
          className="premium-input w-full rounded-xl px-4 py-3 font-body text-white placeholder:text-slate-600 text-sm"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        />

        {/* Pay button */}
        <motion.button
          onClick={handlePay}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-display font-semibold text-sm text-white transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
            boxShadow: '0 4px 20px rgba(6,182,212,0.25)',
          }}
        >
          <Send className="w-3.5 h-3.5" />
          {t('sms.pay')}
        </motion.button>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-28 h-14 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #22d3ee, transparent)' }}
      />
    </motion.div>
  )
}

export default function SmsSection() {
  const { t } = useTranslation()
  const [toast, setToast] = useState({ visible: false, message: '' })

  const showToast = (msg) => {
    setToast({ visible: true, message: msg })
    setTimeout(() => setToast({ visible: false, message: '' }), 3000)
  }

  return (
    <section id="sms" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.08), transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/20 text-sm mb-5">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-body text-cyan-300">02</span>
          </div>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {t('sms.title')}
          </h2>
          <p className="font-body text-slate-400 text-lg max-w-md mx-auto">
            {t('sms.subtitle')}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SMS_NUMBERS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <SmsCard number={item.number} onToast={showToast} />
            </motion.div>
          ))}
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </section>
  )
}
