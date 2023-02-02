import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Seo from '../components/Seo'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Seo/>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <ul>
                <li><Link href='/app'>App</Link></li>
                <li><Link href='/tenancy'>Slug Qualquer</Link></li>
            </ul>
      </main>
    </>
  )
}
