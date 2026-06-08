import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Smartphone, MessageSquare, Zap, Shield } from 'lucide-react'

const FEATURES = [
  {
    key: 'responsive',
    icon: Smartphone,
    color: 'from-violet-500/20 to-purple-400/10',
    borderColor: 'border-violet-400/20',
    iconColor: 'text-violet-400',
    glowColor: 'rgba(139,92,246,0.3)',
  },
  {
    key: 'sms',
    icon: MessageSquare,
    color: 'from-cyan-500/20 to-blue-400/10',
    borderColor: 'border-cyan-400/20',
    iconColor: 'text-cyan-400',
    glowColor: 'rgba(34,211,238,0.3)',
  },
  {
    key: 'fast',
    icon: Zap,
    color: 'from-yellow-500/20 to-orange-400/10',
    borderColor: 'border-yellow-400/20',
    iconColor: 'text-yellow-400',
    glowColor: 'rgba(234,179,8,0.3)',
  },
  {
    key: 'secure',
    icon: Shield,
    color: 'from-emerald-500/20 to-green-400/10',
    borderColor: 'border-emerald-400/20',
    iconColor: 'text-emerald-400',
    glowColor: 'rgba(16,185,129,0.3)',
  },
]

export default function Features() {
  const { t } = useTranslation()

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/08 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-cyan-400 text-sm uppercase tracking-widest mb-4">
            {t('features.title')}
          </p>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="font-body text-slate-400 text-lg max-w-md mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative group rounded-2xl p-6 cursor-default overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(10,22,40,0.8), rgba(6,13,32,0.9))',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} border ${feat.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                style={{ boxShadow: `0 4px 16px ${feat.glowColor}` }}
              >
                <feat.icon className={`w-5.5 h-5.5 ${feat.iconColor}`} />
              </div>

              <h3 className="font-display font-600 text-white text-lg mb-2">
                {t(`features.${feat.key}.title`)}
              </h3>
              <p className="font-body text-slate-400 text-sm leading-relaxed">
                {t(`features.${feat.key}.desc`)}
              </p>

              {/* Bottom glow */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-12 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse, ${feat.glowColor}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/08 to-transparent" />
    </section>
  )
}
