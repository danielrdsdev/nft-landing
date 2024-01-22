import { Icons } from '@/components/icons'
import { SectionTitle } from '@/components/section-title'
import { fade } from '@/lib/animations'
import { MotionDiv } from '../providers/motion'
import { ArtistCard } from './artist-card'

const artists = [
  {
    artistImage: '/artist/artist-01.png',
    artistName: 'Steps Jobs',
    artistDescription: 'Artist',
    socials: [
      {
        name: 'twitter',
        link: 'https://twitter.com',
        icon: Icons.twitter,
      },
      {
        name: 'instagram',
        link: 'https://instagram.com',
        icon: Icons.discord,
      },
      {
        name: 'discord',
        link: 'https://discord.com',
        icon: Icons.instagram,
      },
    ],
  },
  {
    artistImage: '/artist/artist-02.png',
    artistName: 'Andry Moray',
    artistDescription: 'Blockchain',
    socials: [
      {
        name: 'twitter',
        link: 'https://twitter.com',
        icon: Icons.twitter,
      },
      {
        name: 'instagram',
        link: 'https://instagram.com',
        icon: Icons.discord,
      },
      {
        name: 'discord',
        link: 'https://discord.com',
        icon: Icons.instagram,
      },
    ],
  },
  {
    artistImage: '/artist/artist-03.png',
    artistName: 'Zaid Ed',
    artistDescription: 'Developer',
    socials: [
      {
        name: 'twitter',
        link: 'https://twitter.com',
        icon: Icons.twitter,
      },
      {
        name: 'instagram',
        link: 'https://instagram.com',
        icon: Icons.discord,
      },
      {
        name: 'discord',
        link: 'https://discord.com',
        icon: Icons.instagram,
      },
    ],
  },
  {
    artistImage: '/artist/artist-04.png',
    artistName: 'Laila Ed',
    artistDescription: 'Marketing',
    socials: [
      {
        name: 'twitter',
        link: 'https://twitter.com',
        icon: Icons.twitter,
      },
      {
        name: 'instagram',
        link: 'https://instagram.com',
        icon: Icons.discord,
      },
      {
        name: 'discord',
        link: 'https://discord.com',
        icon: Icons.instagram,
      },
    ],
  },
]

export const ArtistSection = () => {
  return (
    <section className="container space-y-20 overflow-hidden py-32">
      <SectionTitle titlePrimary="Meet" titleSecondary="the artists" />

      <div className="grid grid-cols-2 place-items-center gap-y-16 md:grid-cols-3 lg:grid-cols-4">
        {artists.map((artist, i) => (
          <MotionDiv
            {...fade}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            key={artist.artistName}
            className="lg:even:-mt-10"
          >
            <ArtistCard {...artist} />
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}
