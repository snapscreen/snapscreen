import Image from 'next/image'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import { Container } from '@/components/Container'
import annabelImg from '@/assets/testimonials/annabel.jpg'
import adamImg from '@/assets/testimonials/adam.jpg'
import scottImg from '@/assets/testimonials/scott.jpg'

const testimonials = [
  {
    name: "Annabel Acton",
    role: "Strategy Director at Deloitte",
    content: "I love it. I think it is so clear. And I think it's a real problem you are solving.",
    audioSrc: "./testimonials/annabel.m4a",
    image: annabelImg
  },
  {
    name: "Adam Milgrom",
    role: "Partner at Giant Leap Fund",
    content: "I think you guys are brilliant. I think the technology is really interesting. I would use it for sure.",
    audioSrc: "./testimonials/adam.m4a",
    image: adamImg
  },
  {
    name: "Scott Dinsdale",
    role: "All-Star Mentor at Techstars",
    content: "What you are doing is good for consumers and good for these companies.",
    audioSrc: "./testimonials/scott.m4a",
    image: scottImg
  }
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by Industry Experts.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our solution is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul role="list" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, testimonialIndex) => (
            <li key={testimonialIndex} className="flex flex-1 break-inside-avoid">
              <figure className="flex flex-col rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <blockquote className="w-full mb-3">
                  <p className="text-lg tracking-tight text-slate-900">
                    {testimonial.content}
                  </p>
                </blockquote>
                <figcaption className="mt-auto flex gap-4 items-center justify-between border-t border-slate-100 pt-3">
                  <div className="overflow-hidden rounded-full bg-slate-50 flex-none">
                    <Image
                      className="h-14 w-14 object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-base text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                  <AudioPlayer
                    className="!flex !w-auto !shadow-none !p-0"
                    layout="horizontal-reverse"
                    autoPlay={false}
                    showJumpControls={false}
                    showDownloadProgress={false}
                    showFilledProgress={false}
                    src={testimonial.audioSrc}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    customProgressBarSection={[]}
                  />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
