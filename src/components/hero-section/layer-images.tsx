import { fade, fadeScale } from '@/lib/animations'
import Image from 'next/image'
import { Icons } from '../icons'
import { MotionDiv } from '../providers/motion'

export const LayerImages = () => {
  return (
    <>
      <MotionDiv
        {...fadeScale}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        className="absolute left-0 top-0 h-[271px] w-[271px]"
      >
        <Image src="/layers/art_01.png" alt="Art 01" fill sizes="100%" />
      </MotionDiv>

      <MotionDiv
        {...fadeScale}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: 'spring',
          stiffness: 200,
        }}
        className="absolute bottom-0 right-0 h-[271px] w-[271px]"
      >
        <Image src="/layers/art_03.png" alt="Art 01" fill sizes="100%" />

        <div className="absolute left-10 top-10 -z-10 h-[240px] w-[240px] -rotate-[10deg] rounded-[48px] border" />
      </MotionDiv>

      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-[10%] -translate-y-[10%]"
      >
        <Icons.heroCircle01 />
      </MotionDiv>

      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute right-[20%] top-0 -translate-x-[20%]"
      >
        <Icons.heroCircle02 />
      </MotionDiv>
    </>
  )
}
