import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CustomeSwiperArrow from "../components/CustomeSwiperArrow";

const CustomerCard = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div
          id="card"
          className="bg-[#F2E3EF] rounded-xl max-w-[100%] w-[265px] sm:w-[350px] h-fit flex flex-col justify-between items-center"
        >
          <div className="flex  justify-center items-center h-full">
            <img src="/review.png" alt="" className="w-[100px] my-7" />
          </div>
          <div className="flex relative flex-col items-center mb-3">
            <img className="absolute w-[90%]" src="/quoutes.svg" alt="bro" />
            <div className="flex  flex-col items-center mb-7">
              <span className="font-bold text-lg text-[#961A7A]">Max</span>
              <span className="text-sm opacity-80">Restaurant's owner</span>
            </div>
            <div className="text-center mx-10 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Reviews = () => {
  useEffect(() => {
    AOS.init({ once: true });
    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return (
    <>
      <div id="reviews" className="mt-36">
        <h1
          data-aos="zoom-out-up"
          data-aos-once
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-center mb-10 text-[#961A7A] text-[60px] "
        >
          Reviews
        </h1>
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="250"
          data-aos-duration="1000"
          className="w-full relative"
        >
          <CustomeSwiperArrow sectionId="reviews" mobileScreenWidth={"90%"} />

          <Swiper
            style={{ width: "80%", borderRadius: "20px", cursor: "grab" }}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            freeMode
            centeredSlides
            autoplay
            pagination={{
              clickable: true,
              renderBullet: function (index: number, className: string) {
                return (
                  '<span class="' +
                  className +
                  '" style="background-color: #961A7A;"></span>'
                );
              },
            }}
            navigation={{
              nextEl: ".custom-button-prev-reviews",
              prevEl: ".custom-button-next-reviews",
            }}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <CustomerCard />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Reviews;
