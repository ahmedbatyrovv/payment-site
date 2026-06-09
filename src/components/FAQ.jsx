import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ({ t }) {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-10">
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }}
        >
          <HelpCircle size={18} className="text-indigo-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{t.faq.title}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {t.faq.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(7,19,69,0.6)',
              border: open === i ? '1px solid rgba(99,102,241,0.35)' : '1px solid rgba(99,102,241,0.12)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-semibold text-sm text-slate-200 pr-4">{item.q}</span>
              <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={16} className="text-indigo-400 flex-shrink-0" />
              </motion.div>
            </button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="px-5 pb-4 text-sm text-slate-400 leading-relaxed"
                    style={{ borderTop: '1px solid rgba(99,102,241,0.1)' }}
                  >
                    <div className="pt-3">{item.a}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
