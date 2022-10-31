import Head from 'next/head'

import { Container } from '@/components/Container'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PostsList } from '@/components/PostsList'
import { getAllPostsForNewsroom } from '@/lib/api'

export default function Newsroom({ allPosts }) {

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
        <PostsList posts={allPosts} />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForNewsroom(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
