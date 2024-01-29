import { MotionDiv } from '@/components/providers/motion'
import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { fade } from '@/lib/animations'
import { ArrowUpRight } from 'lucide-react'
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
	{
		id: 5,
		collectionImage: '/card/card-01.png',
		collectionTitle: '#Alec Art',
		collectionDescription: 'By GeorgZvic',
	},
	{
		id: 6,
		collectionImage: '/card/card-02.png',
		collectionTitle: '#Toxic Poeth',
		collectionDescription: 'By YazoiLup',
	},
	{
		id: 7,
		collectionImage: '/card/card-03.png',
		collectionTitle: '#Toxic Poeth',
		collectionDescription: 'By YazoiLup',
	},
	{
		id: 8,
		collectionImage: '/card/card-04.png',
		collectionTitle: '#Toxic Poeth',
		collectionDescription: 'By YazoiLup',
	},
]

export const CollectionSection = () => {
	return (
		<section
			id="collection"
			className="container space-y-16 overflow-hidden py-32"
		>
			<SectionTitle titlePrimary="Nfthub's" titleSecondary="collection" />

			<Carousel
				opts={{
					align: 'start',
					dragFree: true,
					skipSnaps: false,
				}}
			>
				<CarouselContent>
					{collections.map((collection, i) => (
						<CarouselItem
							key={collection.id}
							className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
						>
							<MotionDiv
								{...fade}
								transition={{
									duration: 0.5,
									delay: 0.2 + i * 0.1,
								}}
								className="flex w-full flex-col items-center justify-center"
							>
								<CollectionCard {...collection} />
							</MotionDiv>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

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
