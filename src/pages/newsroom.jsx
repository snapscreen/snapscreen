import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getAllPressCoverage, getAllPressArticles } from '../lib/api'
import { Container } from '@/components/Container'
import { CallToAction } from '@/components/CallToAction'
import { Date } from '@/components/Date'
import { Modal } from '@/components/Dialog'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { EmailIcon, LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/Icons'
import markdownStyles from '@/components/markdown-styles.module.css'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const renderDocument = document => {
  const Text = ({ children }) => <p>{children}</p>;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
    },
    renderText: text =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text])
  }
  return documentToReactComponents(document, options);
}

const RichText = ({ document }) => (
  <div>
    {renderDocument(document)}
  </div>
)

export default function Newsroom({ allCoverage, allArticles }) {
  return (
    <>
      <Head>
        <title>Snapscreen Newsroom - Press Releases and News</title>
        <meta
          name="description"
          content="Based in New York with offices in Austria and Australia, Snapscreen is a technology company focused on the use of mobile devices and image recognition for broadcast TV and streaming in the world of sports and entertainment."
        />
      </Head>
      <Header />
      <main className="pt-24 bg-zinc-100">
        <Container className="pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-6xl font-display text-4xl font-medium tracking-tighter leading-tight text-slate-900 sm:text-6xl">
            Newsroom and Press resources
          </h1>
        </Container>
        <section>
          <Container className="py-16">
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="flex-1">
                <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                  About Snapscreen
                </h2>
                <p className="my-4 text-lg lg:text-xl tracking-tight text-slate-700">
                  Based in New York with offices in Austria and Australia, Snapscreen is a technology company focused on the use of mobile devices and image recognition for broadcast TV and streaming in the world of sports and entertainment.
                </p>
              </div>
              <div className="flex-1 bg-white shadow rounded-lg p-8 -mt-8">
                <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                  Get in touch
                </h2>
                <dl className="my-4 space-y-2 text-lg lg:text-xl tracking-tight text-slate-700">
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
              </div>
            </div>
          </Container>
        </section>
        <section
          id="releases"
          aria-label="Press Releases"
          className="bg-slate-900 py-20 sm:py-32 text-white"
        >
          <Container className="py-8">
            <div className="md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Press Releases
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Find here updates of our products and Snapscreen corporate news.
              </p>
            </div>
            <ol className="mt-16 grid md:grid-cols-2 gap-8">
              {allArticles && allArticles.map((post, id) => (
                <li key={id} className="">
                  <Modal
                    trigger={
                      <>
                      <div className="font-display text-2xl font-bold leading-snug mt-4 mb-2 underline-offset-8 decoration-1 transition group-hover:underline">
                        {post.title}
                      </div>
                      <Date dateString={post.publishDate} />
                      </>
                    }>
                    <div className="font-display text-2xl font-bold leading-snug mt-4 mb-2">
                      {post.title}
                    </div>
                    <div className={markdownStyles['markdown']}>
                      <RichText document={post.longText.json} />
                    </div>
                  </Modal>
                </li>
              ))}
            </ol>
          </Container>
        </section>
        <section>
          <Container className="pt-20 pb-16 lg:pt-16">
            <h2 className="font-display text-3xl tracking-tight mb-6 sm:text-4xl">
              Press Mentions
            </h2>
            <ol className="md:columns-2 gap-8 space-y-8">
              {allCoverage && allCoverage.map((post, id) => (
                <li key={id} className="">
                  <a
                    href={post.link}
                    className="flex flex-col md:flex-row gap-4 bg-white shadow p-8 rounded-lg transition hover:shadow-xl"
                  >
                    <div className="block">
                      <div className="text-xl leading-snug">
                        {post.title}
                      </div>
                      <span className="block break-all text-sm mt-2">{post.link}</span>
                    </div>
                    <div className="w-20 flex-none">
                      <Image
                        width={80}
                        height={80}
                        src={post.image.url}
                        alt={post.title}
                        className="object-contain"
                      />
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </Container>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const allCoverage = (await getAllPressCoverage()) ?? []
  const allArticles = (await getAllPressArticles()) ?? []
  return {
    props: {
      allCoverage,
      allArticles
    },
  }
}
