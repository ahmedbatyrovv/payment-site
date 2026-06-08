import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Send, Instagram, MessageCircle, ExternalLink } from 'lucide-react'

const CONTACTS = [
  {
    key: 'telegram',
    icon: Send,
    handle: '@ahmeddev_tm',
    href: 'https://t.me/ahmeddev_tm',
    color: 'from-blue-500/20 to-sky-400/10',
    borderColor: 'border-blue-400/25',
    iconColor: 'text-blue-400',
    glowColor: 'rgba(59,130,246,0.25)',
    bgColor: '#2AABEE',
  },
  {
    key: 'instagram',
    icon: Instagram,
    handle: '@ahmeddev.tm',
    href: 'https://instagram.com/ahmeddev.tm',
    color: 'from-pink-500/20 to-purple-400/10',
    borderColor: 'border-pink-400/25',
    iconColor: 'text-pink-400',
    glowColor: 'rgba(236,72,153,0.25)',
    bgColor: '#E1306C',
  },
  {
    key: 'whatsapp',
    icon: MessageCircle,
    handle: '+993 62 434 203',
    href: 'https://wa.me/99362434203',
    color: 'from-green-500/20 to-emerald-400/10',
    borderColor: 'border-green-400/25',
    iconColor: 'text-green-400',
    glowColor: 'rgba(34,197,94,0.25)',
    bgColor: '#25D366',
  },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.06), transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="font-body text-slate-400 text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.key}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden block"
              style={{
                background: 'linear-gradient(135deg, rgba(10,22,40,0.85), rgba(6,13,32,0.95))',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              {/* Hover border */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                style={{
                  padding: '1px',
                  background: `linear-gradient(135deg, ${c.bgColor}50, ${c.bgColor}20)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                }}
              />

              {/* Icon circle */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} border ${c.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                style={{ boxShadow: `0 8px 24px ${c.glowColor}` }}
              >
                <c.icon className={`w-7 h-7 ${c.iconColor}`} />
              </div>

              <h3 className="font-display font-600 text-white text-lg mb-1.5">
                {t(`contact.${c.key}`)}
              </h3>
              <p className="font-body text-slate-500 text-sm mb-4">{c.handle}</p>

              <div
                className={`flex items-center gap-1.5 text-xs font-body ${c.iconColor} opacity-70 group-hover:opacity-100 transition-opacity`}
              >
                <span>Açmak</span>
                <ExternalLink className="w-3 h-3" />
              </div>

              {/* Glow */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-12 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse, ${c.bgColor}, transparent)` }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
