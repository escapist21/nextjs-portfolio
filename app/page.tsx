import { BlogPosts } from 'app/components/posts'
import SocialLinks from 'app/components/SocialLinks'
import socialLinks from 'app/lib/social-links.json'
import Image from 'next/image'

export default function Page() {
  return (
    <section className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-16'>
      <div className='flex w-full lg:w-1/3 flex-col rounded-2xl border-6 border-emerald-500 py-10 px-4' id='Social Section'>
        <div className="flex justify-center">
          <Image
            className='mb-4 rounded-lg object-cover'
            src="/images/headshot_rect_yellow_shadow.webp"
            alt="A profile image of Sourav Adhikari"
            width={240}
            height={280}
          />
        </div>
        <div className='flex flex-col'>
          <h3 className="mb-4 text-center text-4xl lg:text-5xl font-extrabold font-stretch-condensed tracking-tight">Sourav Adhikari</h3>
          <p className="text-center text-md lg:text-md font-stretch-extra-condensed">Data Scientist | Systems Thinker | Researcher</p>
          <p className="text-center text-md lg:text-md">New Delhi, India</p>
          <SocialLinks links={socialLinks} />
        </div>
      </div>
      <div className='flex flex-col w-full lg:w-2/3 text-center lg:text-left justify-center md:justify-start' id="Main Content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-stretch-50% tracking-tight">
          Building AI & Data Tools for
        </h1>
        <h1 className="mb-4 text-6xl md:text-7xl font-extrabold text-emerald-500">
          Policy Impact
        </h1>
        <p className="mb-4 text-lg lg:text-xl">Data Science enthusiast working at the intersection of public policy, systems design and social impact</p>
        {/* <p className="mb-4">
          {`I’m a full-stack data science engineer working at the intersection of public policy, 
          climate resilience, and social impact. My work spans the design and automation of complex 
          data pipelines, geospatial and mixed-methods analysis, and building AI-enabled systems 
          that inform real-world decisions.`}
        </p>
        <p className='mb-4'>
          {`Currently, I focus on leveraging data-driven insights to unpack the systemic links between 
          climate change, migration, and agriculture especially in contexts like India's just energy 
          transition, labour mobility, and digital literacy. I’ve collaborated with UN agencies, 
          academic institutions, and social enterprises to translate research into actionable tools, 
          policy briefs, and digital platforms.`}
        </p>
        <h3 className='text-5xl font-extrabold font-stretch-50% tracking-tight'>Philosophy</h3>
        <p className='text-2xl'>Build slow, Think wide, Execute with precision.</p>
        <p>Great systems aren’t just efficient - they’re empathetic. I believe in tools that adapt to people, not the other way around.</p> */}
      <div className="my-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold font-stretch-50% tracking-tight mb-6">
          Thoughts
        </h1>
        <BlogPosts />
      </div>
      </div>
    </section>
  )
}
