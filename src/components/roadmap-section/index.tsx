import { SectionTitle } from '@/components/section-title'
import { RoadmapCard } from './roadmap-card'

const roadmapCards = [
  {
    id: 1,
    percentage: 0,
    roadmapTitle: 'Planning',
    roadmapDescription:
      'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    roadmapEssentials: [
      {
        essential: 'Concept',
      },
      {
        essential: 'Story',
      },
      {
        essential: 'Art Direction',
      },
      {
        essential: 'Production Pipeline',
      },
    ],
  },
  {
    id: 2,
    percentage: 25,
    roadmapTitle: 'Production',
    roadmapDescription:
      'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    roadmapEssentials: [
      {
        essential: 'Concept',
      },
      {
        essential: 'Story',
      },
      {
        essential: 'Art Direction',
      },
      {
        essential: 'Production Pipeline',
      },
    ],
  },
  {
    id: 3,
    percentage: 50,
    roadmapTitle: 'Launch',
    roadmapDescription:
      'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    roadmapEssentials: [
      {
        essential: 'Concept',
      },
      {
        essential: 'Story',
      },
      {
        essential: 'Art Direction',
      },
      {
        essential: 'Production Pipeline',
      },
    ],
  },
  {
    id: 4,
    percentage: 75,
    roadmapTitle: 'Minting',
    roadmapDescription:
      'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    roadmapEssentials: [
      {
        essential: 'Concept',
      },
      {
        essential: 'Story',
      },
      {
        essential: 'Art Direction',
      },
      {
        essential: 'Production Pipeline',
      },
    ],
  },
  {
    id: 5,
    percentage: 95,
    roadmapTitle: 'New Nfts',
    roadmapDescription:
      'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    roadmapEssentials: [
      {
        essential: 'Concept',
      },
      {
        essential: 'Story',
      },
      {
        essential: 'Art Direction',
      },
      {
        essential: 'Production Pipeline',
      },
    ],
  },
  {
    id: 6,
    percentage: 100,
    roadmapTitle: 'Metaverse',
    roadmapDescription:
      'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    roadmapEssentials: [
      {
        essential: 'Concept',
      },
      {
        essential: 'Story',
      },
      {
        essential: 'Art Direction',
      },
      {
        essential: 'Production Pipeline',
      },
    ],
  },
]

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="container space-y-20 py-32">
      <SectionTitle titlePrimary="Nfthub's" titleSecondary="Roadmap" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {roadmapCards.map((card, i) => (
          <RoadmapCard key={card.id} {...card} index={i + 1} />
        ))}
      </div>
    </section>
  )
}
