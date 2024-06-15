import EducationContent from "./EducationContent"
import SchoolIcon from '@mui/icons-material/School';

export default function EducationResume() {

  const education_list = [
    {
      title: "System Analysis and Development",
      from_year: 2020,
      to_year: 2022,
      institution: "University IESB",
      description: "Lorem ipsum dolor sit amet consectetur. Tellus est eu vitae id sed orci mattis. Scelerisque et facilisi euismod molestie egestas sit luctus."
    },
    {
      title: "Complete Web Design",
      from_year: 2020,
      to_year: 2022,
      institution: "Origamid",
      description: "Lorem ipsum dolor sit amet consectetur. Tellus est eu vitae id sed orci mattis. Scelerisque et facilisi euismod molestie egestas sit luctus."
    },
    {
      title: "Responsive WEB Design",
      from_year: 2020,
      to_year: 2022,
      institution: "freeCode Camp",
      description: "Lorem ipsum dolor sit amet consectetur. Tellus est eu vitae id sed orci mattis. Scelerisque et facilisi euismod molestie egestas sit luctus."
    }
  ]

  return(
    <div className="max-w-[450px] flex gap-7">
      <div className="flex flex-col gap-10 justify-center items-center pb-2">
        <div className="p-2 bg-yellow-400 border border-black rounded-full flex items-center justify-center">
              <SchoolIcon className=" size-7"/>
        </div>
        <div id="progressiveBar" className="w-[2px] h-full bg-slate-900 rounded-sm">

        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl px-1">Education</h1>
        {education_list.map((item, index) => {
          return(
            <EducationContent key={index} title={item.title} from_year={item.from_year} to_year={item.to_year} institution={item.institution} description={item.description} />
          )
        })}
      </div>

    </div>
  )
}