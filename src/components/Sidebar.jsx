import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, Mail } from 'lucide-react'

const menuItems = [
  { id: 'payments', icon: CreditCard },
  { id: 'contact', icon: Mail },
]

export default function Sidebar({ open, activeSection, setActiveSection, setSidebarOpen, t }) {
  return (
    <>
      {/* Overlay — closes sidebar on click */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30"
            style={{ background: 'rgba(2,8,23,0.7)', backdropFilter: 'blur(4px)' }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <motion.aside
        initial={false}
        animate={{ width: open ? 220 : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed left-0 top-16 bottom-0 z-40 overflow-hidden"
        style={{
          background: 'rgba(4,15,46,0.9)',
          backdropFilter: 'blur(20px)',
          borderRight: '1px solid rgba(99,102,241,0.12)',
        }}
      >
        <div className="flex flex-col gap-1 p-3 pt-4" style={{ width: 220 }}>
          {menuItems.map(({ id, icon: Icon }) => {
            const active = activeSection === id
            return (
              <motion.button
                key={id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { setActiveSection(id); setSidebarOpen(false) }}
                className="relative flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left transition-all"
                style={{
                  background: active ? 'rgba(99,102,241,0.2)' : 'transparent',
                  border: active ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
                  color: active ? '#a5b4fc' : '#64748b',
                  boxShadow: active ? '0 0 20px rgba(99,102,241,0.15)' : 'none',
                }}
              >
                {active && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-indigo-400"
                  />
                )}
                <Icon size={18} />
                <span className="text-sm font-medium capitalize whitespace-nowrap">
                  {t.nav[id]}
                </span>
              </motion.button>
            )
          })}
        </div>
      </motion.aside>
    </>
  )
}
