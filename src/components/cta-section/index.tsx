import { MotionDiv, MotionP } from '@/components/providers/motion'
import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { fade, fadeLeft } from '@/lib/animations'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export const CTASection = () => {
  return (
    <section className="relative flex h-[633px] w-full flex-col items-center justify-center space-y-12 overflow-hidden">
      <Image
        src="/cta-img.png"
        alt="img"
        fill
        className="-z-10 object-cover opacity-25"
        unoptimized
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
