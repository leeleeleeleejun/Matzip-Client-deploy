'use client'

import { useEffect, useState } from 'react'
import { initBrowserMSW } from '@/_mocks/initMSW'

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const isDev = process.env.NODE_ENV === 'development'
  const [mswReady, setMSWReady] = useState(!isDev)

  useEffect(() => {
    if (!isDev || mswReady) return
    const init = async () => {
      await initBrowserMSW()
      setMSWReady(true)
    }
    init()
  }, [isDev, mswReady])

  if (!mswReady) return null

  return <>{children}</>
}
