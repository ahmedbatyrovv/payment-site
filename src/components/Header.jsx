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
      
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-sora font-extrabold text-[1.1rem] tracking-tight whitespace-nowrap">
          IsmailUSA <span className="text-green-600 dark:text-green-500">· AhmedDev</span>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl
              dark:bg-green-500/10 bg-green-600/10 border border-green-500/20
              hover:scale-110 active:scale-95 transition-all"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Language Switcher */}
          <div className="flex bg-white/70 dark:bg-black/30 rounded-3xl p-1 border border-green-500/10">
            {LANGS.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-4 py-2 rounded-3xl text-sm font-bold transition-all duration-200
                  ${lang === code 
                    ? 'bg-green-600 text-white shadow' 
                    : 'hover:bg-green-500/10 dark:hover:bg-green-500/20'}`}
              >
                {flag} {label}
              </button>
            ))}
          </div>
        </div>

        {/* Burger Button - Mobile & Tablet */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl hover:bg-green-500/10 transition-colors"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-green-500/10 bg-white/95 dark:bg-[#09100b]/95 backdrop-blur-xl px-4 py-6">
          <div className="max-w-[720px] mx-auto flex flex-col gap-3">
            
            {/* Theme Toggle in Mobile */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-4 w-full px-5 py-5 rounded-2xl hover:bg-green-500/10 transition-all text-left"
            >
              <span className="text-3xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
              <div>
                <p className="font-semibold">Tema çalşyr</p>
                <p className="text-sm text-green-600 dark:text-green-500">
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </p>
              </div>
            </button>

            {/* Language Switcher in Mobile */}
            <div className="px-5 py-4">
              <p className="text-green-600 dark:text-green-500 text-sm font-medium mb-3">Dil saýlaň</p>
              <div className="grid grid-cols-3 gap-3">
                {LANGS.map(({ code, flag, label }) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setIsMenuOpen(false);
                    }}
                    className={`flex flex-col items-center justify-center py-4 rounded-2xl border transition-all
                      ${lang === code 
                        ? 'border-green-600 bg-green-600/10' 
                        : 'border-transparent hover:bg-green-500/10'}`}
                  >
                    <span className="text-3xl mb-1">{flag}</span>
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