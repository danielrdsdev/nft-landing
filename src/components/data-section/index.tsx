import Image from 'next/image'
import { DataCard } from './data-card'

const datas = [
  {
    id: 1,
    dataTitle: '400k+',
    dataDescription: 'Wallets Connected',
  },
  {
    id: 2,
    dataTitle: '20k+',
    dataDescription: 'Wallets Connected',
  },
  {
    id: 3,
    dataTitle: '230+',
    dataDescription: 'Creative artists',
  },
  {
    id: 4,
    dataTitle: '2.5x',
    dataDescription: 'Estimated value',
  },
]

export const DataSection = () => {
  return (
    <section className="container relative grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {datas.map((data) => (
        <DataCard key={data.id} {...data} />
      ))}

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
    </section>
  )
}
