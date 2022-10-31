import Link from 'next/link'
import DateComponent from '@/components/Date'

export function PostsList({ posts }) {
  if (!posts) {
    return <h2>Damn...</h2>
  }
  return (
      <ol className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <li key={post.slug}>
            <h3 className="text-3xl mb-3 leading-snug">
              <Link href={`/posts/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h3>
            <div className="text-lg mb-4">
              <DateComponent dateString={post.publishDate} />
            </div>
          </li>
        ))}
      </ol>
  )
}
