import { useState, useEffect } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState({ visible: false, msg: '' });

  const show = (message) => {
    setToast({ visible: true, msg: message });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ visible: false, msg: '' });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  return { toast, show };
};