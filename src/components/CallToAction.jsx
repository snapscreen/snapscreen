import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { MEETING_URL } from '@/lib/constants'
import backgroundImage from '@/assets/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white font-medium">
            It’s time to engage your fans. Get in touch
            and find out how Snapscreen technology can drive your revenue.
          </p>
          <Button href={MEETING_URL} color="white" className="mt-10">
            Book a meeting
          </Button>
        </div>
      </Container>
    </section>
  )
}
