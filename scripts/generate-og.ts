import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs'
import { join, basename } from 'node:path'
import matter from 'gray-matter'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import sharp from 'sharp'

const ogFont = readFileSync(join(process.cwd(), 'public/fonts/OGFont.ttf'))

async function generateOG(slug: string, title: string): Promise<void> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '64px',
        },
        children: [
          {
            type: 'h2',
            props: {
              style: {
                fontSize: 56,
                fontWeight: 700,
                fontFamily: 'Poppins',
                color: '#111',
                lineHeight: 1.2,
                maxWidth: 900,
              },
              children: title,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Poppins',
          data: ogFont,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  )

  const resvg = new Resvg(svg)
  const pngBuffer = resvg.render().asPng()
  const optimised = await sharp(pngBuffer).png({ compressionLevel: 9 }).toBuffer()

  const outDir = join(process.cwd(), 'dist/og')
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, `${slug}.png`), optimised)
  console.log(`  ✓ dist/og/${slug}.png`)
}

const postsDir = join(process.cwd(), 'src/content/blog')
const files = readdirSync(postsDir).filter((f) => f.endsWith('.mdx'))

console.log('Generating OG images...')
for (const file of files) {
  const raw = readFileSync(join(postsDir, file), 'utf-8')
  const { data } = matter(raw)
  const slug = basename(file, '.mdx')
  await generateOG(slug, data.title)
}
console.log('Done.')
