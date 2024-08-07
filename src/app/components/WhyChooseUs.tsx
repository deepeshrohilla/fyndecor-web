import React from "react";
import Image from "next/image";
import new_cur_01 from "../assets/images/new_cur_01.png";
import new_cur_02 from "../assets/images/new_cur_02.png";

const WhyChooseUs = () => {
  const CheckSvgIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 20C16.6421 20 20 16.6421 20 12.5C20 8.35786 16.6421 5 12.5 5C8.35786 5 5 8.35786 5 12.5C5 16.6421 8.35786 20 12.5 20Z"
        fill="white"
      />
      <path
        d="M22.0573 6.19304L19.1154 4.88436L17.8056 1.94135L14.604 2.27569L11.9993 0.386719L9.39307 2.27569L6.19304 1.94135L4.88416 4.88305L1.94116 6.19304L2.27569 9.39462L0.386719 11.9993L2.27569 14.6055L1.94116 17.8056L4.883 19.1143L6.19304 22.0573L9.39462 21.7229L11.9993 23.6119L14.6055 21.7229L17.8056 22.0573L19.1143 19.1154L22.0573 17.8056L21.7227 14.604L23.6119 11.9993L21.7227 9.39312L22.0573 6.19304ZM9.67681 16.6443L6.39036 13.3579L7.48581 12.2664L9.67681 14.4534L16.2455 7.88465L17.341 8.97996L9.67681 16.6443Z"
        fill="#C072DC"
      />
      <path
        d="M23.9259 11.7727L22.1236 9.28628L22.443 6.23266C22.4515 6.15135 22.434 6.06943 22.3931 5.99865C22.3522 5.92787 22.29 5.87185 22.2153 5.83861L19.4099 4.59026L18.1614 1.78462C18.1279 1.71009 18.0719 1.64798 18.0012 1.60707C17.9304 1.56616 17.8487 1.54853 17.7674 1.55668L14.7132 1.87592L12.227 0.0737051C12.161 0.0257976 12.0814 0 11.9998 0C11.9182 0 11.8387 0.0257976 11.7727 0.0737051L9.28628 1.87592L6.23228 1.55668C6.15109 1.54894 6.06951 1.5667 5.99889 1.60749C5.92826 1.64827 5.87211 1.71005 5.83822 1.78423L4.58987 4.58983L1.78423 5.83861C1.7096 5.87181 1.64738 5.92778 1.60651 5.99851C1.56563 6.06923 1.54819 6.15108 1.55668 6.23232L1.87588 9.28628L0.0737051 11.7727C0.0257976 11.8387 0 11.9182 0 11.9998C0 12.0814 0.0257976 12.161 0.0737051 12.227L1.87588 14.7132L1.55668 17.7674C1.54812 17.8487 1.56552 17.9306 1.6064 18.0014C1.64728 18.0722 1.70954 18.1282 1.78423 18.1615L4.58983 19.4098L5.83822 22.2155C5.87194 22.2898 5.92805 22.3517 5.99871 22.3926C6.06936 22.4335 6.15103 22.4512 6.23228 22.4433L9.28628 22.124L11.7726 23.9264C11.8387 23.9743 11.9182 24.0001 11.9998 24.0001C12.0814 24.0001 12.161 23.9743 12.227 23.9264L14.7132 22.124L17.7673 22.4433C17.8486 22.4516 17.9303 22.434 18.0011 22.3932C18.0718 22.3523 18.1279 22.2903 18.1614 22.2158L19.4098 19.4102L22.2152 18.1615C22.2898 18.1282 22.3521 18.0723 22.393 18.0016C22.4339 17.9308 22.4514 17.849 22.443 17.7677L22.1236 14.7136L23.9259 12.2274C23.9739 12.1613 23.9998 12.0817 23.9998 12C23.9998 11.9184 23.9739 11.8388 23.9259 11.7727ZM21.4099 14.3789C21.3538 14.4561 21.3283 14.5514 21.3383 14.6463L21.6433 17.568L18.9589 18.7631C18.8711 18.8016 18.8009 18.8716 18.7621 18.9592L17.568 21.6437L14.6455 21.3383C14.5507 21.3285 14.4555 21.3541 14.3784 21.4103L11.9998 23.1344L9.62082 21.4103C9.55501 21.3621 9.47554 21.3362 9.39399 21.3364C9.38039 21.3364 9.36679 21.3364 9.35528 21.3383L6.43264 21.6437L5.23848 18.9592C5.19963 18.8716 5.12958 18.8015 5.04194 18.7625L2.35596 17.568L2.66103 14.6463C2.67085 14.5514 2.64536 14.4562 2.58942 14.3789L0.865246 11.9998L2.58932 9.62082C2.64526 9.54351 2.67075 9.44831 2.66093 9.35339L2.35601 6.43153L5.04044 5.23664C5.12817 5.19809 5.1983 5.1281 5.23703 5.04044L6.43119 2.35601L9.35378 2.66142C9.44861 2.6708 9.5436 2.6452 9.62087 2.58942L11.9999 0.865294L14.3789 2.58942C14.4561 2.64533 14.5512 2.67095 14.646 2.66142L17.5684 2.35596L18.7626 5.04039C18.8015 5.12805 18.8716 5.19811 18.9593 5.23698L21.6437 6.43153L21.3387 9.35339C21.3287 9.44832 21.3542 9.54359 21.4103 9.62082L23.1342 11.9998L21.4099 14.3789Z"
        fill="#C072DC"
      />
    </svg>
  );

  return (
    <section className="why__choose__us__section">
      <div className="left__img">
        <div className="new__arrival">
          <Image src={new_cur_01} alt="" />
          <div className="content">
            <span className="new">New</span>
            <h6 className="tag">Curtains</h6>
            <span className="price">₹4**/-</span>
          </div>
        </div>
        <Image src={new_cur_02} alt="" />
      </div>
      <div className="right__content">
        <h2>Why Choose Our Services?</h2>
        <ul>
          <li>
            <CheckSvgIcon />
            <p>
            With over 25 years of experience, our skilled team guarantees that every curtain, blind, and cushion cover is expertly made, resulting in high-quality products personalized to your specifications.
            </p>
          </li>
          <li>
            <CheckSvgIcon />
            <p>
            We offer a variety of fabrics and patterns, including high velvet, beautiful sheers, effective blackout curtains, and more. Our made-to-measure services ensure an exact fit for your space.
            </p>
          </li>
          <li>
            <CheckSvgIcon />
            <p>
            From the first discussion before the final fitting, we managed everything. Our staff offers skilled installation, assuring a smooth experience from start to finish.
            </p>
          </li>
          <li>
            <CheckSvgIcon />
            <p>Fyndecor values your satisfaction. Our helpful and educated staff is always available to help with design options, measurements, and any concerns, guaranteeing that you get exactly what you want for your house.s</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
