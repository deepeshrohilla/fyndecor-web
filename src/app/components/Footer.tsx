import React from "react";
import Image from "next/image";
import logo from "../assets/logo/logo-white.svg";
import whatsAppIcon from "../assets/icons/whatsapp.svg";
import phone from "../assets/icons/phone.svg";
import Link from "next/link";
import { ADDRESS, MAIL_ID, MOBILE_NO } from "../utils";
import { useAppDispatch } from "../lib/hooks";
import { modalOpen } from "../lib/features/modalSlice";

const Footer = () => {
  const dispatch = useAppDispatch();

  const socialMediaLinks = [
    {
      name: "facebook",
      link: "https://www.facebook.com/",
      icon: () => (
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9697 15C30.9697 6.71484 24.2549 0 15.9697 0C7.68457 0 0.969727 6.71484 0.969727 15C0.969727 23.2852 7.68457 30 15.9697 30C16.0576 30 16.1455 30 16.2334 29.9941V18.3223H13.0107V14.5664H16.2334V11.8008C16.2334 8.5957 18.1904 6.84961 21.0498 6.84961C22.4209 6.84961 23.5986 6.94922 23.9385 6.99609V10.3477H21.9697C20.417 10.3477 20.1123 11.0859 20.1123 12.1699V14.5605H23.833L23.3467 18.3164H20.1123V29.4199C26.3818 27.6211 30.9697 21.8496 30.9697 15Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/",
      icon: () => (
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8896 17.4198L18.0502 15.006L13.8896 12.5803V17.4198Z"
            fill="white"
          />
          <path
            d="M15.9697 0C13.003 0 10.1029 0.879735 7.63618 2.52796C5.16944 4.17618 3.24685 6.51886 2.11154 9.25975C0.976226 12.0006 0.679176 15.0166 1.25795 17.9264C1.83673 20.8361 3.26534 23.5088 5.36313 25.6066C7.46092 27.7044 10.1337 29.133 13.0434 29.7118C15.9531 30.2906 18.9691 29.9935 21.71 28.8582C24.4509 27.7229 26.7936 25.8003 28.4418 23.3336C30.09 20.8668 30.9697 17.9667 30.9697 15C30.9697 11.0218 29.3894 7.20644 26.5763 4.3934C23.7633 1.58035 19.948 0 15.9697 0ZM23.8645 17.6546C23.8647 18.0469 23.7877 18.4354 23.6377 18.798C23.4878 19.1605 23.2679 19.4899 22.9905 19.7674C22.7132 20.0449 22.3839 20.2651 22.0215 20.4153C21.6591 20.5655 21.2706 20.6428 20.8783 20.6428H11.0612C10.6689 20.6428 10.2804 20.5655 9.91796 20.4153C9.55553 20.2651 9.22625 20.0449 8.94893 19.7674C8.67161 19.4899 8.45169 19.1605 8.30174 18.798C8.15179 18.4354 8.07474 18.0469 8.075 17.6546V12.3454C8.07474 11.9531 8.15179 11.5646 8.30174 11.202C8.45169 10.8395 8.67161 10.5101 8.94893 10.2326C9.22625 9.95507 9.55553 9.73493 9.91796 9.58474C10.2804 9.43454 10.6689 9.35724 11.0612 9.35724H20.8783C21.2706 9.35724 21.6591 9.43454 22.0215 9.58474C22.3839 9.73493 22.7132 9.95507 22.9905 10.2326C23.2679 10.5101 23.4878 10.8395 23.6377 11.202C23.7877 11.5646 23.8647 11.9531 23.8645 12.3454V17.6546Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/",
      icon: () => (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9697 18.0762C16.6686 18.0762 18.0459 16.6989 18.0459 15C18.0459 13.3011 16.6686 11.9238 14.9697 11.9238C13.2708 11.9238 11.8936 13.3011 11.8936 15C11.8936 16.6989 13.2708 18.0762 14.9697 18.0762Z"
            fill="white"
          />
          <path
            d="M14.9697 0.351562C6.87963 0.351562 0.321289 6.9099 0.321289 15C0.321289 23.0901 6.87963 29.6484 14.9697 29.6484C23.0598 29.6484 29.6182 23.0901 29.6182 15C29.6182 6.9099 23.0598 0.351562 14.9697 0.351562ZM24.02 18.723C23.9497 20.1157 23.5583 21.489 22.5434 22.4931C21.5187 23.5068 20.1389 23.8845 18.7328 23.9541H11.2067C9.80047 23.8845 8.42082 23.5071 7.39607 22.4931C6.38111 21.489 5.98982 20.1157 5.91951 18.723V11.277C5.98982 9.8843 6.38117 8.51098 7.39607 7.5068C8.42082 6.49312 9.80064 6.11543 11.2067 6.04588H18.7327C20.139 6.11543 21.5186 6.49295 22.5434 7.5068C23.5583 8.51098 23.9496 9.8843 24.0199 11.277L24.02 18.723Z"
            fill="white"
          />
          <path
            d="M18.6379 7.74242C16.8047 7.69214 13.1356 7.69214 11.3024 7.74242C10.3485 7.76861 9.26701 8.00609 8.58732 8.73207C7.88103 9.48669 7.61413 10.3984 7.58706 11.4184C7.53949 13.2085 7.58706 18.5816 7.58706 18.5816C7.61806 19.6014 7.88103 20.5132 8.58732 21.2678C9.26701 21.9941 10.3485 22.2313 11.3024 22.2575C13.1356 22.3078 16.8047 22.3078 18.6379 22.2575C19.5919 22.2313 20.6733 21.9938 21.353 21.2678C22.0593 20.5132 22.3262 19.6015 22.3533 18.5816V11.4184C22.3262 10.3984 22.0593 9.48669 21.353 8.73207C20.6731 8.00585 19.5916 7.76861 18.6379 7.74242ZM14.9699 19.768C14.0269 19.768 13.105 19.4884 12.3209 18.9645C11.5368 18.4405 10.9257 17.6959 10.5648 16.8246C10.2039 15.9534 10.1095 14.9947 10.2935 14.0698C10.4775 13.1448 10.9316 12.2952 11.5984 11.6284C12.2652 10.9616 13.1148 10.5075 14.0397 10.3235C14.9646 10.1395 15.9233 10.234 16.7946 10.5948C17.6658 10.9557 18.4105 11.5669 18.9344 12.351C19.4584 13.1351 19.738 14.0569 19.738 15C19.738 16.2645 19.2357 17.4773 18.3415 18.3715C17.4473 19.2657 16.2345 19.768 14.9699 19.768ZM19.7583 11.2161C19.5697 11.216 19.3853 11.1601 19.2285 11.0553C19.0717 10.9504 18.9496 10.8015 18.8774 10.6272C18.8053 10.453 18.7864 10.2613 18.8232 10.0763C18.8601 9.89132 18.9509 9.72143 19.0843 9.58809C19.2177 9.45474 19.3876 9.36395 19.5726 9.32717C19.7575 9.29039 19.9493 9.30929 20.1235 9.38147C20.2977 9.45366 20.4467 9.57589 20.5514 9.7327C20.6562 9.88952 20.7121 10.0739 20.7121 10.2625C20.7121 10.3877 20.6874 10.5117 20.6395 10.6275C20.5916 10.7432 20.5213 10.8483 20.4327 10.9369C20.3442 11.0254 20.239 11.0957 20.1233 11.1436C20.0076 11.1915 19.8835 11.2161 19.7583 11.2161Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "pinterest",
      link: "https://in.pinterest.com/",
      icon: () => (
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9697 30C24.254 30 30.9697 23.2843 30.9697 15C30.9697 6.71573 24.254 0 15.9697 0C7.68546 0 0.969727 6.71573 0.969727 15C0.969727 23.2843 7.68546 30 15.9697 30Z"
            fill="white"
          />
          <path
            d="M24.0197 11.4443C24.0197 16.1305 21.4147 19.6318 17.5745 19.6318C16.2836 19.6318 15.0717 18.9346 14.6565 18.1418C14.6565 18.1418 13.9632 20.8942 13.817 21.4258C13.2997 23.3026 11.7786 25.1806 11.6609 25.3346C11.5781 25.4419 11.397 25.4083 11.3763 25.266C11.344 25.0267 10.956 22.6584 11.4125 20.726L12.9492 14.2162C12.9492 14.2162 12.5689 13.453 12.5689 12.3265C12.5689 10.5557 13.5946 9.23385 14.8725 9.23385C15.959 9.23385 16.4828 10.0487 16.4828 11.0266C16.4828 12.1195 15.7882 13.7531 15.4287 15.2652C15.1286 16.5327 16.0638 17.5662 17.3145 17.5662C19.578 17.5662 21.1017 14.6585 21.1017 11.2141C21.1017 8.59618 19.3387 6.63663 16.131 6.63663C12.5081 6.63663 10.2497 9.33862 10.2497 12.3575C10.2497 13.3987 10.5576 14.1334 11.0387 14.6999C11.2586 14.9612 11.291 15.066 11.2108 15.366C11.1526 15.5859 11.0219 16.1149 10.9663 16.3245C10.8874 16.6271 10.6417 16.7345 10.3687 16.6233C8.70021 15.9416 7.92285 14.114 7.92285 12.0587C7.92285 8.66603 10.7852 4.59558 16.4608 4.59558C21.0189 4.60075 24.0197 7.90032 24.0197 11.4443Z"
            fill="#C072DC"
          />
        </svg>
      ),
    },
  ];

  const navigationLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms & Conditions", link: "/terms-and-conditions" },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="foo__navigation">
          <div className="logo">
            <Image className="" src={logo} alt="fyndecor-logo" />
            <h5>Crafting Dreams, Designing Homes</h5>
            <p>
            FynDecor provides high quality, Customised Curtains, Blinds, Cushion covers and Sofa covers at affordable prices. We offer a wide range of options including blackout curtains, sheer curtains, linen curtains and velvet curtains, as well as a variety of blinds such as vertical blinds, roller blinds, Venetian blinds, wooden blinds and motorised blinds. Our customized options will improve your living space beautifully. Book your appointment now!
            </p>
          </div>
          <div className="navigation__links">
            <h4>The Company</h4>
            <ul className="nav__links">
              {navigationLinks?.map((item, key) => (
                <li key={key}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="get__in__touch">
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <p>{ADDRESS}</p>
              </li>
              <li>
              <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2894 18.8475L20.8006 15.3587C19.5546 14.1126 17.4364 14.6111 16.938 16.2309C16.5642 17.3523 15.3181 17.9753 14.1967 17.7261C11.7047 17.1031 8.3405 13.8634 7.71749 11.2468C7.34369 10.1254 8.0913 8.87936 9.2127 8.50561C10.8325 8.0072 11.3309 5.88899 10.0849 4.64298L6.59609 1.15415C5.59928 0.281948 4.10407 0.281948 3.23186 1.15415L0.864446 3.52157C-1.50297 6.01359 1.11365 12.6174 6.96989 18.4737C12.8261 24.3299 19.43 27.0712 21.922 24.5791L24.2894 22.2117C25.1617 21.2149 25.1617 19.7197 24.2894 18.8475Z"
                    fill="white"
                  />
                </svg>
                
                <a href={`tel:${MOBILE_NO}`}>{MOBILE_NO}</a>
              </li>
              <li>
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.559 12.8171C14.9371 13.2317 14.2146 13.4509 13.4697 13.4509C12.7249 13.4509 12.0024 13.2317 11.3805 12.8171L1.13618 5.98733C1.07963 5.94952 1.02412 5.91016 0.969727 5.86931L0.969727 17.0606C0.969727 18.3437 2.01099 19.362 3.27114 19.362H23.6683C24.9514 19.362 25.9697 18.3207 25.9697 17.0606V5.86926C25.9152 5.91022 25.8596 5.94966 25.8029 5.98753L15.559 12.8171Z"
                    fill="white"
                  />
                  <path
                    d="M1.94873 4.76847L12.193 11.5983C12.5808 11.8568 13.0252 11.986 13.4697 11.986C13.9142 11.986 14.3586 11.8568 14.7464 11.5983L24.9907 4.76847C25.6038 4.36002 25.9697 3.67643 25.9697 2.93864C25.9697 1.67003 24.9376 0.638 23.6691 0.638H3.27036C2.00181 0.638049 0.969728 1.67008 0.969728 2.93986C0.969347 3.30177 1.05855 3.65816 1.22937 3.97723C1.40019 4.29629 1.64733 4.56812 1.94873 4.76847Z"
                    fill="white"
                  />
                </svg>
                <a href={`mailto:${MAIL_ID}`}>{MAIL_ID}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright__and__media">
          <span>
            © 2024 <a href="/">FynDecor</a>. All Rights Reserved.
          </span>
          <div className="social__links">
            {socialMediaLinks?.map((item, ind) => {
              return (
                <a key={ind} href={item?.link || ""} target="_blank">
                  {item?.icon()}
                  {/* <span>{item?.name || ""}</span> */}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phone/Call BTN */}
      <a
        href="tel:+91 9818010701"
        className="mobile_hide_chat_icons fixed bg-white rounded-full bottom-[100px] right-[25px] z-50 flex items-center justify-center w-[60px] h-[60px] bg-white hover:bg-[color:var(--primary)] text-[color:var(--primary)] hover:text-[color:var(--white)] transition duration-300 ease-in-out shadow-lg"
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
      {/* WhatsApp BTN */}
      <a
        href="https://wa.me/919818010701"
        className="mobile_hide_chat_icons fixed bg-white rounded-full bottom-[180px] right-[25px] z-50 flex items-center justify-center w-[60px] h-[60px] bg-white hover:bg-[color:var(--primary)] text-[color:var(--primary)] hover:text-[color:var(--white)] transition duration-300 ease-in-out shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="w-[30px] h-[30px]"
          src={whatsAppIcon}
          alt="whatsapp-logo"
        />
      </a>
      <nav className="navbar fixed-bottom navbar-light display_hide fixed_bottom fixed_bottom_home">
        <div className="container-fluid fixed-bottom-div">
          {/* <div className="middle__line"></div> */}
          <div className="starting_price">
            <a href="tel:9818010701">
              <Image src={phone} alt="" />
              9818010701
            </a>
          </div>
          <button type="button" className="btn" onClick={()=>dispatch(modalOpen({open: true}))}>
            Enquire Now
          </button>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
