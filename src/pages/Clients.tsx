import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IconButton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Clients = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const CustomerCard = ({
    title,
    imageUrl,
    text,
  }: {
    title: string;
    imageUrl: string;
    text: string;
  }) => {
    return (
      <>
        <div className="bg-[#F2E3EF] rounded-xl max-w-[100%] mb-10 w-[280px] h-[300px] flex flex-col justify-between items-center">
          <div className="flex  justify-center items-center h-full">
            <img width={"80%"} src={imageUrl} alt="" className="w-[80%]" />
          </div>
          <div className="flex flex-col items-center mb-3">
            <span className="font-bold mt-2 mb-1">{title}</span>
            <span className="text-sm">{text}</span>
          </div>
        </div>
      </>
    );
  };

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
      <div className="h-[100vh]">
        <h1
          data-aos="zoom-out-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-center mt-1 mb-10 text-[#961A7A] text-[60px] "
        >
          My Clients
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
            spaceBetween={10}
            slidesPerView={4}
            freeMode
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
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <CustomerCard
                title="Dubai Perfume"
                imageUrl="/client1.png"
                text="Online Shop"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard
                title="Hakuna Patata"
                imageUrl="/client5.png"
                text="Restaurant"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard
                title="Fresho"
                imageUrl="/client2.png"
                text="Restaurant"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard
                title="Hakuna Patata"
                imageUrl="/client5.png"
                text="Restaurant"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard
                title="Osten Kock"
                imageUrl="/client4.png"
                text="Restaurant"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard
                title="Hakuna Patata"
                imageUrl="/client5.png"
                text="Restaurant"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Clients;
