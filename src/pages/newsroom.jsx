import Head from 'next/head'
import { getAllPressCoverage, getAllPressArticles } from '../lib/api'
import { Container } from '@/components/Container'
import { CallToAction } from '@/components/CallToAction'
import { Date } from '@/components/Date'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
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
        <title>Snapscreen - intelligent video recognition live TV and streaming.</title>
        <meta
          name="description"
          content="Snapscreen detects TV or streaming video content instantly with just a photo of the television screen."
        />
      </Head>
      <Header />
      <main className="pt-24">
        <Container className="pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-6xl font-display text-4xl font-medium tracking-tighter leading-tight text-slate-900 sm:text-6xl">
            Newsroom
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-lg lg:text-xl tracking-tight text-slate-700">
            Based in New York with offices in Austria and Australia, Snapscreen is a technology company focused on the use of mobile devices and image recognition for broadcast TV and streaming in the world of sports and entertainment.
          </p>
        </Container>
        <Container className="pt-20 pb-16 lg:pt-32">
          <div className="mt-16 grid lg:grid-cols-2 gap-16">
            <section className="w-full">
              <h3 className="mb-6 font-display text-4xl">Press Releases</h3>
              <ol className="flex flex-col gap-8">
                {allArticles && allArticles.map((post, id) => (
                  <li key={id} className="">
                    <div className="font-display text-2xl font-bold leading-snug mb-2">
                      {post.title}
                    </div>
                    <Date dateString={post.publishDate} />
                    <div className={markdownStyles['markdown']}>
                      <RichText document={post.longText.json} />
                    </div>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h3 className="mb-6 font-display text-4xl">Press Mentions</h3>
              <ol className="space-y-4">
                {allCoverage && allCoverage.map((post, id) => (
                  <li key={id} className="">
                    <div className="text-xl leading-snug">
                      {post.title}
                    </div>
                    <a
                      href={post.link}
                      className="text-blue-600 text-sm underline-offset-4 decoration-1 hover:underline"
                    >
                      {post.link}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </Container>
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
