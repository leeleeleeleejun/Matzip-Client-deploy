'use client'

import { useEffect, useState } from 'react'
import { initBrowserMSW } from '@/_mocks/initMSW'

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMSWReady] = useState(false)

  useEffect(() => {
    const init = async () => {
      await initBrowserMSW()
      setMSWReady(true)
    }

    if (!mswReady) {
      init()
    }
  }, [mswReady])

  if (!mswReady) return null

  return <>{children}</>
}
