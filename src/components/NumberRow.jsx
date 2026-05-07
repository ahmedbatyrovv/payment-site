import { useState } from 'react'

export default function NumberRow({ badge, value, t, showPay = false, onCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value).catch(() => {
      const ta = document.createElement('textarea')
      ta.value = value
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    })
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
    onCopy?.(t.copied)
  }

  const handleDial = () => {
    window.location.href = 'tel:' + value.replace(/\s/g, '')
  }

  return (
    <div className="flex items-center gap-2.5 px-4 py-3 rounded-[13px]
      dark:bg-green-500/5 bg-green-600/5
      dark:border-green-500/14 border-green-600/16 border
      dark:hover:bg-green-500/10 hover:bg-green-600/10
      dark:hover:border-green-500/30 hover:border-green-600/30
      transition-all duration-200">

      {/* Badge */}
      <div className="min-w-[30px] h-[30px] rounded-[9px] flex items-center justify-center text-[.64rem] font-extrabold tracking-wide flex-shrink-0
        dark:bg-green-500/10 bg-green-600/10
        dark:border-green-500/18 border-green-600/20 border
        dark:text-green-400 text-green-700">
        {badge}
      </div>

      {/* Value */}
      <span className="font-mono font-bold flex-1 tracking-wider text-[.88rem] dark:text-green-300 text-green-800 min-w-0 truncate">
        {value}
      </span>

      {/* Buttons */}
      <div className="flex gap-1.5 flex-shrink-0">
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1 px-3 py-2 rounded-[9px] text-[.69rem] font-bold border-[1.5px] transition-all duration-200 font-sora
            ${copied
              ? 'dark:bg-green-500/20 bg-green-500/20 dark:border-green-500/50 border-green-500/50 text-green-300'
              : 'dark:bg-green-500/10 bg-green-600/10 dark:border-green-500/20 border-green-600/22 dark:text-green-400 text-green-700 hover:scale-105 hover:dark:border-green-500/40 hover:border-green-600/40'
            }`}
        >
          {copied ? '✓' : '📋'} {t.copy}
        </button>

        {showPay && (
          <button
            onClick={handleDial}
            className="flex items-center gap-1 px-3 py-2 rounded-[9px] text-[.69rem] font-bold text-white font-sora
              bg-gradient-to-br from-green-700 to-green-500
              btn-pay-glow hover:-translate-y-px hover:scale-105 transition-all duration-200"
          >
            {t.pay}
          </button>
        )}
      </div>
    </div>
  )
}
