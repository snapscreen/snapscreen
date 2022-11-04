import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { Solutions } from '@/components/Solutions'
import { TryNow } from '@/components/TryNow'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Snapscreen - intelligent video recognition live TV and streaming.</title>
        <meta
          name="description"
          content="Snapscreen detects TV or streaming video content instantly with just a photo of the television screen."
        />
      </Head>
      <Header />
      <main className="pt-24">
        <Products />
      </main>
      {/*
      <Footer />
      */}
    </>
  )
}
