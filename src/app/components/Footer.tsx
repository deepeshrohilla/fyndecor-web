import React from "react";
import Image from "next/image";
import logo from "../assets/logo/logo-white.png";
import whatsappicon from "../assets/icons/whatsapp.svg";
import Link from "next/link";
import { ADDRESS, MAIL_ID, MOBILE_NO } from "../utils";
import { ImageOptimizerCache } from "next/dist/server/image-optimizer";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "facebook",
      link: "https://www.facebook.com/",
      icon: () => (
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 8 19"
        >
          <path
            fillRule="evenodd"
            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/",
      icon: () => (
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
        </svg>
      ),
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/",
      icon: () => (
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path>
        </svg>
      ),
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/",
      icon: () => (
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"></path>
        </svg>
      ),
    },
    {
      name: "pinterest",
      link: "https://in.pinterest.com/",
      icon: () => (
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8.49161 19.1912C8.51535 18.8546 8.56306 18.5199 8.63456 18.1897C8.69754 17.8951 8.88867 17.0596 9.16872 15.8498L9.17581 15.8191C9.29895 15.2872 9.43089 14.7192 9.56283 14.1525C9.64199 13.8124 9.70356 13.5484 9.74438 13.4602C9.55012 13.0123 9.45298 12.5263 9.45969 12.0373C9.45969 10.6999 10.2157 9.66359 11.1958 9.6636C11.5555 9.65809 11.8996 9.81388 12.1383 10.09C12.3764 10.3655 12.4863 10.7335 12.4404 11.086C12.4404 11.5385 12.3548 11.8844 11.9865 13.1212C11.9158 13.3587 11.8674 13.5254 11.8215 13.692C11.7696 13.8799 11.7261 14.0503 11.6887 14.2136C11.5928 14.6003 11.6811 15.011 11.9262 15.3195C12.1707 15.6272 12.5421 15.7966 12.9319 15.7762C14.4242 15.7762 15.5321 13.7911 15.5321 11.2277C15.5321 9.25804 14.2412 7.95424 12.1 7.95416C11.0224 7.91127 9.97466 8.32523 9.20095 9.09986C8.42664 9.87508 7.99452 10.9437 8.00559 12.0614C7.98214 12.6633 8.17064 13.2536 8.51804 13.7053C8.69915 13.8441 8.76869 14.0885 8.69262 14.2941C8.65157 14.4632 8.55259 14.8473 8.51649 14.9755C8.49464 15.1032 8.41497 15.2131 8.30126 15.2715C8.18678 15.3303 8.05172 15.3297 7.94618 15.2737C6.78507 14.7954 6.14967 13.4963 6.14967 11.8349C6.14967 8.84907 8.64129 6.2497 12.3417 6.2497C15.4772 6.2497 17.8231 8.57864 17.8231 11.3896C17.8231 14.922 15.8911 17.4942 13.1337 17.4942C12.3393 17.5202 11.5838 17.162 11.087 16.535L11.044 16.712C10.9499 17.0992 10.9028 17.2928 10.8368 17.5638L10.8349 17.5715C10.6887 18.1717 10.5867 18.5885 10.5471 18.7452C10.4412 19.0998 10.307 19.448 10.1471 19.7841C10.7421 19.9253 11.3628 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 15.1594 5.83244 17.8911 8.49161 19.1912ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"></path>
        </svg>
      ),
    },
  ];
  const linkIcon = () => (
    <svg
      className="w-4 h-4 mr-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"></path>
    </svg>
  );
  return (
    <footer className="footer">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Link href="/" className="inline-flex items-center">
            <Image className="w-[80%] mb-5" src={logo} alt="fyndecor-logo" />
          </Link>
          <div className="grid grid-cols-1 lg:gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-[20px] font-bold text-white">
                The Company
              </h2>
              <ul className="text-white">
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-[color:var(--primary)] transition duration-300 ease-in-out inline-flex items-center"
                  >
                    {linkIcon()}
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/about"
                    className="hover:text-[color:var(--primary)] transition duration-300 ease-in-out inline-flex items-center"
                  >
                    {linkIcon()}
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/contact"
                    className="hover:text-[color:var(--primary)] transition duration-300 ease-in-out inline-flex items-center"
                  >
                    {linkIcon()}
                    Contact Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[color:var(--primary)] transition duration-300 ease-in-out inline-flex items-center"
                  >
                    {linkIcon()}
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-[color:var(--primary)] transition duration-300 ease-in-out inline-flex items-center"
                  >
                    {linkIcon()}
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[20px] font-bold text-white">
                Get In Touch
              </h2>
              <ul className="text-white">
                <li className="mb-4 flex items-center">
                  <svg
                    className="min-w-[30px] h-[30px] mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                  </svg>
                  <p className="max-w-[250px] text-[18px]">
                  {ADDRESS}
                  </p>
                </li>
                <li className="mb-4 flex items-center">
                  <svg
                    className="w-[30px] h-[30px] mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                  </svg>
                  <a
                    href={`tel:${MOBILE_NO}`}
                    className="hover:text-[color:var(--primary)] transition duration-300 ease-in-out text-[18px]"
                  >
                    {MOBILE_NO}
                  </a>
                </li>
                <li className="mb-4 flex items-center">
                  <svg
                    className="w-[30px] h-[30px] mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                  </svg>
                  <a
                    href={`mailto:${MAIL_ID}`}
                    className="hover:text-[color:var(--primary)] transition duration-300 ease-in-out text-[18px]"
                  >
                    {MAIL_ID}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[color:var(--primary-light)] sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-[16px] text-[color:var(--primary-light)] text-center sm:inline block">
            © 2024{" "}
            <a href="/" className="text-[color:var(--primary)]">
              FynDecor
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 justify-center sm:mt-0">
            {socialMediaLinks &&
              socialMediaLinks?.length > 0 &&
              socialMediaLinks?.map((item, ind) => {
                return (
                  <a
                    key={ind}
                    href={item?.link || ""}
                    className="mx-2 border hover:border-[color:var(--primary)] p-2 transition duration-300 ease-in-out text-white hover:text-[color:var(--primary)]"
                    title={item?.name || ""}
                    target="_blank"
                  >
                    {item?.icon()}
                    <span className="sr-only">{item?.name || ""}</span>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
      <a
        href="tel:+91 9818010701"
        className="fixed bg-white rounded-full bottom-[100px] right-[25px] z-50 flex items-center justify-center w-[60px] h-[60px] bg-white hover:bg-[color:var(--primary)] text-[color:var(--primary)] hover:text-[color:var(--white)] transition duration-300 ease-in-out shadow-lg"
      >
        <svg
          className="w-[30px] h-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
        </svg>
      </a>
      <a
        href="https://wa.me/919818010701"
        className="fixed bg-white rounded-full bottom-[180px] right-[25px] z-50 flex items-center justify-center w-[60px] h-[60px] bg-white hover:bg-[color:var(--primary)] text-[color:var(--primary)] hover:text-[color:var(--white)] transition duration-300 ease-in-out shadow-lg"
         target="_blank"
         rel="noopener noreferrer"
      >
        <Image className="w-[30px] h-[30px]" src={whatsappicon} alt="whatsapp-logo" />
      </a>
    </footer>
  );
};
export default Footer;
