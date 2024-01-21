import { Icons } from '@/components/icons'
import { SectionTitle } from '@/components/section-title'
import { ChooseCard } from './choose-card'
import { LayerImages } from './layer-images'

const chooses = [
  {
    id: 1,
    icon: Icons.choose01,
    chooseTitle: 'Huge collection',
    chooseDescription:
      'A collection of 890 unique Nerkos built to go beyond the digital space.',
  },
  {
    id: 2,
    icon: Icons.choose02,
    chooseTitle: 'High quality',
    chooseDescription:
      'The nerkos collection includes dozens of rare costumes ands colorways of artists.',
  },
  {
    id: 3,
    icon: Icons.choose03,
    chooseTitle: 'Top resource',
    chooseDescription:
      'Tasty design resources made with care for each pixel. NFTs and game resources.',
  },
  {
    id: 4,
    icon: Icons.choose04,
    chooseTitle: 'Big community',
    chooseDescription:
      'Be part of a community of nerko owners and create user generated items.',
  },
]

export const ChooseSection = () => {
  return (
    <section className="container relative space-y-16">
      <SectionTitle titlePrimary="Why" titleSecondary="choose us?" />

      <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {chooses.map((choose) => (
          <ChooseCard key={choose.id} {...choose} />
        ))}
      </div>

      <LayerImages />
    </section>
  )
}
