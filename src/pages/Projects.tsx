import { useState } from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import "swiper/swiper-bundle.min.css";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Tabs, Tab, Box } from "@mui/material";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  background: "#961A7A",
  color: "white",
  fontSize: "15px",
  borderRadius: "5px",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  "&:hover": {
    background: "#961A7A",
  },
}));

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
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // sx={{
  //   maxWidth: 345,
  //   background: "#F2E3EF",
  //   borderRadius: "20px",
  // }}
  return (
    <div className="bg-[#F2E3EF] rounded-xl max-w-[100%]  mb-10">
      <CardHeader
        avatar={
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "5px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="avatar"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
        }
        title={<p className="font-bold">{title}</p>}
        subheader={subheader}
      />
      {/* <CardMedia
        component="img"
        height="250"
        width='150'
        image={imageUrl}
        alt="Project Image"
      /> */}
      <img src={imageUrl} width={"100%"} />

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          See Full Project
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            dolorem.
          </p>
        </CardContent>
      </Collapse>
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

const Skills = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
      className="custom-button-prev  bg-[#d530b061]"
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
          className="text-center mt-1 mb-1 text-[#961A7A] text-[60px]"
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
            data-aos-delay="350"
            data-aos-duration="1000"
          >
            <Tab label="Software Solutions" />
            <Tab label="UI/UX" />
            <Tab label="Graphic Design" />
          </Tabs>
          <TabPanel
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="1000"
            value={value}
            index={0}
          >
            <div className="w-full relative">
              <div className="absolute w-full top-1/2 translate-y-[-100%]">
                <div className="flex justify-between">
                  <CustomPrevButton />
                  <CustomNextButton />
                </div>
              </div>
              <Swiper
                style={{ width: "80%", borderRadius: "20px", cursor: "grab" }}
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
                  <CustomCard
                    logo="logo1.png"
                    title="KCS"
                    imageUrl="/splash1.png"
                    subheader="Website"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomCard
                    logo="logo2.png"
                    title="KCS"
                    imageUrl="/splash1.png"
                    subheader="Qr Menu"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomCard
                    logo="logo1.png"
                    title="KCS"
                    imageUrl="/splash1.png"
                    subheader="Website"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomCard
                    logo="logo2.png"
                    title="Essto"
                    imageUrl="/splash1.png"
                    subheader="Cooker System"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomCard
                    logo="logo1.png"
                    title="KCS"
                    imageUrl="/splash1.png"
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

export default Skills;
