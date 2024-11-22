import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string; // Optional prop
}

export default function Button({ children, href, className = "" }: ButtonProps) {
  return (
   <a href={href} className={"bg-[#FF5E62] hover:bg-[#F55256] rounded-lg shadow-[0px_8px_15px_rgba(255,94,98,0.5)] py-3 px-2 text-center md:min-w-[160px] min-w-[108px] inline-block text-white md:text-2xl text-sm " +className}>{children}</a>
  )
}
