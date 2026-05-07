import { Copy, Phone } from 'lucide-react';

export default function PhonePanel({ t, showToast }) {
  const phoneNumbers = [
    "+993 62 434 203",
    "+993 64 883 003",
    "+993 65 123 456",
    "+993 61 987 654",
    "+993 63 555 777",
    "+993 62 111 222",
    "+993 64 777 888",
    "+993 65 999 000",
    "+993 63 222 111",
  ];

  const copyToClipboard = (number) => {
    navigator.clipboard.writeText(number.replace(/\s/g, ''));
    showToast(`${number} 📋 Kopya edildi!`);
  };

  return (
    <div className="bg-white dark:bg-[#0f1a13] rounded-3xl shadow-xl p-5 sm:p-8 border border-green-100 dark:border-green-900/30">
      <div className="flex items-center gap-3 mb-7">
        <div className="w-12 h-12 bg-green-500/10 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center">
          <Phone size={28} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Telefondan 0804 arkaly töleg</h2>
          <p className="text-green-600 dark:text-green-500 mt-1">0804 ulanyp töleg ediň</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {phoneNumbers.map((num, index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 dark:bg-[#1a2a20] p-5 rounded-2xl border border-green-100 dark:border-green-900/30 hover:border-green-500 transition-all"
          >
            <div className="font-mono text-xl sm:text-2xl font-semibold tracking-wider text-green-700 dark:text-green-400">
              {num}
            </div>
            
            <button
              onClick={() => copyToClipboard(num)}
              className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 font-medium transition-all w-full sm:w-auto"
            >
              <Copy size={20} />
              Kopya et
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-green-50 dark:bg-green-950/60 rounded-2xl text-[15px] leading-relaxed border border-green-200 dark:border-green-900">
        📌 <span className="font-semibold">Tölegden soň:</span> 0801 belgiden gelen çegiň suratyny admine ugradyň.
      </div>
    </div>
  );
}