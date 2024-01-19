import Link from 'next/link'
import { ComponentProps } from 'react'

export const NavLink = (props: ComponentProps<typeof Link>) => {
  return <Link {...props} className="text-lg font-bold" />
}
