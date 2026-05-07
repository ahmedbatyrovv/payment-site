export default function Header({ lang, setLang, theme, toggleTheme }) {
  const languages = [
    { code: 'tk', flag: '🇹🇲', label: 'Türkmençe' },
    { code: 'ru', flag: '🇷🇺', label: 'Русский' },
    { code: 'tr', flag: '🇹🇷', label: 'Türkçe' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#09100b]/95 backdrop-blur-xl border-b border-green-100 dark:border-green-900">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold tracking-tighter">IsmailUSA</div>
          <div className="text-green-600 dark:text-green-500 font-medium">AhmedDev</div>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex bg-gray-100 dark:bg-[#1a2a20] rounded-3xl p-1 shadow-inner">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => setLang(item.code)}
                className={`px-5 py-2.5 text-sm rounded-3xl transition-all flex items-center gap-2
                  ${lang === item.code 
                    ? 'bg-white dark:bg-[#0f1a13] shadow font-semibold' 
                    : 'hover:bg-white/60 dark:hover:bg-[#13281f]'}`}
              >
                <span className="text-lg">{item.flag}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-11 h-11 flex items-center justify-center bg-gray-100 dark:bg-[#1a2a20] hover:bg-gray-200 dark:hover:bg-[#13281f] rounded-3xl transition-all text-xl"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}