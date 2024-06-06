interface SocialIconsProps{
  urlRef: string;
  children: React.ReactNode;
}

export default function SocialIcon({ urlRef, children}: SocialIconsProps) {

  return(
    <a href={urlRef} className="hover:text-red-600 hover:cursor-pointer duration-200">
      {children}
    </a>
  )
}