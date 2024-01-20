import { ElementType } from 'react'

type ChooseCardProps = {
  icon: ElementType
  chooseTitle: string
  chooseDescription: string
}

export const ChooseCard = ({
  icon: Icon,
  chooseTitle,
  chooseDescription,
}: ChooseCardProps) => {
  return (
    <div className="space-y-8 rounded-2xl border px-8 py-12 lg:even:mt-10">
      <Icon />

      <h3 className="text-2xl font-bold">{chooseTitle}</h3>
      <p className="text-lg text-muted">{chooseDescription}</p>
    </div>
  )
}
