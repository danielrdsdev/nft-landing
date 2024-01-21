import Image from 'next/image'
import { Icons } from '../icons'

export const LayerImages = () => {
  return (
    <>
      <div className="absolute left-0 top-0 h-[271px] w-[271px]">
        <Image src="/layers/art_01.png" alt="Art 01" fill sizes="100%" />
      </div>

      <div className="absolute bottom-0 right-0 h-[271px] w-[271px]">
        <Image src="/layers/art_03.png" alt="Art 01" fill sizes="100%" />

        <div className="absolute left-10 top-10 -z-10 h-[240px] w-[240px] -rotate-[10deg] rounded-[48px] border" />
      </div>

      <div className="absolute bottom-[10%] -translate-y-[10%] opacity-25">
        <Icons.heroCircle01 />
      </div>

      <div className="absolute right-[20%] top-0 -translate-x-[20%] opacity-25">
        <Icons.heroCircle02 />
      </div>
    </>
  )
}
