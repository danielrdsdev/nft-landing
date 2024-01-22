import { Button } from '@/components/ui/button'
import { fade, fadeLeft } from '@/lib/animations'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { ModeToggle } from '../header/mode-toggle'
import { MotionDiv, MotionH1, MotionP } from '../providers/motion'
import { LayerImages } from './layer-images'

export const HeroSection = () => {
  return (
    <section className="relative -mt-20 min-h-[70dvh] w-full py-28 lg:pb-48 lg:pt-72">
      <Image
        src="/hero-background-light.png"
        alt="Background hero"
        fill
        sizes="100%"
        className="-z-10 object-cover dark:hidden"
      />
      <div className="container grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-4">
        <div className="flex flex-col space-y-16 lg:max-w-[585px]">
          <div className="space-y-6">
            <MotionH1
              {...fade}
              transition={{ duration: 0.5 }}
              className="text-center text-4xl font-bold lg:text-left lg:text-7xl"
            >
              High Quality NFT Collection
            </MotionH1>
            <MotionP
              {...fade}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center text-xl text-muted lg:max-w-sm lg:text-left"
            >
              A 890 piece custom Nerkos collection is joining the NFT space on
              Opensea.
            </MotionP>
          </div>

          <MotionDiv
            {...fadeLeft}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start"
          >
            <Button className="w-fit">
              View in OPENSEA
              <ArrowUpRight className="ml-2 h-6 w-6" />
            </Button>
          </MotionDiv>

          <MotionDiv
            {...fade}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start"
          >
            <div className="relative flex items-center">
              <div className="relative h-12 w-12">
                <Image
                  src="/avatar/avatar-01.png"
                  alt="Avatar 01"
                  fill
                  sizes="100%"
                />
              </div>
              <div className="relative right-5 h-12 w-12">
                <Image
                  src="/avatar/avatar-02.png"
                  alt="Avatar 02"
                  fill
                  sizes="100%"
                />
              </div>
              <div className="relative right-10 h-12 w-12">
                <Image
                  src="/avatar/avatar-03.png"
                  alt="Avatar 03"
                  fill
                  sizes="100%"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">47k+</h2>
              <p className="text-xs text-muted">Community members</p>
            </div>
          </MotionDiv>
        </div>

        <div className="relative h-[30dvh] lg:h-auto">
          <LayerImages />
        </div>
      </div>

      <div className="absolute bottom-0 right-6">
        <ModeToggle />
      </div>
    </section>
  )
}
