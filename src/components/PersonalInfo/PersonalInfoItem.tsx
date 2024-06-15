interface PersonalInfoItemProps {
  title: string;
  info: string;
}

export default function PersonalInfoItem({title, info}: PersonalInfoItemProps) {
  return (
      <li className="w-full flex justify-between">
        <span className="w-3/4 text-sm font-light lg:text-base">{title}</span>
        <span className="w-full text-sm font-light lg:text-base">: {info}</span>
      </li>
  )
}