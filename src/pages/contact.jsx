import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { ContactForm } from '@/components/ContactForm'
import { ContactOptions } from '@/components/ContactOptions'
import { Logo } from '@/components/Logo'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Snapscreen – Get in touch with us</title>
      </Head>
      <AuthLayout
        asideContent={ <ContactForm /> }
      >
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-8 w-auto mt-2" />
          </Link>
          <nav className="flex md:gap-x-4 mt-2">
            <Link href="/">www.snapscreen.com</Link>
          </nav>
          <div className="mt-20">
            <ContactOptions />
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
