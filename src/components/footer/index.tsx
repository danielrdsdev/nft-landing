import { SOCIAL_LINKS } from '@/config/nav'
import Link from 'next/link'
import { FooterNav } from './footer-nav'

const footerNav = [
  {
    navTitle: 'Quick Link',
    navLinks: [
      {
        label: 'About',
        href: '#',
      },
      {
        label: 'Collection',
        href: '#',
      },
      {
        label: 'Roadmap',
        href: '#',
      },
      {
        label: 'FAQs',
        href: '#',
      },
    ],
  },
  {
    navTitle: 'Community',
    navLinks: [
      {
        label: 'How it works!',
        href: '#',
      },
      {
        label: 'Blockchain',
        href: '#',
      },
      {
        label: 'Get in touch',
        href: '#',
      },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="overflow-hidden border-t pb-8 pt-20">
      <div className="container flex flex-col space-y-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col space-y-6">
            <h4 className="bg-gradient-to-br from-primary to-secondary bg-clip-text font-secondary text-3xl font-extrabold text-transparent">
              NFTHub
            </h4>

            <p className="max-w-lg text-lg text-muted">
              Join our Discord channel or follow us on Twitter to keep up to
              date with our latest work and announcements.
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.id} href={link.href}>
                  <link.icon className="h-6 w-6 fill-foreground" />
                  <span className="sr-only">Social icon</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row">
            {footerNav.map((nav) => (
              <FooterNav key={nav.navTitle} {...nav} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
          <span className="text-sm text-muted">
            Copyright © 2023 Nfthub All Rights Reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted">
              Privacy policy
            </Link>
            <Link href="#" className="text-sm text-muted">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
