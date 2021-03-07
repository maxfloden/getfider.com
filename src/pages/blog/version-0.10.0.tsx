import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.10.0.mdx'

export const metadata = {
  title: 'Fider 0.10 released with notifications system and more',
  publishedOn: new Date('2018-02-28T00:00:00Z'),
  slug: 'version-0.10.0',
  cover: 'version-0.10.0.jpg',
  excerpt: "We're happy to announce that Fider 0.10 is now available",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}