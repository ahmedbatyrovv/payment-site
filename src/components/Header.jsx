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
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-green-500/15 
      dark:bg-[rgba(9,16,11,0.95)] bg-[rgba(238,248,241,0.95)] transition-colors duration-300">
      
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Logo */}
        <span className="gradient-text font-sora font-extrabold text-[1.1rem] sm:text-[1.2rem] tracking-tight whitespace-nowrap">
          IsmailUSA · AhmedDev
        </span>

        {/* Desktop & Tablet Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-xl
              dark:bg-green-500/10 bg-green-600/10
              dark:border-green-500/20 border-green-600/20 border-[1.5px]
              dark:text-green-400 text-green-700
              hover:scale-110 active:scale-95 transition-all duration-200"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Language Switcher */}
          <div className="flex gap-1 bg-white/60 dark:bg-black/30 rounded-2xl p-1">
            {LANGS.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wider transition-all duration-200
                  ${lang === code
                    ? 'dark:bg-green-500/10 bg-green-600/10 dark:border-green-500/40 border-green-600/40 dark:text-green-300 text-green-700 shadow-sm'
                    : 'hover:bg-green-500/10 dark:hover:bg-green-500/10'
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
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl hover:bg-green-500/10 active:bg-green-500/20 transition-all"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Full Responsive */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-green-500/10 bg-white/95 dark:bg-[#09100b]/95 backdrop-blur-xl px-4 sm:px-6 py-6">
          <div className="flex flex-col gap-5 max-w-[720px] mx-auto">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-4 w-full px-5 py-5 rounded-2xl hover:bg-green-500/10 transition-all"
            >
              <span className="text-3xl">{theme === 'dark' ? '🌙' : '☀️'}</span>
              <div className="text-left">
                <p className="font-semibold">Tema çalşyr</p>
                <p className="text-sm text-green-600 dark:text-green-500">
                  {theme === 'dark' ? 'Dark mode' : 'Light mode'}
                </p>
              </div>
            </button>

            {/* Language Selection */}
            <div>
              <p className="text-green-600 dark:text-green-500 text-sm font-medium px-5 mb-3">Dil saýlaň</p>
              <div className="grid grid-cols-3 gap-3 px-2">
                {LANGS.map(({ code, flag, label }) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setIsMenuOpen(false);
                    }}
                    className={`flex flex-col items-center justify-center py-6 rounded-2xl border transition-all
                      ${lang === code
                        ? 'border-green-500 bg-green-500/10 dark:bg-green-500/20'
                        : 'border-transparent hover:bg-green-500/5'
                      }`}
                  >
                    <span className="text-4xl mb-2">{flag}</span>
                    <span className="font-bold text-sm">{label}</span>
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