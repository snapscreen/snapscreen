import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Modal } from '@/components/Dialog'
import logoTechstars from '@/assets/logos/techstars.svg'
import logoAws from '@/assets/logos/aws.svg'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-6xl font-display text-4xl font-medium tracking-tighter leading-tight text-slate-900 sm:text-6xl">
        Intelligent{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <span className="relative">video recognition</span>
        </span>{' '}
        for live TV and streaming content.
      </h1>
      <p className="mx-auto mt-10 max-w-2xl text-lg lg:text-xl tracking-tight text-slate-700">
        Snapscreen offers turnkey solutions for sports media,
        broadcasters and sportsbook operators.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
        <Modal
          title="How it works"
          trigger={
            <div className="group inline-flex w-full ring-2 items-center justify-center rounded-full py-2 px-8 focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300">
              See how it works
            </div>
          }
        >
          <div className="w-full aspect-video">
            <iframe
              src="https://player.vimeo.com/video/682945888?h=348e48fdad&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479autoplay=1&loop=1&autopause=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="SnapOdds-demo-game.mp4"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Modal>
        <Button
          href="/#try"
          variant="solid"
        >
          <span className="text-lg mx-4">Try now</span>
        </Button>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Snapscreen Inc., a Techstars portfolio company.
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Techstars', logo: logoTechstars },
            ],
            [
              { name: 'AWS', logo: logoAws },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
