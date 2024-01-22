'use client'

import { ComponentProps } from 'react'

type NavLinkProps = ComponentProps<'button'> & {
  href: string
}

export const NavLink = ({ href, ...props }: NavLinkProps) => {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      {...props}
      onClick={() => scrollToSection(href)}
      className="text-lg font-bold"
    />
  )
}
