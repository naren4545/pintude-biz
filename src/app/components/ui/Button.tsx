

export default function Button({children,href , className}) {
  return (
   <a href={href} className={"bg-[#F6830E] py-4 px-8 text-center min-w-[160px] text-white " +className}>{children}</a>
  )
}
