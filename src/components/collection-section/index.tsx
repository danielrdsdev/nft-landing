import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { fade, fadeScale } from '@/lib/animations'
import { ArrowUpRight } from 'lucide-react'
import { MotionDiv } from '../providers/motion'
import { CollectionCard } from './collection-card'

const collections = [
  {
    id: 1,
    collectionImage: '/card/card-01.png',
    collectionTitle: '#Metaverse',
    collectionDescription: 'By TheSalvare',
  },
  {
    id: 2,
    collectionImage: '/card/card-02.png',
    collectionTitle: '#Polly Doll',
    collectionDescription: 'By TheNative',
  },
  {
    id: 3,
    collectionImage: '/card/card-03.png',
    collectionTitle: '#Alec Art',
    collectionDescription: 'By GeorgZvic',
  },
  {
    id: 4,
    collectionImage: '/card/card-04.png',
    collectionTitle: '#Toxic Poeth',
    collectionDescription: 'By YazoiLup',
  },
]

export const CollectionSection = () => {
  return (
    <section id="collection" className="container space-y-16 py-32">
      <SectionTitle titlePrimary="Nfthub's" titleSecondary="collection" />

      <div className="grid grid-cols-4 gap-12">
        {collections.map((collection, i) => (
          <MotionDiv
            {...fadeScale}
            key={collection.id}
            transition={{
              duration: 0.3,
              type: 'spring',
              delay: 0.2 + i * 0.1,
              stiffness: 200,
            }}
          >
            <CollectionCard {...collection} />
          </MotionDiv>
        ))}
      </div>

      <MotionDiv
        {...fade}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center justify-center"
      >
        <Button className="w-fit">
          View collection
          <ArrowUpRight className="ml-2 h-6 w-6" />
        </Button>
      </MotionDiv>
    </section>
  )
}
