import { fade, fadeLeft } from '@/lib/animations'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { MotionDiv, MotionP } from '../providers/motion'
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

        <MotionP
          {...fade}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xl text-muted"
        >
          Invest and manage all your NFTs at one place.
        </MotionP>
      </div>

      <MotionDiv {...fadeLeft} transition={{ duration: 0.3, delay: 0.6 }}>
        <Button>
          Get started
          <ArrowUpRight className="ml-2 h-6 w-6" />
        </Button>
      </MotionDiv>
    </section>
  )
}
