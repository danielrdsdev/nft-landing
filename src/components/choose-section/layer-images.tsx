import { MotionDiv } from '@/components/providers/motion'
import { fade } from '@/lib/animations'
import Image from 'next/image'

export const LayerImages = () => {
  return (
    <>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute left-[111px] top-0 hidden lg:block"
      >
        <div className="relative h-4 w-4">
          <Image
            src="/layers/circle-01.png"
            alt="x"
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
        className="absolute -bottom-4 left-0 hidden lg:block 2xl:-left-[81px] 2xl:bottom-[66px]"
      >
        <div className="relative h-7 w-7">
          <Image
            src="/layers/x.png"
            alt="x"
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
        className="absolute -bottom-8 right-0 hidden lg:block 2xl:-right-[111px] 2xl:bottom-[66px]"
      >
        <div className="relative h-6 w-6">
          <Image
            src="/layers/circle-02.png"
            alt="x"
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
