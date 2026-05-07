export default function MethodTabs({ method, setMethod, t }) {
  return (
    <div className="max-w-[720px] mx-auto px-4 sm:px-6 mb-6">
      <div className="flex bg-gray-100 dark:bg-[#1a2a20] rounded-3xl p-1 w-fit mx-auto">
        <button
          onClick={() => setMethod('terminal')}
          className={`px-8 py-3 rounded-3xl transition-all font-medium ${method === 'terminal'
            ? 'bg-white dark:bg-[#0f1a13] shadow' : 'hover:bg-white/50 dark:hover:bg-[#13281f]'}`}
        >
          💳 Terminal
        </button>
        <button
          onClick={() => setMethod('phone')}
          className={`px-8 py-3 rounded-3xl transition-all font-medium ${method === 'phone'
            ? 'bg-white dark:bg-[#0f1a13] shadow' : 'hover:bg-white/50 dark:hover:bg-[#13281f]'}`}
        >
          📱 Telefondan 0804
        </button>
      </div>
    </div>
  );
}