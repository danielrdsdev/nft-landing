import { AboutSection } from '@/components/about-section'
import { ArtistSection } from '@/components/artist-section'
import { ChooseSection } from '@/components/choose-section'
import { CollectionSection } from '@/components/collection-section'
import { ContactSection } from '@/components/contact-section'
import { CTASection } from '@/components/cta-section'
import { DataSection } from '@/components/data-section'
import { Divider } from '@/components/divider'
import { EnterprisesSection } from '@/components/enterprises-section'
import { HeroSection } from '@/components/hero-section'
import { QASection } from '@/components/qa-section'
import { RoadmapSection } from '@/components/roadmap-section'

export default function Home() {
	return (
		<>
			<HeroSection />

			<EnterprisesSection />

			<Divider />

			<CollectionSection />

			<Divider />

			<ChooseSection />

			<Divider />

			<DataSection />

			<Divider />

			<AboutSection />

			<Divider />

			<ContactSection />

			<Divider />

			<RoadmapSection />

			<Divider />

			<ArtistSection />

			<Divider />

			<QASection />

			<Divider />

			<CTASection />
		</>
	)
}
