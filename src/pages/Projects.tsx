import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import CustomeSwiperArrow from "../components/CustomeSwiperArrow";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Tabs, Tab, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function CustomCard({
  title,
  imageUrl,
  subheader,
  logo,
}: {
  title: string;
  imageUrl: string;
  subheader: string;
  logo: string;
}) {
  return (
    <div className="flex gap-4 justify-center">
      <div className="primary-card w-96 min-h-28 h-fit">
        <div className="flex items-start p-6 gap-4">
          <div className="w-12 h-12 rounded-xl bg-white flex justify-center items-center">
            <img src={logo} />
          </div>
          <div>
            <span className="font-extrabold text-primary">{title}</span>
            <br />
            <span className="font-light text-[#797278] ">{subheader}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="  max-w-full h-60 m-9 object-contain"
            src={imageUrl}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-primary rounded-xl hover:bg-hover cursor-pointer mb-3 transition-all w-[80%] text-white p-3 ">
            See Full Project
          </button>
        </div>
      </div>
    </div>
  );
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const Projects = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    AOS.init({ once: true });
    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return (
    <>
      <div id="projects" className="my-36">
        <h1
          data-aos="zoom-out-up"
          data-aos-once
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-center mt-1 mb-5 text-[#961A7A] text-[60px]"
        >
          My Projects
        </h1>

        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
            data-aos="fade-right"
            data-aos-once
            data-aos-delay="350"
            data-aos-duration="1000"
          >
            <Tab label="Software Solutions" />
            <Tab label="UI/UX" />
            <Tab label="Graphic Design" />
          </Tabs>
          <TabPanel
            data-aos="fade-up"
            data-aos-once
            data-aos-delay="450"
            data-aos-duration="1000"
            value={value}
            index={0}
          >
            <div className="w-full relative">
              <CustomeSwiperArrow
                sectionId="projects"
                mobileScreenWidth={"105%"}
              />
              {/* <div className="absolute w-[110%] sm:w-[105%] lg:w-[90%] top-1/2 translate-y-[-100%]  left-1/2 transform -translate-x-1/2">
                <div className="flex justify-between">
                  <CustomeSwiperArrow rotate />
                </div>
              </div> */}
              <Swiper
                style={{ width: "80%", borderRadius: "12px", cursor: "grab" }}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
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
                  nextEl: ".custom-button-prev-projects",
                  prevEl: ".custom-button-next-projects",
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
                <SwiperSlide className="mb-10">
                  <CustomCard
                    logo="logo1.png"
                    title="KCS"
                    imageUrl="/splash1.png"
                    subheader="Website"
                  />
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                  <CustomCard
                    logo="logo2.png"
                    title="KCS"
                    imageUrl="/splash2.png"
                    subheader="Qr Menu"
                  />
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                  <CustomCard
                    logo="logo1.png"
                    title="KCS"
                    imageUrl="/splash3.png"
                    subheader="Website"
                  />
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                  <CustomCard
                    logo="logo2.png"
                    title="Essto"
                    imageUrl="/splash1.png"
                    subheader="Cooker System"
                  />
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                  <CustomCard
                    logo="logo1.png"
                    title="KCS"
                    imageUrl="/splash2.png"
                    subheader="Website"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="h-[100vh]">UI/UX Content</div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="h-[100vh]">Graphic Design Content</div>
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default Projects;
