import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const navItems: Record<string, { name: string; icon: IconDefinition }> = {
  '/': {
    name: 'Home',
    icon: faHouse,
  },
  '/blog': {
    name: 'Blog',
    icon: faNewspaper,
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-4 sm:pr-6 md:pr-10">
            {Object.entries(navItems).map(([path, { name, icon }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="group transition-all
                  hover:bg-emerald-500
                  rounded-md
                  flex align-middle relative py-3 px-3 m-1 min-w-[44px] min-h-[44px] text-lg sm:text-xl"
                >
                  <FontAwesomeIcon icon={icon} className="w-5 h-5" />
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
