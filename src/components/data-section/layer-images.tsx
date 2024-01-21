import Image from 'next/image'

export const LayerImages = () => {
  return (
    <>
      <div className="absolute -top-[26px] right-[75px] lg:-top-[38px] lg:right-[285px]">
        <div className="relative h-6 w-6">
          <Image
            src="/ethereum-01.png"
            alt="bitcoin"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute -bottom-[69px] left-[51px] lg:-bottom-[49px] lg:left-[375px]">
        <div className="relative h-8 w-8">
          <Image
            src="/bitcoin-01.png"
            alt="bitcoin"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
    </>
  )
}
