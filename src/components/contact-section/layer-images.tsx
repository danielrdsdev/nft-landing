import { fade } from '@/lib/animations'
import Image from 'next/image'
import { MotionDiv } from '../providers/motion'

export const LayerImages = () => {
  return (
    <>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute left-[96px] top-[51px]"
      >
        <div className="relative h-4 w-4">
          <Image
            src="/layers/circle-01.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </MotionDiv>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute right-[192px] top-[51px]"
      >
        <div className="relative h-6 w-6">
          <Image
            src="/x.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </MotionDiv>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-[76px] left-[192px]"
      >
        <div className="relative h-8 w-8">
          <Image
            src="/layers/dcoin.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </MotionDiv>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-[51px] right-[96px]"
      >
        <div className="relative h-11 w-11">
          <Image
            src="/layers/ethereum-02.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </MotionDiv>
    </>
  )
}
