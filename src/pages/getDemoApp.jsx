import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { ContactForm } from '@/components/ContactForm'
import { Logo } from '@/components/Logo'

export default function GetDemoApp() {
  return (
    <>
      <Head>
        <title>Get demo app – Try Snapscreen yourself</title>
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
            <h2>Get our demo app</h2>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
