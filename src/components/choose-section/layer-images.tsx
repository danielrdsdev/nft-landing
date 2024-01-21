import Image from 'next/image'

export const LayerImages = () => {
  return (
    <>
      <div className="absolute left-[111px] top-0">
        <div className="relative h-4 w-4">
          <Image
            src="/layers/circle-01.png"
            alt="x"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute -left-[81px] bottom-[66px]">
        <div className="relative h-7 w-7">
          <Image
            src="/x.png"
            alt="x"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute -right-[111px] bottom-[66px]">
        <div className="relative h-6 w-6">
          <Image
            src="/layers/circle-02.png"
            alt="x"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
    </>
  )
}
