const LANGS = [
  { code: 'tk', flag: '🇹🇲', label: 'TK' },
  { code: 'ru', flag: '🇷🇺', label: 'RU' },
  { code: 'tr', flag: '🇹🇷', label: 'TR' },
]

export default function Header({ lang, setLang, theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-green-500/15 dark:bg-[rgba(9,16,11,0.88)] bg-[rgba(238,248,241,0.90)] transition-colors duration-300">
      <div className="w-full px-8 py-3 flex items-center justify-between gap-3">
        {/* Logo */}
        <span className="gradient-text font-sora font-extrabold text-[1.08rem] tracking-tight whitespace-nowrap">
          IsmailUSA · AhmedDev
        </span>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[.95rem]
              dark:bg-green-500/10 bg-green-600/10
              dark:border-green-500/20 border-green-600/20 border-[1.5px]
              dark:text-green-400 text-green-700
              hover:scale-110 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Lang buttons */}
          <div className="flex gap-1">
            {LANGS.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2.5 py-1.5 rounded-lg text-[.7rem] font-bold tracking-wide border-[1.5px] transition-all duration-200 font-sora
                  ${lang === code
                    ? 'dark:bg-green-500/10 bg-green-600/10 dark:border-green-500/35 border-green-600/40 dark:text-green-400 text-green-700'
                    : 'border-transparent dark:text-green-700/70 text-green-800/50 hover:dark:bg-green-500/6 hover:bg-green-600/6 hover:dark:border-green-500/20 hover:border-green-600/20'
                  }`}
              >
                {flag} {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
