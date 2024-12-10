import { MAIN_LINKS, SOCIAL_LINKS } from '@/config/nav'
import React from 'react'
import { MobileNav } from './mobile-nav'
import { NavLink } from './nav-link'

export const Header = () => {
	return (
		<header className="container z-10 flex h-20 items-center justify-between">
			<h1 className="font-secondary text-2xl font-extrabold">NFTHub</h1>

			<div className="lg:hidden">
				<MobileNav />
			</div>

			<nav className="hidden items-center gap-8 lg:flex">
				{MAIN_LINKS.map((link) => (
					<NavLink key={link.sectionId} sectionId={link.sectionId}>
						{link.label}
					</NavLink>
				))}
			</nav>

			<div className="hidden items-center gap-5 lg:flex">
				{SOCIAL_LINKS.map((link) => (
					<React.Fragment key={link.id}>
						{link.desktop === true && (
							<a
								key={link.id}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								<link.icon className="h-6 w-6 fill-foreground" />
								<span className="sr-only">Social icon</span>
							</a>
						)}
					</React.Fragment>
				))}
			</div>
		</header>
	)
}
