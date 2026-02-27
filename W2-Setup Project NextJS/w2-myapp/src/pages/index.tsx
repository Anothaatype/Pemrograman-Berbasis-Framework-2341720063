import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Utama</h1>
      
      <Link href="/about">
        <button>Ke Halaman About</button>
      </Link>
    </div>
  )
}
