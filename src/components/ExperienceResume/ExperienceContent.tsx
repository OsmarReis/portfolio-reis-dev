interface EducationContentProps{
  title: string;
  from_year: number;
  to_year: number;
  institution: string;
  description: string;
}

export default function ExperienceContent({title, from_year, to_year, institution, description}: EducationContentProps) {
  return(
    <div className="flex flex-col gap-5">
      <div>
      <h2 className="text-xl text-red-500 font-medium">{title}</h2>
      <span className="text-sm font-light">{from_year} - {to_year}</span>
      </div>

      <h3 className="font-bold">{institution}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}