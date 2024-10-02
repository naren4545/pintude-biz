import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string; // Optional prop
}

export default function Button({ children, href, className = "" }: ButtonProps) {
  return (
   <a href={href} className={"bg-[#F6830E] py-4 px-8 text-center min-w-[160px] text-white " +className}>{children}</a>
  )
}
