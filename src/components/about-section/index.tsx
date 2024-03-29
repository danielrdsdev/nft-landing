import { SectionTitle } from '@/components/section-title'
import { AboutCard } from './about-card'

const aboutCards = [
	{
		id: 1,
		aboutImage: '/features/features-07.png',
		aboutTitle: 'Setup and connect your wallet.',
		aboutDescription:
			'Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.',
		aboutDescriptionSecondary:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or any wallet ipsam temporibus.',
		aboutLink: '#',
	},
	{
		id: 2,
		aboutImage: '/features/features-05.png',
		aboutTitle: 'Create your own digital artwork',
		aboutDescription:
			'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks & digital artwork.',
		aboutDescriptionSecondary:
			'Starting the production on the procedurally generated planets and the smart contract for minting.',
		aboutLink: '#',
	},
	{
		id: 3,
		aboutImage: '/features/features-06.png',
		aboutTitle: 'Choose a platform to sell your NFT',
		aboutDescription:
			'Earn ETH and BIT for all your NFTs that you sell on our marketplace.',
		aboutDescriptionSecondary:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae doloremque a officiis quasi autem!',
		aboutLink: '#',
	},
]

export const AboutSection = () => {
	return (
		<section id="about" className="container space-y-16 overflow-hidden py-32">
			<SectionTitle titlePrimary="How it" titleSecondary="works!" />

			<div className="space-y-28">
				{aboutCards.map((about, i) => (
					<AboutCard key={about.id} {...about} index={i + 1} />
				))}
			</div>
		</section>
	)
}
