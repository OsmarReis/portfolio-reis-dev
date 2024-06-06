import NavItem from "./NavItem"

interface NavBarProps{
  className?: string;
}

export default function Navbar({className}: NavBarProps) {
  const navPaths = [
    {
      text: "Home",
      icon: "none"
    },
    {
      text: "About",
      icon: "none"
    },
    {
      text: "Resume",
      icon: "none"
    },
    {
      text: "Portfolio",
      icon: "none"
    },
    {
      text: "Contact",
      icon: "none"
    },
  ]

  const handleIsActive = () => {
    return false;
  }


  return(
    <nav className={className ?? ""}>
      <ul className="flex flex-col gap-6">
        {navPaths.map((item, index) => 
          <NavItem
            key={index}
            text={item.text}
            active={handleIsActive()}
          />
        )}
      </ul>
    </nav>
  )
}