import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CustomerFeedback = () => {
  const Star = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.9374 8.73748C23.8607 8.49966 23.7156 8.28967 23.5204 8.13371C23.3251 7.97775 23.0882 7.88271 22.8393 7.86043L15.9123 7.2314L13.1731 0.820144C12.9711 0.350304 12.5112 0.0462646 12.0001 0.0462646C11.4891 0.0462646 11.0291 0.350351 10.8271 0.821316L8.08796 7.23145L1.1598 7.86043C0.911176 7.88321 0.674703 7.97845 0.479701 8.13436C0.284698 8.29026 0.139741 8.49997 0.0628033 8.73748C-0.0952164 9.2235 0.0507092 9.75653 0.435797 10.0925L5.67187 14.6845L4.12786 21.4858C4.01489 21.9859 4.20896 22.5028 4.6239 22.8027C4.84689 22.9639 5.10785 23.0459 5.37097 23.0459C5.59785 23.0459 5.82286 22.9848 6.02489 22.8639L12.0001 19.2927L17.9732 22.8639C18.4102 23.1269 18.9612 23.1028 19.3752 22.8027C19.5779 22.656 19.733 22.453 19.8212 22.2188C19.9094 21.9847 19.9268 21.7298 19.8713 21.4858L18.3273 14.6845L23.5633 10.0935C23.7517 9.92897 23.8876 9.71274 23.9541 9.47167C24.0206 9.2306 24.0148 8.9753 23.9374 8.73748Z"
          fill="#FFC107"
        />
      </svg>
    );
  };
  return (
    <section className="customer__feedback__section">
      <h2>Expressions of Our Happy Customers</h2>
      <p className="mobile_hide">
        Be it end-to-end interiors, renovation or modular solutions, we have it
        all for your home or office. With a wide range of furniture & decor, we
        have your back from start to finish.
      </p>
      <div className="feedback__wrapper">
        <Swiper 
          modules={[Pagination]} 
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="feedback__card">
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <h5>{`Urvashi Malhotra`}</h5>
              <p>
                {`Thanks to Fyn Decor.`} <br />
                {`You designed it exactly as I had thought and I am very happy.`}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__card">
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <h5>{`Deepesh Rohilla`}</h5>
              <p>
                {`I had blinds installed by Fyndecor and I'm extremely satisfied with their service.Highly recommend their expertise!`}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__card">
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <h5>{`Sanjay Sinha`}</h5>
              <p>
                {`I ordered customized blackout curtains and motorized blinds, and they have transformed my living space beautifully.`}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__card">
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <h5>{`Vikas Verma`}</h5>
              <p>
                {`Your team is very good, we are happy with the installation and delivery too.`}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__card">
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <h5>{`Shivam Maheshwari`}</h5>
              <p>
                {`The range of options available is impressive, and the team helped me choose the perfect velvet curtains and roller blinds for my home.`}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__card">
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <h5>{`Ashok`}</h5>
              <p>
                {`The free measurement and installation service was fast, and the whole process was smooth. I highly suggest Fyndecor.`}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerFeedback;
