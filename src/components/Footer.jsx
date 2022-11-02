import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/Icons'
import { CONTACT_LINKEDIN, CONTACT_TWITTER, CONTACT_GITHUB } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-8 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex flex-wrap justify-center gap-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/newsroom">Newsroom</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/privacy">Privacy Policy</NavLink>
              <NavLink href="/terms">Terms of Use</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href={CONTACT_LINKEDIN}
              className="group"
              aria-label="Snapscreen on LinkedIn"
            >
              <LinkedinIcon />
            </Link>
            <Link
              href={CONTACT_TWITTER}
              className="group"
              aria-label="Snapscreen on Twitter"
            >
              <TwitterIcon />
            </Link>
            <Link
              href={CONTACT_GITHUB}
              className="group"
              aria-label="Snapscreen on GitHub"
            >
              <GithubIcon />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Snapscreen Inc. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
