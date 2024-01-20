type DataCardProps = {
  dataTitle: string
  dataDescription: string
}

export const DataCard = ({ dataTitle, dataDescription }: DataCardProps) => {
  return (
    <div className="flex flex-col space-y-5 px-8 py-2 md:border-l md:first:border-0">
      <h3 className="text-5xl font-bold">{dataTitle}</h3>
      <p className="text-lg text-muted">{dataDescription}</p>
    </div>
  )
}
