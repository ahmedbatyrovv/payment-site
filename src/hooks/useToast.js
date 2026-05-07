import { useState, useRef } from 'react'

export function useToast() {
  const [toast, setToast] = useState({ visible: false, msg: '' })
  const timer = useRef(null)

  const show = (msg) => {
    clearTimeout(timer.current)
    setToast({ visible: true, msg })
    timer.current = setTimeout(() => setToast({ visible: false, msg }), 2300)
  }

  return { toast, show }
}
