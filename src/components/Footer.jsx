import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Zap } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative py-10 border-t border-white/05">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-display font-600 text-white">AhmedDev</span>
          </div>

          {/* Tagline */}
          <p className="font-body text-sm text-slate-500">
            {t('footer.tagline')}
          </p>

          {/* Rights */}
          <p className="font-body text-xs text-slate-600">
            © {new Date().getFullYear()} AhmedDev. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  )
}
