export default function Toast({ visible, msg }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[9999] pointer-events-none
        bg-gradient-to-r from-green-700 to-green-500 text-white
        px-7 py-3 rounded-full font-bold text-[.8rem] whitespace-nowrap
        shadow-[0_8px_36px_rgba(34,197,94,0.45)]
        transition-all duration-300
        ${visible
          ? 'opacity-100 -translate-x-1/2 translate-y-0'
          : 'opacity-0 -translate-x-1/2 translate-y-16'
        }`}
    >
      ✓ {msg}
    </div>
  )
}
