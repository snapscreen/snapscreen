import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/#products">Products</MobileNavLink>
            <MobileNavLink href="/#solutions">Solutions</MobileNavLink>
            <MobileNavLink href="/#try">Try Now</MobileNavLink>
            <MobileNavLink href="/newsroom">Newsrooom</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/#">Developers</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <Button href="/#" color="blue">
              <span>Book a meeting</span>
            </Button>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-6 lg:py-6 w-full fixed top-0 z-30 shadow-sm bg-white/95 [@supports(backdrop-filter:blur(0))]:bg-white/90 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-6 w-auto mt-1" />
            </Link>
            <div className="hidden lg:flex md:gap-x-4">
              <NavLink href="/#products">Products</NavLink>
              <NavLink href="/#solutions">Solutions</NavLink>
              <NavLink href="/#try">Try Now</NavLink>
              <NavLink href="/newsroom">Newsroom</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-4 md:gap-x-6">
            <div className="hidden lg:block">
              <NavLink href="/#">Developers</NavLink>
            </div>
            <Button href="/#" color="blue" className="hidden sm:block">
              <span>Book a meeting</span>
            </Button>
            <div className="-mr-1 lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
