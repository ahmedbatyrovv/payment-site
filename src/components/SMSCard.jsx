import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, MessageSquare, Send } from 'lucide-react'

export default function SMSCard({ number, label, copyLabel, copiedLabel, payLabel, index }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(number.replace(/\s/g, ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePay = () => {
    const clean = number.replace(/\s/g, '')
    window.location.href = `sms:${clean}?body=Payment`
  }

  const gradients = [
    ['rgba(99,102,241,0.15)', 'rgba(139,92,246,0.10)'],
    ['rgba(59,130,246,0.15)', 'rgba(6,182,212,0.10)'],
    ['rgba(139,92,246,0.15)', 'rgba(236,72,153,0.08)'],
    ['rgba(6,182,212,0.15)', 'rgba(59,130,246,0.10)'],
    ['rgba(236,72,153,0.10)', 'rgba(99,102,241,0.15)'],
  ]
  const [c1, c2] = gradients[index % gradients.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.09, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -5, scale: 1.015 }}
      className="relative rounded-2xl p-5"
      style={{
        background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
        border: '1px solid rgba(99,102,241,0.2)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 6px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }}
        >
          <MessageSquare size={14} className="text-indigo-400" />
        </div>
        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">{label}</span>
      </div>

      <div className="mb-4">
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Number</p>
        <p className="font-mono text-lg font-bold text-white tracking-wide">{number}</p>
      </div>

      <div className="flex gap-2">
        <motion.button
          whileTap={{ scale: 0.93 }}
          onClick={handleCopy}
          className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold transition-all"
          style={{
            background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(99,102,241,0.18)',
            border: copied ? '1px solid rgba(16,185,129,0.35)' : '1px solid rgba(99,102,241,0.3)',
            color: copied ? '#34d399' : '#a5b4fc',
          }}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span key="d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                <Check size={13} /> {copiedLabel}
              </motion.span>
            ) : (
              <motion.span key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                <Copy size={13} /> {copyLabel}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.93 }}
          whileHover={{ boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}
          onClick={handlePay}
          className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #3b82f6)',
            border: '1px solid rgba(99,102,241,0.4)',
            color: '#fff',
            boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
          }}
        >
          <Send size={13} /> {payLabel}
        </motion.button>
      </div>
    </motion.div>
  )
}
