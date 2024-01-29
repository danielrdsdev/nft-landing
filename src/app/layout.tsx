import { BackToTop } from '@/components/back-to-top'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { inter, orbitron } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'NFT - Landing Page',
	description: 'A landing page presenting some NFTs',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body className={`${inter.variable} ${orbitron.variable}`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<div className="flex min-h-full flex-col">
						<Header />

						<main className="flex-1 overflow-hidden">{children}</main>

						<Footer />
					</div>

					<BackToTop />
				</ThemeProvider>
			</body>
		</html>
	)
}
