import { Copy } from 'lucide-react';

export default function TerminalPanel({ t, showToast }) {
  const terminals = [
    { id: 1, number: "62434203" },
    { id: 2, number: "64883003" },
  ];

  const copyToClipboard = (num) => {
    navigator.clipboard.writeText(num);
    showToast(`${num} 📋 Kopya edildi!`);
  };

  return (
    <div className="bg-white dark:bg-[#0f1a13] rounded-3xl shadow-xl p-6 md:p-8 border border-green-100 dark:border-green-900/30">
      <h2 className="text-2xl font-semibold mb-6">Terminal arkaly töleg</h2>
      
      <div className="space-y-4">
        {terminals.map((term) => (
          <div key={term.id} className="flex flex-col sm:flex-row sm:items-center gap-4 bg-gray-50 dark:bg-[#1a2a20] p-5 rounded-2xl">
            <div className="flex-1">
              <p className="text-sm text-green-600 dark:text-green-500">Terminal Nomer {term.id}</p>
              <p className="font-mono text-2xl font-bold text-green-700 dark:text-green-400 tracking-widest">{term.number}</p>
            </div>
            <button
              onClick={() => copyToClipboard(term.number)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95"
            >
              <Copy size={20} />
              Kopya et
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-950/50 p-5 rounded-2xl">
        Töleg geçireniňizden soň suraty admine ugradyň.
      </div>
    </div>
  );
}