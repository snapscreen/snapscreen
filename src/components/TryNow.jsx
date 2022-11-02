import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/assets/background-features.jpg'
import snapImage from '@/assets/screenshots/snapImage.png'

const features = [
  {
    title: 'SnapOdds',
    description:
      "Use your mobile to open our demo app in a mobile webbrowser, or download our app for iOS or Android.",
    image: snapImage,
    step3: "See odds and bet.",
    qrcode: "https://snapodds.onelink.me/rx4N/de77d92a",
    video: "https://player.vimeo.com/video/682935258?h=96805b468f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  },
  {
    title: 'ClipShare',
    description:
      "Tap the Snap button in our demo app, aim on the playing game and take a snap.",
    image: snapImage,
    step3: "Create and share your clip.",
    qrcode: "https://nba.snapscreen.com/",
    video: "https://www.youtube.com/embed/Aw3xFO1wdJ4"
  }
]

export function TryNow() {


  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="try"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Try and experience yourself!
          </h2>
        </div>
        <Tab.Group
          as="div"
          className="mt-16"
          vertical={tabOrientation === 'horizontal'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="mx-auto flex max-w-md">
                <Tab.List className="z-10 flex flex-1 mx-auto">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'flex-1 group relative rounded-lg rounded-b-none text-center py-6 px-4',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display font-bold text-lg lg:text-xl [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          {feature.title}
                        </Tab>
                      </h3>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="-mx-4">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 py-8 gap-4 rounded-xl bg-white shadow-xl shadow-blue-900/20">
                      <div className="col-span-auto lg:col-span-3 text-center flex flex-col">
                        <div className="flex flex-col justify-center h-52 px-8 py-2">
                          <div className="text-5xl font-bold text-slate-200 mb-2">1</div>
                          <div className="font-semibold text-xl">
                            Scan QR code with mobile phone.
                          </div>
                        </div>
                        <QRCodeSVG
                          value={feature.qrcode}
                          className="m-auto p-2 bg-white"
                        />
                        <p className="text-sm">
                          Choose your favourite demo app.
                        </p>
                      </div>
                      <div className="col-span-auto lg:col-span-6 text-center flex flex-col">
                        <div className="flex flex-col justify-center h-52 px-8 py-2">
                          <div className="text-5xl font-bold text-slate-200 mb-2">2</div>
                          <div className="font-bold text-xl max-w-xs mx-auto">
                            Play the demo video. Choose any start-time.
                          </div>
                        </div>
                        <div className="w-full aspect-video">
                          <iframe
                            src={feature.video}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="col-span-auto lg:col-span-3 text-center flex flex-col">
                        <div className="flex flex-col justify-center h-52 px-8 py-2">
                          <div className="text-5xl font-bold text-slate-200 mb-2">3</div>
                          <div className="font-semibold text-xl">
                            {feature.step3}
                          </div>
                        </div>
                        <Image
                          className="m-auto w-auto"
                          src={feature.image}
                          alt={feature.description}
                          priority
                          sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                        />
                        <p className="text-sm">
                          Keep the full video in the viewfinder.
                        </p>
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
