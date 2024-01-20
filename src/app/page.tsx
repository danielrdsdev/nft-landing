import { ChooseSection } from '@/components/choose-section'
import { CollectionSection } from '@/components/collection-section'
import { Divider } from '@/components/divider'
import { EnterprisesSection } from '@/components/enterprises-section'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <EnterprisesSection />

      <Divider />

      <CollectionSection />

      <Divider />

      <ChooseSection />
    </>
  )
}
