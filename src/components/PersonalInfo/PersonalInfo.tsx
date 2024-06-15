import PersonalInfoItem from "./PersonalInfoItem";

export default function PersonalInfo() {
  const personalData = [
    {
      title: "Birthday",
      info: "April 27, 1999",
    },
    {
      title: "Email",
      info: "reisdev.ti@gmail.com",
    },
    {
      title: "From",
      info: "Federal District, Brazil",
    },
    {
      title: "Language",
      info: "Portuguese Brazil, English",
    },
    {
      title: "Freelance",
      info: "Available",
    },
  ];

  return <ul className="flex flex-col gap-3">
    {personalData.map((item, index): React.ReactNode => {
      return <PersonalInfoItem key={index} title={item.title} info={item.info} />
    })}
  </ul>;
}
