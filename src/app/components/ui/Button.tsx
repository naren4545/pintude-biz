import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  colors:{
    primary: string,
  secondary: string,
  tertiary: string,
  } // Optional prop
}

export default function Button({colors={primary: "#FF5E62",secondary: "#FF5E62",tertiary: "#FF5E62"}, children, href, className = "" }: ButtonProps) {
  return (
   <a href={href} style={{background:colors.primary}} className={"bg-primary hover:bg-buttonHover  rounded-lg shadow-[0px_8px_15px_rgba(255,94,98,0.5)] py-3 px-2 text-center md:min-w-[160px] min-w-[108px] inline-block text-white md:text-2xl text-sm " +className}>{children}</a>
  )
}
