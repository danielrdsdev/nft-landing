import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { SectionTitle } from '../section-title'
import { Button } from '../ui/button'

export const CTASection = () => {
  return (
    <section className="relative flex h-[633px] w-full flex-col items-center justify-center space-y-12">
      <Image
        src="/cta-img.png"
        alt="img"
        fill
        className="-z-10 object-cover opacity-25"
      />

      <div className="space-y-6">
        <SectionTitle
          className="mx-auto max-w-lg"
          titlePrimary="Lets start"
          titleSecondary="minting"
        />

        <p className="text-center text-xl text-muted">
          Invest and manage all your NFTs at one place.
        </p>
      </div>

      <Button>
        Get started
        <ArrowUpRight className="ml-2 h-6 w-6" />
      </Button>
    </section>
  )
}
