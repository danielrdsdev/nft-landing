import Image from 'next/image'
import { ElementType } from 'react'

type ArtistCardProps = {
	artistImage: string
	artistName: string
	artistDescription: string
	socials: {
		name: string
		link: string
		icon: ElementType
	}[]
}

export const ArtistCard = ({
	artistImage,
	artistName,
	artistDescription,
	socials,
}: ArtistCardProps) => {
	return (
		<div className="flex w-[277px] flex-col items-center justify-center space-y-6">
			<div className="w-fit rounded-4xl border bg-muted/25 p-2">
				<div className="relative h-[142px] w-[142px]">
					<Image
						src={artistImage}
						alt={artistName}
						fill
						sizes="100%"
						className="object-cover"
						unoptimized
					/>
				</div>
			</div>

			<div className="space-y-1">
				<h3 className="text-center text-xl font-bold">{artistName}</h3>
				<p className="text-center text-muted">{artistDescription}</p>
			</div>

			<div className="flex items-center gap-4">
				{socials.map((social) => (
					<a
						key={social.name}
						href={social.link}
						target="_blank"
						rel="noreferrer noopener"
					>
						<social.icon className="h-5 w-5 fill-foreground" />
						<span className="sr-only">Social icon</span>
					</a>
				))}
			</div>
		</div>
	)
}
