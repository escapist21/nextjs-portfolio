import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
    iconClasses: 'fa-regular fa-house',
  },
  '/blog': {
    name: 'Blog',
    iconClasses: 'fa-regular fa-newspaper'
  },
  // 'https://vercel.com/templates/next.js/portfolio-starter-kit': {
  //   name: 'deploy',
  // },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, iconClasses }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="group transition-all 
                  hover:bg-emerald-500 
                  rounded-md 
                  flex align-middle relative py-2 px-2 m-1 text-xl"
                >
                  <i className={iconClasses}></i>
                  <span
                    className="
                      absolute z-10
                      top-full mt-2 left-1/2 -translate-x-1/2
                      whitespace-nowrap
                      rounded-md bg-neutral-800 px-2 py-1 text-xs text-white
                      opacity-0 scale-95 transition-all
                      group-hover:opacity-100 group-hover:scale-100
                    "
                  >{name}</span>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
