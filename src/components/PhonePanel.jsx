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
    <div className="bg-white dark:bg-[#0f1a13] rounded-3xl shadow-xl p-6 md:p-8 border border-green-100 dark:border-green-900/30">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 bg-green-500/10 text-green-600 rounded-2xl flex items-center justify-center">
          <Phone size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Telefondan 0804 arkaly töleg</h2>
          <p className="text-green-600 dark:text-green-500">0804 ulanyp töleg ediň</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {phoneNumbers.map((num, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-[#1a2a20] p-5 rounded-2xl border border-green-100 dark:border-green-900/30 hover:border-green-500 transition-all">
            <div className="font-mono text-lg font-semibold text-green-700 dark:text-green-400">
              {num}
            </div>
            <button
              onClick={() => copyToClipboard(num)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 text-sm font-medium"
            >
              <Copy size={18} /> Kopya et
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-green-50 dark:bg-green-950/60 rounded-2xl text-sm">
        <p className="font-semibold mb-2">📌 Tölegden soň:</p>
        <p>0801 belgiden gelen çegiň suratyny admine ugradyň.</p>
      </div>
    </div>
  );
}