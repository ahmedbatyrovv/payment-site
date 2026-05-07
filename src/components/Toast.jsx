export default function Toast({ visible, msg }) {
  if (!visible) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-700 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 flex items-center gap-3 animate-fade-in">
      {msg}
    </div>
  );
}