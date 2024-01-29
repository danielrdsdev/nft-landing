'use client'

import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type NavLinkProps = ComponentProps<'button'> & {
	sectionId: string
}

export const NavLink = ({ sectionId, ...props }: NavLinkProps) => {
	const scrollToSection = (sectionId: string) => {
		const sectionElement = document.getElementById(sectionId)

		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<button
			{...props}
			onClick={() => scrollToSection(sectionId)}
			className={cn('text-lg font-bold', props.className)}
			type="button"
		/>
	)
}
