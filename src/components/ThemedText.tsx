interface ThemedTextProps{
  something?: string;
  children: React.ReactNode;
}


export default function ThemedText({ children }: ThemedTextProps) {
  return(
    <div className="w-fit mx-auto">
      <h1 className="text-red-500 font-medium text-2xl px-4">
      {children}
    </h1>
    <div className="border-linear w-full h-[2px]"></div>
    </div>
  )
}