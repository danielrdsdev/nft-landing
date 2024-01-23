import Link from 'next/link'

type FooterNavProps = {
  navTitle: string
  navLinks: {
    label: string
    href: string
  }[]
}

export const FooterNav = ({ navTitle, navLinks }: FooterNavProps) => {
  return (
    <div className="flex flex-col space-y-5">
      <h4 className="text-xl font-bold">{navTitle}</h4>
      <div className="flex flex-col space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-lg text-muted"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
