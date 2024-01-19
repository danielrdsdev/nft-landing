import { MAIN_LINKS, SOCIAL_LINKS } from '@/config/nav'
import { NavLink } from './nav-link'

export const Header = () => {
  return (
    <header className="container flex h-20 items-center justify-between">
      <h1 className="font-secondary text-2xl font-extrabold">NFTHub</h1>

      <nav className="flex items-center gap-8">
        {MAIN_LINKS.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </header>
  )
}
