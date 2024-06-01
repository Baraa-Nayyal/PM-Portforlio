import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { IconButton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CustomeSwiperArrow from "../components/CustomeSwiperArrow";

const Clients = () => {
  useEffect(() => {
    AOS.init({ once: true });
    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
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
        <div className="flex justify-center">
          <div className="flex flex-col justify-between items-center bg-secondary rounded-xl max-w-[100%] mb-10 w-[280px] h-[300px]">
            <div className="flex  justify-center items-center h-full">
              <img src={imageUrl} alt="" className="w-[80%]" />
            </div>
            <div className="flex flex-col items-center mb-3">
              <span className="font-bold mt-2 mb-1">{title}</span>
              <span className="text-sm">{text}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div id="clients" className="my-36">
        <h1
          data-aos="zoom-out-up"
          data-aos-once
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-center mt-1 mb-10 text-[#961A7A] text-[60px] "
        >
          My Clients
        </h1>
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="250"
          data-aos-duration="1000"
          className="w-full relative"
        >
          <CustomeSwiperArrow sectionId="clients" mobileScreenWidth={"90%"} />
          <Swiper
            style={{ width: "80%", borderRadius: "20px", cursor: "grab" }}
            loop={true}
            spaceBetween={10}
            autoplay={{ delay: 2000 }}
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
              nextEl: ".custom-button-prev-clients",
              prevEl: ".custom-button-next-clients",
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
