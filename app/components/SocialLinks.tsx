import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface SocialLink {
  name: string
  url: string
  icon: string
}

interface SocialLinksProps {
  links: SocialLink[]
}

const iconMap: Record<string, IconDefinition> = {
  'fa-brands fa-linkedin-in': faLinkedinIn,
  'fa-brands fa-github': faGithub,
  'fa-solid fa-envelope': faEnvelope,
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <ul className='flex flex-row mt-4 justify-center gap-x-6'>
      {links.map((link) => (
        <li key={link.name}>
          <a
            className="hover:text-emerald-500"
            rel="noopener noreferrer"
            target="_blank"
            href={link.url}
          >
            <FontAwesomeIcon icon={iconMap[link.icon]} className="w-5 h-5" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
