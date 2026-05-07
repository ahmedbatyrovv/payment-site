export default function Hero({ t }) {
  return (
    <section className="max-w-[660px] mx-auto px-5 pt-10 pb-6 text-center animate-fade-up" style={{ animationDelay: '.07s', opacity: 0 }}>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 dark:bg-green-500/6 bg-green-600/8 border dark:border-green-500/18 border-green-600/20 rounded-full px-4 py-1.5 mb-5">
        <span className="w-[7px] h-[7px] rounded-full bg-green-500 pulse-dot inline-block" />
        <span className="text-[.7rem] font-bold tracking-[.09em] uppercase dark:text-green-400 text-green-700">
          {t.badge}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-sora font-extrabold tracking-tighter leading-tight mb-3 dark:text-white text-gray-900"
          style={{ fontSize: 'clamp(1.45rem, 5vw, 2rem)' }}>
        IsmailUSA <em className="not-italic dark:text-green-400 text-green-600">·</em> AhmedDev
      </h1>

      {/* Desc */}
      <p className="text-[.875rem] dark:text-green-400/70 text-green-800/70 leading-relaxed max-w-sm mx-auto">
        {t.heroDesc}
      </p>
    </section>
  )
}
