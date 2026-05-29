import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = await getCollection('blog')
  return rss({
    title: "Sourav's Portfolio",
    description: 'Thoughts on data science, policy and systems.',
    site: context.site!,
    items: posts
      .sort(
        (a, b) =>
          new Date(b.data.publishedAt).getTime() -
          new Date(a.data.publishedAt).getTime()
      )
      .map((post) => ({
        title: post.data.title,
        pubDate: new Date(post.data.publishedAt),
        description: post.data.summary,
        link: `/blog/${post.id}`,
      })),
  })
}
