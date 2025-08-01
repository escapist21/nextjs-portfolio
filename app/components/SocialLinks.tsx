import React from 'react';

// Define the structure for a single social link
interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Define the props for the SocialLinks component
interface SocialLinksProps {
  links: SocialLink[];
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
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;