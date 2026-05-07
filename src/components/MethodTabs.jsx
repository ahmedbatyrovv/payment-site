export default function MethodTabs({ method, setMethod, t }) {
  const tabs = [
    { id: 'terminal', icon: '🏧', label: t.tabTerm,  sub: t.tabTermSub },
    { id: 'phone',    icon: '📱', label: t.tabPhone, sub: t.tabPhoneSub },
  ]

  return (
    <div className="max-w-[660px] mx-auto px-5 pb-7 animate-fade-up" style={{ animationDelay: '.15s', opacity: 0 }}>
      <div className="grid grid-cols-2 gap-2.5 dark:bg-[#0e1a10] bg-[#e0f2e6] border dark:border-green-500/16 border-green-600/18 rounded-[20px] p-2.5 transition-colors duration-300">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setMethod(tab.id)}
            className={`py-5 px-4 rounded-[14px] text-center border-[1.5px] font-sora transition-all duration-300 cursor-pointer
              ${method === tab.id
                ? 'dark:bg-[rgba(19,33,21,0.5)] bg-white/80 dark:border-green-500/35 border-green-600/40 dark:text-white text-gray-900 tab-active-glow -translate-y-0.5'
                : 'bg-transparent border-transparent dark:text-green-700/60 text-green-800/50 hover:dark:bg-green-500/5 hover:bg-green-600/5 hover:dark:border-green-500/16 hover:border-green-600/18 hover:-translate-y-px'
              }`}
          >
            <span className="block text-[1.9rem] mb-1.5 leading-none">{tab.icon}</span>
            <span className="block text-[.8rem] font-extrabold tracking-tight leading-snug">{tab.label}</span>
            <span className={`block text-[.66rem] mt-1 font-medium transition-colors duration-200 ${method === tab.id ? 'dark:text-green-400/70 text-green-700/70' : 'dark:text-green-900/60 text-green-800/40'}`}>
              {tab.sub}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
