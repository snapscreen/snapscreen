import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { ContactForm } from '@/components/ContactForm'
import { Logo } from '@/components/Logo'
import { EmailIcon, LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/Icons'

export function ContactOptions() {
  return (
    <dl className="my-4 space-y-2 text-lg lg:text-xl tracking-tight">
      <div className="flex gap-2 items-center">
        <dt>
          <EmailIcon />
          <span className="sr-only">Email</span>
        </dt>
        <dd>hello@snapscreen.com</dd>
      </div>
      <div className="flex gap-2 items-center">
        <dt>
          <LinkedinIcon />
          <span className="sr-only">LinkedIn</span>
        </dt>
        <dd>company/Snapscreen</dd>
      </div>
      <div className="flex gap-2 items-center">
        <dt>
          <TwitterIcon />
          <span className="sr-only">Twitter</span>
        </dt>
        <dd>@Snapscreen_com</dd>
      </div>
      <div className="flex gap-2 items-center">
        <dt>
          <GithubIcon />
          <span className="sr-only">Github</span>
        </dt>
        <dd>snapscreen</dd>
      </div>
    </dl>
  )
}

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
