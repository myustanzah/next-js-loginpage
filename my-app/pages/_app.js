import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')){
      router.push('/views/register')
    }
    if (!localStorage.getItem('token')) {
      router.push('/views/login')
    } else {
      router.push('/views/dashboard')
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
