import React from 'react'
import Button from '../ui/Button'
import logo from '../../assests/Group 4.png'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className='bg-[#1BABDB]'>
      <div className='max-w-[1440px] mx-auto px-4 pt-9 text-white'>
<div className='max-w-[1200px] mb-9 mx-auto px-7 py-9 bg-[#00506B26]'>
<div className='flex flex-col lg:flex-row items-center'>
    <div className='lg:w-[70%] w-full'>
        <h2 className='font-semibold text-4xl'>Connect & Share with Your Network!</h2>
        <p>Let others know about this amazing platform! Easily share the page with 
        your friends and network through your favorite social media channels.</p>
    </div>
    <div className='lg:w-[30%] w-full'>
      <div className='lg:mt-0 mt-5'>  <Button><svg className='inline mr-2' width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5288 15.7415L23.7243 8.66438L23.8155 8.56038C23.9496 8.37871 24.0141 8.15501 23.9974 7.92985C23.9807 7.70469 23.8838 7.49298 23.7243 7.33312L16.5288 0.259182L16.4296 0.174378C15.8536 -0.257643 15.0055 0.158377 15.0055 0.924814V4.33298L14.6455 4.35698C8.94443 4.8082 5.60507 8.41637 4.80823 14.9607C4.70583 15.8007 5.66907 16.3272 6.2931 15.7703C8.58281 13.7254 10.9493 12.455 13.4054 11.9461C13.7991 11.864 14.1948 11.8016 14.5927 11.7589L15.0055 11.7221V15.0759L15.0135 15.2071C15.1095 15.9319 15.988 16.2728 16.5288 15.7415ZM14.7623 5.95225L16.6056 5.82905V2.57609L22.1195 7.99715L16.6056 13.4214V9.97005L14.4359 10.1653H14.4231C11.6982 10.4581 9.12684 11.5493 6.69952 13.3686C7.17635 11.2261 7.99079 9.61483 9.06124 8.46118C10.3893 7.02911 12.2454 6.15386 14.7623 5.95225ZM4.00019 1.60005C2.93928 1.60005 1.92181 2.02149 1.17163 2.77168C0.421448 3.52186 0 4.53932 0 5.60024V18.4009C0 19.4618 0.421448 20.4792 1.17163 21.2294C1.92181 21.9796 2.93928 22.401 4.00019 22.401H16.8008C17.8617 22.401 18.8792 21.9796 19.6294 21.2294C20.3796 20.4792 20.801 19.4618 20.801 18.4009V16.8008C20.801 16.5886 20.7167 16.3851 20.5667 16.2351C20.4166 16.085 20.2131 16.0007 20.001 16.0007C19.7888 16.0007 19.5853 16.085 19.4353 16.2351C19.2852 16.3851 19.2009 16.5886 19.2009 16.8008V18.4009C19.2009 19.0374 18.9481 19.6479 18.4979 20.098C18.0478 20.5481 17.4374 20.801 16.8008 20.801H4.00019C3.36364 20.801 2.75316 20.5481 2.30305 20.098C1.85295 19.6479 1.60008 19.0374 1.60008 18.4009V5.60024C1.60008 4.96369 1.85295 4.35321 2.30305 3.9031C2.75316 3.45299 3.36364 3.20012 4.00019 3.20012H8.80042C9.01261 3.20012 9.2161 3.11583 9.36614 2.9658C9.51617 2.81576 9.60046 2.61227 9.60046 2.40008C9.60046 2.1879 9.51617 1.98441 9.36614 1.83437C9.2161 1.68434 9.01261 1.60005 8.80042 1.60005H4.00019Z" fill="white"/>
</svg>
Share Now</Button></div>
        </div>

</div>

</div>
<p className='text-center text-xl max-w-[597px] mx-auto pb-8'>If you notice any issues, inappropriate content, or violations 
of our guidelines, please report them to us. </p>



<div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-8">
          
          <div className=" md:col-span-1">
            <Image src={logo} alt='logo'/>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-medium mb-2">Create Business Account</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-white text-sm">About</a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">Sign Up</a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">Pricing</a>
              </li>
            </ul>
          </div>

         
          <div className='max-w-[200px] w-full'>
            <h3 className="text-white text-lg font-medium mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-white text-sm">Community</a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">Blog</a>
              </li>
            </ul>
          </div>

         
          <div className='max-w-[200px] w-full'>
            <h3 className="text-white text-lg font-medium mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-white text-sm">Contact</a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">Terms and Conditions</a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>



      </div>
      <div className='pt-5'>
        <hr className='border-[#179DCA]'/>
      <div className="grid max-w-[1440px] py-3 px-3 mx-auto grid-cols-1 md:grid-cols-1 md:text-center lg:grid-cols-2 lg:text-left">
            <div className="cell medium-6 flex items-center">
              <div className="copyright w-full">
                <p className="font-light text-xs text-center md:text-left text-white">
                  {" "}
                  Copyright © 2024 Pintude, All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="cell medium-6 p-4 lg:p-0">
              <div className="cta flex justify-center md:justify-end  md:text-center  lg:text-right">
                <a href="">
                <svg className="mr-4 inline" width="43" height="43" viewBox="0 0 43 43" fill="none" >
<g filter="url(#filter0_d_2696_280)">
<circle cx="21.0486" cy="21.0486" r="14.0486" fill="#13A8DA"/>
</g>
<path d="M20.9978 18.3322C19.5289 18.3322 18.3301 19.531 18.3301 21C18.3301 22.469 19.5289 23.6678 20.9978 23.6678C22.4668 23.6678 23.6656 22.469 23.6656 21C23.6656 19.531 22.4668 18.3322 20.9978 18.3322ZM28.9991 21C28.9991 19.8953 29.0091 18.8005 28.9471 17.6978C28.885 16.4169 28.5928 15.2801 27.6562 14.3435C26.7176 13.4049 25.5829 13.1147 24.302 13.0526C23.1973 12.9906 22.1026 13.0006 20.9999 13.0006C19.8951 13.0006 18.8004 12.9906 17.6977 13.0526C16.4168 13.1147 15.2801 13.4069 14.3435 14.3435C13.4049 15.2821 13.1147 16.4169 13.0526 17.6978C12.9906 18.8025 13.0006 19.8973 13.0006 21C13.0006 22.1027 12.9906 23.1995 13.0526 24.3022C13.1147 25.5831 13.4069 26.7199 14.3435 27.6565C15.2821 28.5951 16.4168 28.8853 17.6977 28.9474C18.8024 29.0094 19.8971 28.9994 20.9999 28.9994C22.1046 28.9994 23.1993 29.0094 24.302 28.9474C25.5829 28.8853 26.7196 28.5931 27.6562 27.6565C28.5948 26.7179 28.885 25.5831 28.9471 24.3022C29.0111 23.1995 28.9991 22.1047 28.9991 21ZM20.9978 25.1048C18.7264 25.1048 16.8932 23.2715 16.8932 21C16.8932 18.7285 18.7264 16.8952 20.9978 16.8952C23.2693 16.8952 25.1025 18.7285 25.1025 21C25.1025 23.2715 23.2693 25.1048 20.9978 25.1048ZM25.2707 17.6858C24.7403 17.6858 24.312 17.2575 24.312 16.7271C24.312 16.1968 24.7403 15.7685 25.2707 15.7685C25.801 15.7685 26.2293 16.1968 26.2293 16.7271C26.2294 16.853 26.2048 16.9778 26.1566 17.0942C26.1085 17.2105 26.0379 17.3163 25.9489 17.4053C25.8598 17.4944 25.7541 17.565 25.6377 17.6131C25.5213 17.6612 25.3966 17.6859 25.2707 17.6858Z" fill="white"/>
<defs>
<filter id="filter0_d_2696_280" x="0" y="0" width="42.0977" height="42.0972" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2696_280"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2696_280"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2696_280" result="shape"/>
</filter>
</defs>
</svg>


                </a>

                <a href="https://www.linkedin.com/company/pintude/about/" target="_blank">
                <svg className="mr-4 inline"  width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2696_277)">
<circle cx="21.1463" cy="21.0486" r="14.0486" fill="#13A8DA"/>
</g>
<path d="M26.766 15.3397C26.0288 14.5953 25.1507 14.005 24.1831 13.6033C23.2154 13.2017 22.1775 12.9966 21.1298 13C16.7399 13 13.162 16.5779 13.162 20.9679C13.162 22.3749 13.5318 23.7418 14.2233 24.9478L13.0977 29.0804L17.3188 27.9709C18.4846 28.6061 19.7951 28.9438 21.1298 28.9438C25.5198 28.9438 29.0977 25.3659 29.0977 20.9759C29.0977 18.8453 28.2695 16.8433 26.766 15.3397ZM21.1298 27.593C19.9399 27.593 18.774 27.2714 17.7529 26.6684L17.5117 26.5237L15.0032 27.183L15.6705 24.7387L15.5097 24.4895C14.8484 23.4339 14.4974 22.2135 14.4967 20.9679C14.4967 17.3176 17.4715 14.3428 21.1218 14.3428C22.8906 14.3428 24.5549 15.0342 25.8012 16.2885C26.4184 16.9026 26.9074 17.6332 27.2401 18.4379C27.5727 19.2425 27.7422 20.1052 27.7389 20.9759C27.7549 24.6262 24.7801 27.593 21.1298 27.593ZM24.764 22.6402C24.563 22.5438 23.5821 22.0613 23.4052 21.989C23.2203 21.9247 23.0916 21.8925 22.9549 22.0855C22.8183 22.2865 22.4404 22.7367 22.3278 22.8654C22.2152 23.0021 22.0946 23.0181 21.8936 22.9136C21.6926 22.8171 21.0494 22.6 20.2936 21.9247C19.6987 21.394 19.3047 20.7428 19.1841 20.5418C19.0715 20.3407 19.168 20.2362 19.2725 20.1317C19.361 20.0433 19.4735 19.8985 19.57 19.786C19.6665 19.6734 19.7067 19.585 19.771 19.4563C19.8353 19.3196 19.8032 19.2071 19.7549 19.1106C19.7067 19.0141 19.3047 18.0332 19.1439 17.6312C18.9831 17.2453 18.8142 17.2935 18.6936 17.2855H18.3077C18.171 17.2855 17.962 17.3337 17.7771 17.5347C17.6002 17.7357 17.0856 18.2181 17.0856 19.199C17.0856 20.1799 17.8012 21.1287 17.8977 21.2573C17.9941 21.394 19.3047 23.4041 21.2987 24.2644C21.773 24.4734 22.1429 24.594 22.4323 24.6825C22.9067 24.8352 23.3409 24.8111 23.6866 24.7629C24.0725 24.7066 24.8685 24.2804 25.0293 23.8141C25.1982 23.3478 25.1982 22.9538 25.1419 22.8654C25.0856 22.7769 24.965 22.7367 24.764 22.6402Z" fill="white"/>
<defs>
<filter id="filter0_d_2696_277" x="0.0976562" y="0" width="42.0977" height="42.0972" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2696_277"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2696_277"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2696_277" result="shape"/>
</filter>
</defs>
</svg>


                </a>

                <a   href="">
                <svg className="mr-4 inline" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2690_74)">
<circle cx="21.2439" cy="21.0486" r="14.0486" fill="#13A8DA"/>
</g>
<path d="M16.5009 14.9386C16.5006 15.4525 16.3263 15.9452 16.0162 16.3084C15.7061 16.6716 15.2856 16.8755 14.8473 16.8752C14.4089 16.875 13.9886 16.6706 13.6788 16.307C13.369 15.9435 13.1951 15.4505 13.1953 14.9366C13.1955 14.4228 13.3699 13.93 13.68 13.5668C13.9901 13.2036 14.4106 12.9997 14.8489 13C15.2873 13.0003 15.7076 13.2046 16.0174 13.5682C16.3272 13.9318 16.5011 14.4247 16.5009 14.9386ZM16.5505 18.31H13.2449V30.4394H16.5505V18.31ZM21.7732 18.31H18.4842V30.4394H21.7402V24.0744C21.7402 20.5286 25.682 20.1992 25.682 24.0744V30.4394H28.9463V22.7568C28.9463 16.7793 23.112 17.0021 21.7402 19.9376L21.7732 18.31Z" fill="white"/>
<defs>
<filter id="filter0_d_2690_74" x="0.195312" y="0" width="42.0977" height="42.0972" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2690_74"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2690_74"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2690_74" result="shape"/>
</filter>
</defs>
</svg>


                </a>
                <a href="https://www.linkedin.com/company/pintude/about/" target="_blank">
                <svg className="mr-4 inline"  width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2690_71)">
<circle cx="21.3416" cy="21.0486" r="14.0486" fill="#13A8DA"/>
</g>
<path d="M23.0777 22.1412H25.1437L25.9701 18.266H23.0777V16.3284C23.0777 15.3306 23.0777 14.3908 24.7305 14.3908H25.9701V11.1356C25.7006 11.094 24.6834 11 23.6091 11C21.3654 11 19.7721 12.6053 19.7721 15.5534V18.266H17.293V22.1412H19.7721V30.3761H23.0777V22.1412Z" fill="white"/>
<defs>
<filter id="filter0_d_2690_71" x="0.292969" y="0" width="42.0977" height="42.0972" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2690_71"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2690_71"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2690_71" result="shape"/>
</filter>
</defs>
</svg>



                </a>

                <a href="https://www.linkedin.com/company/pintude/about/" target="_blank">
                <svg className="mr-4 inline" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2690_68)">
<circle cx="21.4392" cy="21.0486" r="14.0486" fill="#13A8DA"/>
</g>
<path d="M29.6787 14.9376C29.0424 15.2767 28.3565 15.4995 27.6458 15.6061C28.373 15.0926 28.9349 14.2788 29.1994 13.3003C28.5135 13.7847 27.7532 14.1238 26.9516 14.3176C26.2987 13.4844 25.3815 13 24.3402 13C22.3982 13 20.8115 14.8601 20.8115 17.1562C20.8115 17.4856 20.8446 17.8053 20.9024 18.1056C17.9605 17.9312 15.3408 16.2746 13.5972 13.7654C13.2914 14.3757 13.1178 15.0926 13.1178 15.8483C13.1178 17.2918 13.7376 18.5706 14.6962 19.2972C14.1095 19.2972 13.5641 19.1035 13.0848 18.8128V18.8419C13.0848 20.857 14.3078 22.5427 15.9276 22.9206C15.4076 23.0881 14.8616 23.1113 14.3326 22.9884C14.5571 23.8143 14.9967 24.5369 15.5896 25.0548C16.1825 25.5726 16.8989 25.8596 17.6382 25.8754C16.3851 27.0385 14.8318 27.6671 13.2335 27.658C12.9526 27.658 12.6716 27.6386 12.3906 27.5999C13.9608 28.7818 15.8284 29.4697 17.8283 29.4697C24.3402 29.4697 27.9185 23.1337 27.9185 17.6406C27.9185 17.4565 27.9185 17.2821 27.9102 17.098C28.6044 16.5168 29.1994 15.7805 29.6787 14.9376Z" fill="white"/>
<defs>
<filter id="filter0_d_2690_68" x="0.390625" y="0" width="42.0977" height="42.0972" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2690_68"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2690_68"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2690_68" result="shape"/>
</filter>
</defs>
</svg>




                </a>
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}
