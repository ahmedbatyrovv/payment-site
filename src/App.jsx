import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { useToast } from './hooks/useToast'
import { TRANSLATIONS } from './data'
import Header from './components/Header'
import Hero from './components/Hero'
import MethodTabs from './components/MethodTabs'
import TerminalPanel from './components/TerminalPanel'
import PhonePanel from './components/PhonePanel'
import Toast from './components/Toast'

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { toast, show: showToast } = useToast()
  const [lang, setLang] = useState('tk')
  const [method, setMethod] = useState('terminal')
  const t = TRANSLATIONS[lang]

  return (
    <div className={`min-h-screen font-sora transition-colors duration-300 relative overflow-x-hidden
      ${theme === 'dark' ? 'dark bg-[#09100b] text-[#dff0e4]' : 'bg-[#eef8f1] text-[#0d2612]'}`}>

      {/* Mesh background */}
      <div className={`fixed inset-0 pointer-events-none z-0 opacity-50 transition-opacity duration-300 ${theme === 'dark' ? 'bg-mesh-dark' : 'bg-mesh-light'}`} />

      <div className="relative z-10">
        <Header lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />

        <Hero t={t} />

        <MethodTabs method={method} setMethod={setMethod} t={t} />

        <main className="max-w-[720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 pb-12 pt-4 animate-fade-up">
          <div className="w-full">
            {method === 'terminal'
              ? <TerminalPanel t={t} showToast={showToast} />
              : <PhonePanel t={t} showToast={showToast} />
            }
          </div>
        </main>

        <footer className="max-w-[720px] mx-auto px-4 sm:px-6 py-6 text-center border-t dark:border-green-500/20 border-green-600/20 text-[0.75rem] dark:text-green-900/70 text-green-800/50 transition-colors duration-300">
          © 2026 IsmailUSA - AhmedDev
        </footer>
      </div>

      <Toast visible={toast.visible} msg={toast.msg} />
    </div>
  )
}