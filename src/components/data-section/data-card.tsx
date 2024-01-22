type DataCardProps = {
  dataTitle: string
  dataDescription: string
}

export const DataCard = ({ dataTitle, dataDescription }: DataCardProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-5 py-2 md:border-l md:first:border-0">
      <h3 className="text-6xl font-bold lg:text-7xl">{dataTitle}</h3>
      <p className="text-lg text-muted">{dataDescription}</p>
    </div>
  )
}
