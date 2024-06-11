export default function ButtonLayout(children: React.ReactNode) {
  
  return(
    <button className="px-16 py-3 border rounded-full border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white hover:border-white">
      {children}
    </button>
  )
}