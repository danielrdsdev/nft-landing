import { MotionDiv } from '@/components/providers/motion'
import { fade } from '@/lib/animations'
import Image from 'next/image'

export const LayerImages = () => {
  return (
    <>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute left-6 top-4 lg:left-[96px] lg:top-[51px]"
      >
        <div className="relative h-4 w-4">
          <Image
            src="/layers/circle-01.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
            unoptimized
          />
        </div>
      </MotionDiv>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute right-14 top-4 lg:right-[192px] lg:top-[51px]"
      >
        <div className="relative h-6 w-6">
          <Image
            src="/layers/x.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
            unoptimized
          />
        </div>
      </MotionDiv>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-3 left-8 lg:bottom-[76px] lg:left-[192px]"
      >
        <div className="relative h-8 w-8">
          <Image
            src="/layers/dcoin.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
            unoptimized
          />
        </div>
      </MotionDiv>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-3 right-7 lg:bottom-[51px] lg:right-[96px]"
      >
        <div className="relative h-11 w-11">
          <Image
            src="/layers/ethereum-02.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
            unoptimized
          />
        </div>
      </MotionDiv>
    </>
  )
}
