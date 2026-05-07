import NumberRow from './NumberRow'
import { TERMINAL_NUMBERS } from '../data'

export default function TerminalPanel({ t, showToast }) {
  return (
    <div className="animate-slide-in">
      <div className="dark:bg-[rgba(19,33,21,0.5)] bg-white/70 backdrop-blur-md border dark:border-green-500/15 border-green-600/18 rounded-[22px] overflow-hidden card-glow dark:card-glow card-glow-light transition-all duration-300">

        {/* Card Head */}
        <div className="flex items-center gap-4 px-6 py-5 dark:bg-gradient-to-br dark:from-green-500/12 dark:to-green-500/5 bg-gradient-to-br from-green-600/10 to-green-600/4 border-b dark:border-green-500/15 border-green-600/18 transition-colors duration-300">
          <div className="w-12 h-12 rounded-[13px] flex items-center justify-center text-[1.35rem] flex-shrink-0 bg-gradient-to-br from-green-700 to-green-500 shadow-lg shadow-green-500/30">
            🏧
          </div>
          <div>
            <div className="text-[.66rem] font-bold tracking-[.1em] uppercase dark:text-green-400 text-green-700 mb-0.5">{t.termTag}</div>
            <div className="text-[1.02rem] font-extrabold tracking-tight dark:text-white text-gray-900">{t.termTitle}</div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Hint */}
          <div className="flex gap-2.5 items-start dark:bg-green-500/5 bg-green-600/6 border dark:border-green-500/14 border-green-600/16 rounded-xl p-3.5 mb-4 text-[.79rem] dark:text-green-400/80 text-green-800/80 leading-relaxed transition-colors duration-300">
            <span className="text-[.95rem] flex-shrink-0 mt-0.5">💡</span>
            <span>{t.termHint}</span>
          </div>

          {/* Numbers */}
          <div className="flex flex-col gap-2.5">
            {TERMINAL_NUMBERS.map(({ id, label, value }) => (
              <NumberRow key={id} badge={label} value={value} t={t} showPay={false} onCopy={showToast} />
            ))}
          </div>

          {/* Info */}
          <div className="flex gap-2.5 items-start dark:bg-green-500/5 bg-green-600/6 border dark:border-green-500/14 border-green-600/16 border-l-[3px] dark:border-l-green-500 border-l-green-600 rounded-xl p-3.5 mt-4 text-[.8rem] dark:text-green-400/80 text-green-800/80 leading-relaxed transition-colors duration-300">
            <span className="flex-shrink-0">📸</span>
            <span>{t.termInfo}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
