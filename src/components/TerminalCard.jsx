import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Terminal } from 'lucide-react'

export default function TerminalCard({ number, label, copyLabel, copiedLabel, index }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(number.replace(/\s/g, ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative rounded-2xl p-6 cursor-default"
      style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(59,130,246,0.08) 100%)',
        border: '1px solid rgba(99,102,241,0.25)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow orb */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      {/* Top row */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }}
          >
            <Terminal size={16} className="text-indigo-400" />
          </div>
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">{label}</span>
        </div>

        {/* status dot */}
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-emerald-400"
          />
          <span className="text-xs text-emerald-400 font-medium">Active</span>
        </div>
      </div>

      {/* Phone number */}
      <div className="mb-5">
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1.5">Phone Number</p>
        <p className="font-mono text-2xl font-bold text-white tracking-wider">{number}</p>
      </div>

      {/* Copy button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleCopy}
        className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all"
        style={{
          background: copied
            ? 'rgba(16, 185, 129, 0.2)'
            : 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(59,130,246,0.25))',
          border: copied
            ? '1px solid rgba(16,185,129,0.4)'
            : '1px solid rgba(99,102,241,0.35)',
          color: copied ? '#34d399' : '#a5b4fc',
        }}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="done"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="flex items-center gap-2"
            >
              <Check size={15} /> {copiedLabel}
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="flex items-center gap-2"
            >
              <Copy size={15} /> {copyLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}
