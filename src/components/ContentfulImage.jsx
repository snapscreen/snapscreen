import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export function ContentfulImage({ props }) {
  return <Image loader={contentfulLoader} {...props} />
}
