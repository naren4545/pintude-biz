"use client"
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import img from '../../assests/industrial_2134177.png';
import img2 from '../../assests/prototype_2421341.png';
import one from "../../assests/Verified.svg";
import two from "../../assests/Location.svg";
interface HeroSectionProps {
    promoImg: string;              
    businessName: string;            
    Biz_Category: string;           
    Biz_Subcategory: string;         
    businessInfo: string;            
    tags: string[]; 
    onClick:string    ;             
  }

  export default function HeroSection({
    promoImg,
    businessName,
    Biz_Category,
    Biz_Subcategory,
    businessInfo,
    tags,
    onClick
  }: HeroSectionProps) {

  console.log(tags)
  return (
    <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-4 col-span-5  text-center lg:text-left">
            <img src={promoImg} className="lg:mx-0 mx-auto" alt="buisness image" />
          </div>
          <div className="lg:col-span-6 col-span-7 ">
            <div>
              <h1 className="md:text-5xl pb-6 text-xl font-semibold flex justify-between">
                {businessName}
                <span>
                  <svg
                    className="inline md:w-auto w-5"
                    width="34"
                    height="32"
                    viewBox="0 0 34 32"
                    
                    fill="none"
                  >
                    <path
                      d="M34 15.9924L30.2291 11.742L30.7545 6.11562L25.1755 4.86192L22.2545 0L17 2.2322L11.7455 0L8.82454 4.86192L3.24545 6.10033L3.77091 11.7267L0 15.9924L3.77091 20.2427L3.24545 25.8844L8.82454 27.1381L11.7455 32L17 29.7525L22.2545 31.9847L25.1755 27.1228L30.7545 25.8691L30.2291 20.2427L34 15.9924ZM13.9091 23.6369L7.72727 17.5213L9.90636 15.3655L13.9091 19.3101L24.0936 9.23459L26.2727 11.4056L13.9091 23.6369Z"
                      fill="#008CBB"
                    />
                  </svg>
                </span>{" "}
              </h1>
              <p className="lg:text-base text-sm font-medium mb-3"><Image src={img} className="mr-2 inline lg:w-auto w-5" alt="biz-category"/>{Biz_Category}</p>
              <p className="lg:text-base text-sm  font-medium mb-6"><Image src={img2} className="mr-2 inline lg:w-auto w-5" alt="Biz_Subcategory"/>{Biz_Subcategory}</p>
<div className='lg:block hidden'>
              <p className='pb-5 text-2xl'>
               {businessInfo}
              </p>
             
              <div className="shadow-xl p-4 rounded-xl my-6">
              <div className="flex flex-wrap justify-center gap-4">
  {tags.map((tag) => (
    <div
      key={tag}
      className=" bg-[#F8F9DE] border-[#DCE35B] border-[1px] text-2xl font-medium text-center rounded-[10PX] px-6 py-1 shadow-md"
    >
      {tag}
    </div>
  ))}
  </div>
</div>
<div className="cta  md:text-center block md:hidden md:p-4 lg:text-right">
                <a className="cursor-pointer rounded-[41px] my-5  py-3 px-8 text-[#13A8DA] border-[#13A8DA] border-[3px] font-bold text-2xl  inline-block " href={"tel:"+onClick}>
                <svg className='inline mr-3 md:w-auto w-4' width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.80006 0.700719L4.73706 0.116719C5.37634 -0.0757149 6.06379 -0.0290248 6.67117 0.248079C7.27856 0.525184 7.7644 1.01378 8.03806 1.62272L9.39606 4.64272C9.63176 5.16664 9.69746 5.75123 9.58393 6.31439C9.4704 6.87756 9.18334 7.39103 8.76306 7.78272L6.69606 9.70872C6.41906 9.97172 6.62906 10.9967 7.64106 12.7507C8.65406 14.5057 9.43706 15.1997 9.79806 15.0917L12.5061 14.2637C13.055 14.0958 13.6427 14.1039 14.1868 14.2868C14.7308 14.4697 15.2041 14.8183 15.5401 15.2837L17.4701 17.9587C17.8599 18.4989 18.0404 19.1622 17.978 19.8254C17.9157 20.4886 17.6147 21.1067 17.1311 21.5647L15.6391 22.9777C15.1574 23.4338 14.5634 23.754 13.9176 23.9057C13.2718 24.0573 12.5974 24.0349 11.9631 23.8407C8.83706 22.8837 5.94206 20.0437 3.23906 15.3607C0.530064 10.6707 -0.492936 6.71472 0.220064 3.48272C0.363869 2.83147 0.678754 2.23036 1.13226 1.74135C1.58577 1.25233 2.16148 0.893114 2.80006 0.700719Z" fill="#13A8DA"/>
</svg>

                  Call Paints
                </a>
                </div>

              </div>
            </div>


            <div className="flex flex-col lg:flex-row gap-3 max-w-[190px]  mt-7 lg:hidden ">
          <div className="flex border-[#F55256] rounded-lg  border-2 gap-4 p-3 justify-center items-center text-center">
            <Image className='w-6' src={one} alt="person" />

            <p className="text-[#F55256] text-xs font-semibold">
              Verified Business <br />
              Profile
            </p>
          </div>

          <div className="flex justify-center gap-4 border-[#F55256] rounded-lg border-2 p-3 items-center text-center">
            <Image className='w-6' src={two} alt="location" />
<div>
            <p className="text-[#E78B01] text-[8px] leading-2 font-semibold">
              Verify Your Location and</p>
              <p className="text-[#E78B01] leading-2 text-[8px] font-semibold">
              Earn This Badge Now! </p>
             <p className='text-[8px] text-[#E78B01]  leading-2'> <span className="underline font-bold">Verify Now</span>
            </p>
            </div>
          </div>
        </div>


          </div>
          <div className="col-span-12 lg:col-span-2 pt-9">


          <div className='lg:hidden block'>
              <p className='pb-5 text-sm'>
               {businessInfo}
              </p>
             
              <div className="shadow-xl p-4 rounded-xl mb-5">
              <div className="flex flex-wrap justify-center md:gap-4 gap-2">
  {tags.map((tag) => (
    <div
      key={tag}
      className=" bg-[#F8F9DE] border-[#DCE35B] border-[1px] md:text-2xl text-sm font-medium text-center rounded-[10px] px-6 py-1 shadow-md"
    >
      {tag}
    </div>
  ))}
  </div>
</div>


              </div>
            <div className="flex lg:flex-col md:gap-6 gap-3 items-center  justify-center">
              <p className="">
                <Button className="" href="/">
                  <svg
                    width="24"
                    className="inline mr-2 md:w-auto w-4"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M24 9.6H20.8V6.4H19.2V9.6H16V11.2H19.2V14.4H20.8V11.2H24V9.6ZM8 1.6C8.79113 1.6 9.56448 1.8346 10.2223 2.27412C10.8801 2.71365 11.3928 3.33836 11.6955 4.06927C11.9983 4.80017 12.0775 5.60444 11.9231 6.38036C11.7688 7.15629 11.3878 7.86902 10.8284 8.42843C10.269 8.98784 9.55628 9.3688 8.78036 9.52314C8.00444 9.67748 7.20017 9.59827 6.46927 9.29552C5.73836 8.99277 5.11365 8.48008 4.67412 7.82228C4.2346 7.16448 4 6.39113 4 5.6C4 4.53913 4.42143 3.52172 5.17157 2.77157C5.92172 2.02143 6.93913 1.6 8 1.6ZM8 0C6.89242 0 5.80972 0.328434 4.88881 0.94377C3.96789 1.55911 3.25013 2.43371 2.82627 3.45697C2.40242 4.48024 2.29153 5.60621 2.5076 6.69251C2.72368 7.7788 3.25703 8.77662 4.0402 9.5598C4.82338 10.343 5.8212 10.8763 6.90749 11.0924C7.99379 11.3085 9.11976 11.1976 10.143 10.7737C11.1663 10.3499 12.0409 9.63211 12.6562 8.71119C13.2716 7.79028 13.6 6.70758 13.6 5.6C13.6 4.11479 13.01 2.69041 11.9598 1.6402C10.9096 0.589998 9.48521 0 8 0ZM16 22.4H14.4V18.4C14.4 17.3391 13.9786 16.3217 13.2284 15.5716C12.4783 14.8214 11.4609 14.4 10.4 14.4H5.6C4.53913 14.4 3.52172 14.8214 2.77157 15.5716C2.02143 16.3217 1.6 17.3391 1.6 18.4V22.4H0V18.4C0 16.9148 0.589998 15.4904 1.6402 14.4402C2.69041 13.39 4.11479 12.8 5.6 12.8H10.4C11.8852 12.8 13.3096 13.39 14.3598 14.4402C15.41 15.4904 16 16.9148 16 18.4V22.4Z"
                      fill="white"
                    />
                  </svg>
                  Follow
                </Button>
              </p>

              <p>
                <Button className="" href="/">
                  <svg
                    width="24"
                    className="inline mr-2 md:w-auto w-4"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.66667 14H14V12.6667H4.66667V14ZM4.66667 10H19.3333V8.66667H4.66667V10ZM4.66667 6H19.3333V4.66667H4.66667V6ZM0 22.7693V2.15467C0 1.54044 0.205778 1.028 0.617333 0.617333C1.02889 0.206667 1.54089 0.000888889 2.15333 0H21.8467C22.46 0 22.972 0.205778 23.3827 0.617333C23.7933 1.02889 23.9991 1.54133 24 2.15467V16.5133C24 17.1267 23.7942 17.6391 23.3827 18.0507C22.9711 18.4622 22.4591 18.6676 21.8467 18.6667H4.10267L0 22.7693ZM3.53333 17.3333H21.8467C22.0511 17.3333 22.2391 17.248 22.4107 17.0773C22.5822 16.9067 22.6676 16.7187 22.6667 16.5133V2.15333C22.6667 1.94889 22.5813 1.76089 22.4107 1.58933C22.24 1.41778 22.052 1.33244 21.8467 1.33333H2.15333C1.94889 1.33333 1.76089 1.41867 1.58933 1.58933C1.41778 1.76 1.33244 1.948 1.33333 2.15333V19.5267L3.53333 17.3333Z"
                      fill="white"
                    />
                  </svg>
                  Chat &nbsp;&nbsp;
                </Button>
              </p>



              <p>
                <Button className="" href="/">
                <svg width="24"   className="inline mr-2 md:w-auto w-4" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7.5C12 7.17917 11.7375 6.91667 11.4167 6.91667H8.395L8.79167 5.06167V4.9275C8.79167 4.74667 8.71583 4.58333 8.59917 4.46083L8.13833 4L5.25667 6.88167C5.09917 7.03917 5 7.26083 5 7.5V11.2917C5 11.7758 5.39083 12.1667 5.875 12.1667H9.8125C10.1742 12.1667 10.4833 11.945 10.6175 11.6358L11.9358 8.55C11.9767 8.45083 12 8.34 12 8.22917V7.5ZM10.8333 8.15917L9.62 11H6.16667V7.6225L7.2925 6.49667L6.96 8.08333H10.8333V8.15917ZM18.125 9.83333H14.1875C13.8258 9.83333 13.5167 10.055 13.3825 10.3642L12.0642 13.45C12.0233 13.5492 12 13.66 12 13.7708V14.5C12 14.8208 12.2625 15.0833 12.5833 15.0833H15.605L15.2083 16.9383V17.0783C15.2083 17.2592 15.2842 17.4167 15.4008 17.545L15.8617 18L18.7433 15.1183C18.9008 14.9608 19 14.7392 19 14.5V10.7083C19 10.2242 18.6092 9.83333 18.125 9.83333ZM17.8333 14.3775L16.7075 15.5033L17.04 13.9167H13.1667V13.8408L14.38 11H17.8333V14.3775Z" fill="white"/>
<path d="M4.017 16.3432C4.1727 16.4996 4.292 16.6883 4.36641 16.896C4.44082 17.1037 4.46851 17.3253 4.4475 17.5449C4.34182 18.5614 4.14196 19.5658 3.8505 20.5453C5.943 20.0608 7.221 19.4997 7.8015 19.2056C8.13076 19.0389 8.50993 18.9993 8.8665 19.0946C9.88845 19.3682 10.9421 19.5054 12 19.5027C17.994 19.5027 22.5 15.2916 22.5 10.5014C22.5 5.71128 17.994 1.50021 12 1.50021C6.006 1.50021 1.5 5.71279 1.5 10.5014C1.5 12.7037 2.4255 14.747 4.017 16.3432ZM3.2775 22.2015C2.92209 22.2719 2.56554 22.3364 2.208 22.3951C1.908 22.4431 1.68 22.131 1.7985 21.852C1.93133 21.5377 2.0534 21.219 2.1645 20.8964L2.169 20.8814C2.541 19.8012 2.844 18.559 2.955 17.4024C1.1145 15.5571 0 13.1418 0 10.5014C0 4.70165 5.373 0 12 0C18.627 0 24 4.70165 24 10.5014C24 16.3012 18.627 21.0029 12 21.0029C10.8114 21.0055 9.62768 20.8512 8.4795 20.5438C7.6995 20.9384 6.021 21.657 3.2775 22.2015Z" fill="white"/>
</svg>
                  Feedback
                </Button>
              </p>
            </div>
          </div>
        </div>)
  
}
