import { MAIN_LINKS, SOCIAL_LINKS } from '@/config/nav'
import { MobileNav } from './mobile-nav'
import { NavLink } from './nav-link'

export const Header = () => {
  return (
    <header className="container flex h-20 items-center justify-between">
      <h1 className="font-secondary text-2xl font-extrabold">NFTHub</h1>

      <div className="lg:hidden">
        <MobileNav />
      </div>

      <nav className="hidden items-center gap-8 lg:flex">
        {MAIN_LINKS.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="hidden items-center gap-5 lg:flex">
        {SOCIAL_LINKS.map((link) => (
          <>
            {link.desktop === true && (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-6 w-6" />
              </a>
            )}
          </>
        ))}
      </div>
    </header>
  )
}