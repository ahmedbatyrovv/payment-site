import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Shield, Zap, ChevronDown } from 'lucide-react'

function FloatingCard3D({ style, delay = 0, children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      style={style}
      className={`animate-float ${className}`}
    >
      {children}
    </motion.div>
  )
}

function HeroPaymentCard() {
  return (
    <div
      className="relative w-[320px] h-[200px] rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2341 40%, #071525 100%)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
        transform: 'perspective(1000px) rotateX(8deg) rotateY(-12deg)',
      }}
    >
      {/* Shimmer overlay */}
      <div className="absolute inset-0 shimmer" />

      {/* Holographic stripe */}
      <div
        className="absolute top-0 right-0 w-24 h-full opacity-30"
        style={{
          background: 'linear-gradient(135deg, transparent, rgba(34,211,238,0.3), transparent)',
        }}
      />

      {/* Chip */}
      <div className="absolute top-8 left-7">
        <div
          className="w-10 h-8 rounded-md"
          style={{
            background: 'linear-gradient(135deg, #d4af37, #f5d060, #b8860b)',
            boxShadow: '0 2px 8px rgba(212,175,55,0.4)',
          }}
        >
          <div className="w-full h-1/2 border-b border-black/10" />
          <div className="flex h-1/2">
            <div className="flex-1 border-r border-black/10" />
            <div className="flex-1" />
          </div>
        </div>
      </div>

      {/* Network logo */}
      <div className="absolute top-8 right-7">
        <div className="flex">
          <div className="w-7 h-7 rounded-full bg-red-500/80 -mr-2" />
          <div className="w-7 h-7 rounded-full bg-yellow-500/80" />
        </div>
      </div>

      {/* Card number */}
      <div className="absolute bottom-14 left-7">
        <p className="number-display text-white/80 text-sm tracking-[0.2em]">
          •••• •••• •••• 4203
        </p>
      </div>

      {/* Bottom row */}
      <div className="absolute bottom-5 left-7 right-7 flex justify-between items-end">
        <div>
          <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">Card Holder</p>
          <p className="text-white font-display font-semibold text-sm tracking-wide">AHMED DEV</p>
        </div>
        <div className="text-right">
          <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">Expires</p>
          <p className="text-white font-display font-semibold text-sm">12/28</p>
        </div>
      </div>

      {/* Glow bottom */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-20 rounded-full blur-xl opacity-60"
        style={{ background: 'radial-gradient(ellipse, #3b82f6, transparent)' }}
      />
    </div>
  )
}

function TerminalIllustration() {
  return (
    <div
      className="relative w-[220px] h-[160px] rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(15,35,65,0.9), rgba(7,21,37,0.95))',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,211,238,0.15)',
        transform: 'perspective(800px) rotateX(-5deg) rotateY(8deg)',
      }}
    >
      {/* Screen */}
      <div className="absolute inset-3 rounded-xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060d20, #030712)', border: '1px solid rgba(34,211,238,0.2)' }}>
        {/* Cyan glow top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Screen content */}
        <div className="p-3 space-y-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="h-1.5 w-12 rounded bg-green-400/30" />
          </div>
          <div className="h-1 w-20 rounded bg-cyan-400/20" />
          <div className="h-1 w-16 rounded bg-blue-400/20" />
          <div className="h-1 w-24 rounded bg-white/10" />
          <div className="h-1 w-14 rounded bg-cyan-400/30" />
          <div className="flex items-center gap-1 mt-2">
            <div className="h-1.5 w-16 rounded bg-blue-400/40" />
          </div>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="absolute bottom-2.5 left-3 right-3 flex gap-2">
        <div className="flex-1 h-4 rounded-md bg-cyan-500/20 border border-cyan-400/20" />
        <div className="flex-1 h-4 rounded-md bg-blue-500/20 border border-blue-400/20" />
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-10 animate-blob"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full opacity-10 animate-blob animation-delay-2000"
          style={{ background: 'radial-gradient(circle, #22d3ee, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 left-1/2 w-[600px] h-[300px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }}
        />
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* Left: Text content */}
          <div className="text-center lg:text-left space-y-6">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-cyan-400/20 text-sm"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-slow" />
              <span className="font-body text-cyan-300">{t('hero.badge')}</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
                {t('hero.title')}
                <br />
                <span className="text-gradient">{t('hero.titleAccent')}</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-body text-slate-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#terminal"
                className="btn-primary flex items-center gap-2.5 text-white font-display font-semibold px-7 py-4 rounded-xl text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Zap className="w-4.5 h-4.5" />
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#features"
                className="flex items-center gap-2 text-slate-300 hover:text-white font-body text-base transition-colors px-4 py-4"
                whileHover={{ x: 3 }}
              >
                {t('hero.ctaSecondary')}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 justify-center lg:justify-start pt-2"
            >
              {[
                { icon: Shield, text: '100% Howpsuz' },
                { icon: Zap, text: 'Ultra Tiz' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-500 text-sm">
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-body">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D visuals */}
          <div className="relative flex items-center justify-center h-[400px] lg:h-[500px]">

            {/* Main floating card */}
            <FloatingCard3D delay={0.4} className="animate-float z-20">
              <HeroPaymentCard />
            </FloatingCard3D>

            {/* Terminal illustration */}
            <FloatingCard3D
              delay={0.6}
              className="absolute -bottom-4 -right-4 lg:-right-8 z-10 animate-float-slow"
            >
              <TerminalIllustration />
            </FloatingCard3D>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-0 -left-4 lg:-left-12 animate-float-fast"
            >
              <div className="glass-card rounded-2xl px-4 py-3 space-y-1" style={{ minWidth: 130 }}>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-body">Gündelik Töleg</p>
                <p className="font-display font-700 text-2xl text-white">1,200+</p>
                <div className="h-1 w-full rounded-full bg-white/05">
                  <div className="h-1 w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>
              </div>
            </motion.div>

            {/* Background glow */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #3b82f6, transparent 60%)' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  )
}
