import { fadeScale } from '@/lib/animations'
import { MotionDiv } from '../providers/motion'
import { DataCard } from './data-card'
import { LayerImages } from './layer-images'

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
    <section className="container overflow-hidden py-32">
      <div className="relative grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {datas.map((data, i) => (
          <MotionDiv
            {...fadeScale}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            key={data.id}
          >
            <DataCard {...data} />
          </MotionDiv>
        ))}

        <LayerImages />
      </div>
    </section>
  )
}
