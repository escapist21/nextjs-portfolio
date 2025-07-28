import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-wider">
        Sourav's Portfolio
      </h1>
      <h2 className="mb-2 text-xl font-semibold tracking-normal">
        Data Scientist | Systems Thinker | Mixed-methods Researcher
      </h2>
      <h2 className="mb-8 text-xl font-normal tracking-normal">
        Building AI & Data Tools for Climate, Migration & Policy Impact
      </h2>
      <p className="mb-4">
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
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
