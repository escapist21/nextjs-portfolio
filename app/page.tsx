import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className='flex space-x-16 h-screen'>
      <div className='flex w-1/3 flex-col bg-amber-100 rounded-2xl h-2/3' id='Social Section'>
        <div className="flex justify-center">
          <img className="my-10 rounded-md" src="https://placehold.co/240x280" />
        </div>
        <h3 className="mb-4 text-center text-5xl font-extrabold font-stretch-condensed">Sourav Adhikari</h3>
        <p className="text-center text-xl font-stretch-extra-condensed">Data Scientist | Systems Thinker | Researcher</p>
        <p className="text-center text-xl ">New Delhi, India</p>
        <p className="flex justify-evenly bg-amber-300 px-24 mt-6"><span>💼</span><span>🧑🏾‍💻</span><span>X</span></p>
      </div>
      <div className='flex flex-col w-2/3 text-left h-2/3'>
        <h1 className="mt-10 text-6xl font-extrabold font-stretch-50%">
          Building AI & Data Tools for
        </h1>
        <h1 className="mb-4 text-7xl font-extrabold text-emerald-500">
          Policy Impact
        </h1>
        <p className="mb-4 text-xl">Data Science enthusiast working at the intersection of public policy, systems design and social impact</p>
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
      </div>
      {/* <h1 className="mb-8 text-2xl font-semibold tracking-wider">
        Sourav's Portfolio
      </h1> */}
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
