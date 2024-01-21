import Image from 'next/image'

export const LayerImages = () => {
  return (
    <>
      <div className="absolute left-[96px] top-[51px]">
        <div className="relative h-4 w-4">
          <Image
            src="/circle-01.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute right-[192px] top-[51px]">
        <div className="relative h-6 w-6">
          <Image
            src="/x.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-[76px] left-[192px]">
        <div className="relative h-8 w-8">
          <Image
            src="/dcoin.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-[51px] right-[96px]">
        <div className="relative h-11 w-11">
          <Image
            src="/ethereum-02.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
    </>
  )
}
