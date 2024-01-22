import { fade } from '@/lib/animations'
import Image from 'next/image'
import { MotionDiv } from '../providers/motion'

export const LayerImages = () => {
  return (
    <>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute left-[111px] top-0"
      >
        <div className="relative h-4 w-4">
          <Image
            src="/layers/circle-01.png"
            alt="x"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </MotionDiv>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute -left-[81px] bottom-[66px]"
      >
        <div className="relative h-7 w-7">
          <Image
            src="/x.png"
            alt="x"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </MotionDiv>
      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute -right-[111px] bottom-[66px]"
      >
        <div className="relative h-6 w-6">
          <Image
            src="/layers/circle-02.png"
            alt="x"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </MotionDiv>
    </>
  )
}
