import { useEffect, useState } from 'react'

const getViewportWidth = (): number =>
  typeof window === 'undefined' ? 1440 : window.innerWidth

export const useBreakpointValue = (): number => {
  const [viewportWidth, setViewportWidth] = useState<number>(getViewportWidth)

  useEffect(() => {
    const handleResize = (): void => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return viewportWidth
}
