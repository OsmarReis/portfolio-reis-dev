interface NavItemProps {
  text: string;
  active?: boolean;
}

export default function NavItem({ text, active }: NavItemProps){
  return(
    <a href={`#${text}`} className={active ? "font-bold text-base uppercase text-red-500" : "font-bold text-base uppercase hover:text-red-700 duration-200"}>
      {text}
    </a>
  )
}