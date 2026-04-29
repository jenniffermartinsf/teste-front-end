import { useEffect } from 'react'

export const useBodyScrollLock = (locked: boolean): void => {
  useEffect(() => {
    document.body.dataset.scrollLocked = locked ? 'true' : 'false'

    return () => {
      document.body.dataset.scrollLocked = 'false'
    }
  }, [locked])
}
