'use client'

import Image from 'next/image';
interface HeaderProps {
  headerContent: string;
  onClick:string
}
export default function Header({headerContent,onClick}: HeaderProps) {
 
  


  return (
    <header
      className={
       
        " max-w-[1440px] relative text-center  mx-auto lg:z-10 w-full lg:bg-transparent "
      }
    >
      <div className="header-wrapper">
        <div className="grid-container p-3  lg:p-5">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-[70%]">
              <div className="logo">
                <p className='lg:text-[28px] lg:mb-0 mb-5 text-xs py-7  p-4 bg-[#13A8DA]  mx-auto lg:mx-0 md:mb-0 text-white w-fit text-center lg:text-left  font-bold rounded-[10px] shadow-xl  font-p'>{headerContent}</p>
              </div>
            </div>
            <div className="w-full lg:w-[30%]">
              <div className="cta  md:text-center hidden md:block md:p-4 lg:text-right">
                <a className="cursor-pointer call button py-3 px-8 text-[#13A8DA] border-[#13A8DA] border-[3px]  font-bold text-2xl  rounded-[41px]  inline-block " href={"tel:"+onClick}>
                <svg className='inline mr-3' width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.80006 0.700719L4.73706 0.116719C5.37634 -0.0757149 6.06379 -0.0290248 6.67117 0.248079C7.27856 0.525184 7.7644 1.01378 8.03806 1.62272L9.39606 4.64272C9.63176 5.16664 9.69746 5.75123 9.58393 6.31439C9.4704 6.87756 9.18334 7.39103 8.76306 7.78272L6.69606 9.70872C6.41906 9.97172 6.62906 10.9967 7.64106 12.7507C8.65406 14.5057 9.43706 15.1997 9.79806 15.0917L12.5061 14.2637C13.055 14.0958 13.6427 14.1039 14.1868 14.2868C14.7308 14.4697 15.2041 14.8183 15.5401 15.2837L17.4701 17.9587C17.8599 18.4989 18.0404 19.1622 17.978 19.8254C17.9157 20.4886 17.6147 21.1067 17.1311 21.5647L15.6391 22.9777C15.1574 23.4338 14.5634 23.754 13.9176 23.9057C13.2718 24.0573 12.5974 24.0349 11.9631 23.8407C8.83706 22.8837 5.94206 20.0437 3.23906 15.3607C0.530064 10.6707 -0.492936 6.71472 0.220064 3.48272C0.363869 2.83147 0.678754 2.23036 1.13226 1.74135C1.58577 1.25233 2.16148 0.893114 2.80006 0.700719Z" fill="#13A8DA"/>
</svg>

                  Call Paints
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </header>
  );
}
