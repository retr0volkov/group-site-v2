import Image from 'next/image'
import NavMenu from '@/components/NavMenu'
import { LoginPage } from './login'

export default function Home() {
  return (
    <main className=''>
      <NavMenu/>
      <LoginPage/>
    </main>
  )
}
