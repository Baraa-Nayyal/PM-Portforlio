import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IconButton } from "@mui/material";
import "./style.css";
import NavLinks from "../components/NavLinks";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CustomerCard = () => {
  return (
    <>
      <div
        id="card"
        className="bg-[#F2E3EF] rounded-xl max-w-[100%] w-[350px] h-fit flex flex-col justify-between items-center"
      >
        <div className="flex  justify-center items-center h-full">
          <img src="/review.png" alt="" className="w-[100px] my-7" />
        </div>
        <div className="flex relative flex-col items-center mb-3">
          <img className="absolute w-[90%]" src="/quoutes.svg" />
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
    </>
  );
};

const Reviews = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const CustomPrevButton = () => (
    <IconButton
      className="custom-button-next bg-[#d530b061]"
      sx={{
        ml: 1,
        "&.MuiButtonBase-root:hover": {
          bgcolor: "#d530b061",
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 256 256"
      >
        <path
          fill="#961A7A"
          d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6"
        ></path>
      </svg>
    </IconButton>
  );

  const CustomNextButton = () => (
    <IconButton
      className=" custom-button-prev bg-[#d530b061]"
      sx={{
        transform: "rotate(180deg)", // Rotate the icon by 180 degrees
        ml: 1,
        "&.MuiButtonBase-root:hover": {
          bgcolor: "#d530b061",
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 256 256"
      >
        <path
          fill="#961A7A"
          d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6"
        ></path>
      </svg>
    </IconButton>
  );
  return (
    <>
      <div>
        <h1
          data-aos="zoom-out-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-center mt-1 mb-10 text-[#961A7A] text-[60px] "
        >
          Reviews
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000"
          className="w-full relative"
        >
          <div className="absolute w-full top-1/2 translate-y-[-100%]">
            <div className="flex justify-between mx-3">
              <CustomPrevButton />
              <CustomNextButton />
            </div>
          </div>

          <Swiper
            style={{ width: "80%", borderRadius: "20px", cursor: "grab" }}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            freeMode
            centeredSlides
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
              nextEl: ".custom-button-prev",
              prevEl: ".custom-button-next",
            }}
            modules={[Pagination, Navigation]}
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
