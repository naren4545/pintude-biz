import Image from "next/image";
import Bcard from "../../assests/bizCard.png";
import Button from "../ui/Button";
interface BuisnessCardProps {
  digitalBuisnessCard: string;
  onClick: string;
  colors:{
    primary: string,
  secondary: string,
  tertiary: string,
  }
}
export default function BuisnessCard({
  digitalBuisnessCard,
  onClick,
  colors
}: BuisnessCardProps) {
  return (
    <section className="py-10">
      <div className="max-w-[1440px]  mx-auto p-3">
        <div className="flex flex-col gap-7  items-center lg:flex-row">
          <div className="w-full lg:w-[60%]">
            <Image className="lg:block hidden" src={Bcard} alt="buisess card" />
          </div>
          <div className="w-full lg:w-[40%] mt-7 lg:mt-0 lg:text-left text-center">
            <h2 className="font-m lg:text-[40px] font-noto text-2xl font-bold lg:leading-[50px]">
            Love what this  <span className="text-primary" style={{color:colors.primary}}>business offers?</span>{" "}
              
            </h2>

            <p className="font-m lg:text-2xl text-sm">
            Help them grow by sharing their digital business card with your friends and family.
            </p>

            <div>
              <Image className="lg:hidden " src={Bcard} alt="buisess card" />
            </div>
            <div className="mt-7">
              <div className="flex lg:justify-normal justify-center items-center gap-12 md:flex-row md:gap-3">
                <div>
                  <Button  colors={colors} href="/" className=" px-5 lg:min-w-[200px]">
                    <svg
                      className="inline mr-2 "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C12.222 0 12.435 0.0882058 12.592 0.245213C12.749 0.40222 12.8372 0.615168 12.8372 0.837209V13.0861L14.7126 10.8971C14.7841 10.8136 14.8714 10.7449 14.9695 10.6951C15.0675 10.6453 15.1744 10.6153 15.2841 10.6068C15.3938 10.5983 15.504 10.6114 15.6086 10.6456C15.7132 10.6797 15.81 10.734 15.8936 10.8056C15.9771 10.8771 16.0458 10.9644 16.0956 11.0625C16.1454 11.1605 16.1754 11.2675 16.1839 11.3771C16.1924 11.4868 16.1793 11.5971 16.1451 11.7016C16.111 11.8062 16.0567 11.903 15.9851 11.9866L12.6363 15.8936C12.5577 15.9855 12.4601 16.0593 12.3503 16.1099C12.2404 16.1605 12.1209 16.1867 12 16.1867C11.8791 16.1867 11.7596 16.1605 11.6497 16.1099C11.5399 16.0593 11.4423 15.9855 11.3637 15.8936L8.01488 11.9866C7.94335 11.903 7.88897 11.8062 7.85485 11.7016C7.82074 11.5971 7.80755 11.4868 7.81605 11.3771C7.82455 11.2675 7.85457 11.1605 7.90439 11.0625C7.95421 10.9644 8.02286 10.8771 8.10642 10.8056C8.18998 10.734 8.28681 10.6797 8.39138 10.6456C8.49595 10.6114 8.60622 10.5983 8.71589 10.6068C8.82556 10.6153 8.93248 10.6453 9.03054 10.6951C9.12861 10.7449 9.21591 10.8136 9.28744 10.8971L11.1628 13.085V0.837209C11.1628 0.615168 11.251 0.40222 11.408 0.245213C11.565 0.0882058 11.778 0 12 0ZM6.41414 7.81619C6.63618 7.815 6.8496 7.90207 7.00744 8.05824C7.16529 8.21441 7.25463 8.42689 7.25581 8.64893C7.257 8.87097 7.16993 9.08439 7.01376 9.24224C6.85759 9.40008 6.64511 9.48942 6.42307 9.49061C5.20298 9.4973 4.33786 9.52856 3.68037 9.64912C3.04856 9.76633 2.6813 9.95275 2.41005 10.224C2.10084 10.5332 1.89991 10.9674 1.7894 11.7868C1.67665 12.6296 1.67442 13.747 1.67442 15.3488V16.4651C1.67442 18.0681 1.67665 19.1855 1.7894 20.0283C1.89991 20.8476 2.10195 21.2807 2.41005 21.5911C2.71926 21.8992 3.15237 22.1001 3.97284 22.2106C4.81451 22.3245 5.93302 22.3256 7.53488 22.3256H16.4651C18.067 22.3256 19.1844 22.3245 20.0283 22.2106C20.8476 22.1001 21.2807 21.8992 21.59 21.59C21.8992 21.2807 22.1001 20.8476 22.2106 20.0283C22.3233 19.1855 22.3256 18.0681 22.3256 16.4651V15.3488C22.3256 13.747 22.3233 12.6296 22.2106 11.7857C22.1001 10.9674 21.898 10.5332 21.59 10.224C21.3176 9.95275 20.9514 9.76633 20.3196 9.64912C19.6621 9.52856 18.797 9.4973 17.5769 9.49061C17.467 9.49002 17.3582 9.46778 17.2569 9.42517C17.1555 9.38255 17.0636 9.32039 16.9862 9.24224C16.9089 9.16408 16.8477 9.07146 16.8062 8.96966C16.7647 8.86786 16.7436 8.75887 16.7442 8.64893C16.7448 8.53899 16.767 8.43023 16.8096 8.32889C16.8522 8.22753 16.9144 8.13557 16.9926 8.05824C17.0707 7.98091 17.1633 7.91974 17.2651 7.87821C17.3669 7.83667 17.4759 7.8156 17.5859 7.81619C18.7937 7.82288 19.7994 7.85191 20.6221 8.0026C21.4683 8.15888 22.1883 8.4547 22.7743 9.04074C23.4463 9.71163 23.7343 10.5589 23.8705 11.5635C24 12.5302 24 13.7615 24 15.2874V16.5265C24 18.0536 24 19.2837 23.8705 20.2515C23.7343 21.2562 23.4463 22.1023 22.7743 22.7743C22.1023 23.4463 21.2562 23.7343 20.2515 23.8705C19.2837 24 18.0525 24 16.5265 24H7.47349C5.94754 24 4.71628 24 3.74847 23.8705C2.74381 23.7354 1.89767 23.4463 1.22567 22.7743C0.553675 22.1023 0.265674 21.2562 0.130605 20.2515C-1.66339e-08 19.2837 0 18.0525 0 16.5265V15.2874C0 13.7615 -1.66339e-08 12.5302 0.130605 11.5624C0.264558 10.5578 0.554791 9.71163 1.22567 9.03963C1.81172 8.4547 2.53172 8.15777 3.37786 8.0026C4.20056 7.85191 5.20633 7.82288 6.41414 7.81619Z"
                        fill="white"
                      />
                    </svg>{" "}
                    Download
                  </Button>
                </div>
                <div>
                  <a
                    href="/"
                    style={{ border: "1px solid", borderColor: colors.primary,color:colors.primary }}
                    className={
                      "text-primary lg:min-w-[180px] border-solid py-4 px-8 text-center inline-block bg-white  md:text-2xl text-sm rounded-[10px]"
                    }
                  >
                    <svg
                      className="inline mr-2 "
                      width="20"
                      height="23"
                      viewBox="0 0 20 23"
                      fill="none"
                    >
                      <path
                        d="M16.6667 22.2222C15.7407 22.2222 14.9537 21.8981 14.3056 21.25C13.6574 20.6019 13.3333 19.8148 13.3333 18.8889C13.3333 18.7778 13.3611 18.5185 13.4167 18.1111L5.61111 13.5556C5.31482 13.8333 4.97222 14.0511 4.58333 14.2089C4.19444 14.3667 3.77778 14.4452 3.33333 14.4444C2.40741 14.4444 1.62037 14.1204 0.972222 13.4722C0.324074 12.8241 0 12.037 0 11.1111C0 10.1852 0.324074 9.39815 0.972222 8.75C1.62037 8.10185 2.40741 7.77778 3.33333 7.77778C3.77778 7.77778 4.19444 7.85667 4.58333 8.01444C4.97222 8.17222 5.31482 8.38963 5.61111 8.66667L13.4167 4.11111C13.3796 3.98148 13.3567 3.85667 13.3478 3.73667C13.3389 3.61667 13.3341 3.48222 13.3333 3.33333C13.3333 2.40741 13.6574 1.62037 14.3056 0.972222C14.9537 0.324074 15.7407 0 16.6667 0C17.5926 0 18.3796 0.324074 19.0278 0.972222C19.6759 1.62037 20 2.40741 20 3.33333C20 4.25926 19.6759 5.0463 19.0278 5.69444C18.3796 6.34259 17.5926 6.66667 16.6667 6.66667C16.2222 6.66667 15.8056 6.58778 15.4167 6.43C15.0278 6.27222 14.6852 6.05481 14.3889 5.77778L6.58333 10.3333C6.62037 10.463 6.6437 10.5881 6.65333 10.7089C6.66296 10.8296 6.66741 10.9637 6.66667 11.1111C6.66593 11.2585 6.66148 11.393 6.65333 11.5144C6.64519 11.6359 6.62185 11.7607 6.58333 11.8889L14.3889 16.4444C14.6852 16.1667 15.0278 15.9493 15.4167 15.7922C15.8056 15.6352 16.2222 15.5563 16.6667 15.5556C17.5926 15.5556 18.3796 15.8796 19.0278 16.5278C19.6759 17.1759 20 17.963 20 18.8889C20 19.8148 19.6759 20.6019 19.0278 21.25C18.3796 21.8981 17.5926 22.2222 16.6667 22.2222Z"
                        style={{ fill: colors.primary }}
                      />
                    </svg>{" "}
                    Share
                  </a>
                </div>
              </div>
              <p className="mt-6 text-sm">
                {" "}
                Every share counts!{" "}
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
