import { Icons } from '@/components/icons'

type RoadmapCardProps = {
	index: number
	percentage: number
	roadmapTitle: string
	roadmapDescription: string
	roadmapEssentials: {
		essential: string
	}[]
}

export const RoadmapCard = ({
	index,
	percentage,
	roadmapTitle,
	roadmapDescription,
	roadmapEssentials,
}: RoadmapCardProps) => {
	return (
		<div className="relative space-y-8 rounded-4xl border px-8 py-6">
			<div className="flex items-center justify-between">
				<span className="bg-gradient-to-br from-primary to-secondary bg-clip-text font-bold uppercase text-transparent">
					phase 0{index}
				</span>

				<div className="flex h-12 w-12 rotate-[16deg] flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground">
					<span className="text-2xl font-bold leading-none">{percentage}</span>
					<span className="font-bold leading-none">%</span>
				</div>
			</div>

			<h3 className="text-3xl font-bold">{roadmapTitle}</h3>
			<p className="text-lg text-muted">{roadmapDescription}</p>

			<span className="block h-[1px] w-20 bg-muted/25" />

			<div className="space-y-3">
				{roadmapEssentials.map((essential) => (
					<div key={essential.essential} className="flex items-center gap-3">
						<Icons.check />

						<span>{essential.essential}</span>
					</div>
				))}
			</div>
		</div>
	)
}
