import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ lang, setLang, theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'tk', flag: '🇹🇲', label: 'Türkmençe' },
    { code: 'ru', flag: '🇷🇺', label: 'Русский' },
    { code: 'tr', flag: '🇹🇷', label: 'Türkçe' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#09100b]/95 backdrop-blur-xl border-b border-green-100 dark:border-green-900">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold tracking-tighter">IsmailUSA</div>
            <div className="text-green-600 dark:text-green-500 font-medium text-sm">AhmedDev</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex bg-gray-100 dark:bg-[#1a2a20] rounded-3xl p-1 shadow-inner">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`px-5 py-2.5 text-sm rounded-3xl transition-all flex items-center gap-2
                    ${lang === item.code ? 'bg-white dark:bg-[#0f1a13] shadow font-semibold' : 'hover:bg-white/60 dark:hover:bg-[#13281f]'}`}
                >
                  <span className="text-lg">{item.flag}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="w-11 h-11 flex items-center justify-center bg-gray-100 dark:bg-[#1a2a20] hover:bg-gray-200 dark:hover:bg-[#13281f] rounded-3xl transition-all text-xl"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Burger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center bg-gray-100 dark:bg-[#1a2a20] rounded-3xl"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-[#0f1a13] rounded-3xl border border-green-100 dark:border-green-900 shadow-xl">
            <div className="flex flex-col gap-2 px-4">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    setLang(item.code);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-4 px-5 py-4 text-lg rounded-2xl transition-all
                    ${lang === item.code ? 'bg-green-100 dark:bg-green-900/50 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-[#1a2a20]'}`}
                >
                  <span className="text-2xl">{item.flag}</span>
                  <span>{item.label}</span>
                </button>
              ))}

              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-4 px-5 py-4 text-lg rounded-2xl hover:bg-gray-100 dark:hover:bg-[#1a2a20] mt-2"
              >
                <span className="text-2xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
                <span>Tema çalşyr</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}