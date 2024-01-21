import { SOCIAL_LINKS } from '@/config/nav'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="border-t pb-8 pt-20">
      <div className="container flex flex-col space-y-16">
        <div className="flex justify-between">
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
                <a key={link.href} href={link.href}>
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">Social icon</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-32">
            <div className="flex flex-col space-y-5">
              <h4 className="text-xl font-bold">Quick Link</h4>
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-lg text-muted">
                  About
                </Link>
                <Link href="/" className="text-lg text-muted">
                  Collection
                </Link>
                <Link href="/" className="text-lg text-muted">
                  Roadmap
                </Link>
                <Link href="/" className="text-lg text-muted">
                  FAQs
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <h4 className="text-xl font-bold">Community</h4>
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-lg text-muted">
                  How it works!
                </Link>
                <Link href="/" className="text-lg text-muted">
                  Blockchain
                </Link>
                <Link href="/" className="text-lg text-muted">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">
            Copyright © 2023 Nfthub All Rights Reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-muted">
              Privacy policy
            </Link>
            <Link href="/" className="text-sm text-muted">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
