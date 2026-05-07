import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LANGS = [
  { code: 'tk', flag: '🇹🇲', label: 'TK' },
  { code: 'ru', flag: '🇷🇺', label: 'RU' },
  { code: 'tr', flag: '🇹🇷', label: 'TR' },
];

export default function Header({ lang, setLang, theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-green-500/15 dark:bg-[rgba(9,16,11,0.88)] bg-[rgba(238,248,241,0.90)] transition-colors duration-300">
      <div className="w-full px-5 sm:px-8 py-3 flex items-center justify-between gap-3">
        
        {/* Logo */}
        <span className="gradient-text font-sora font-extrabold text-[1.08rem] tracking-tight whitespace-nowrap">
          IsmailUSA · AhmedDev
        </span>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme Toggle */}
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

          {/* Language Buttons */}
          <div className="flex gap-1">
            {LANGS.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 rounded-lg text-[.75rem] font-bold tracking-wide border-[1.5px] transition-all duration-200 font-sora
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

        {/* Mobile Burger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-500/10 transition-colors"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-green-500/10 bg-white/95 dark:bg-[#09100b]/95 backdrop-blur-lg px-5 py-6">
          <div className="flex flex-col gap-4">
            
            {/* Theme Toggle in Mobile */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-green-500/10 transition-all w-full text-left"
            >
              <span className="text-2xl">{theme === 'dark' ? '🌙' : '☀️'}</span>
              <span className="font-medium">Tema çalşyr ({theme === 'dark' ? 'Dark' : 'Light'})</span>
            </button>

            {/* Language Buttons in Mobile */}
            <div className="px-4 py-2">
              <p className="text-xs text-green-600 dark:text-green-500 mb-3 font-medium">Dil saýlaň</p>
              <div className="flex flex-wrap gap-2">
                {LANGS.map(({ code, flag, label }) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-5 py-3 rounded-2xl text-base font-semibold border-[1.5px] transition-all
                      ${lang === code
                        ? 'dark:bg-green-500/10 bg-green-600/10 dark:border-green-500/40 border-green-600/40 dark:text-green-400 text-green-700'
                        : 'border-transparent hover:bg-green-500/10'
                      }`}
                  >
                    {flag} {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}