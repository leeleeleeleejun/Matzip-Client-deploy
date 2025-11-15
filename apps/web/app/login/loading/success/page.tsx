'use client'

import { getToken } from '@/_apis/services/login'
import { useEffect } from 'react'

const LoginSuccessPage = () => {
  useEffect(() => {
    ;(async () => {
      const data = await getToken()
      console.log(data)
    })()
  })

  return <div></div>
}

export default LoginSuccessPage
