import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <div className="absolute">
        </div> */}
      {/* <img
          className="absolute bottom-[57px] w-[90%] h-[80%]"
          src="/homeborder.png"
        /> */}
      <div className="flex flex-col xl:flex-row gap-x-60 justify-center my-5 md:my-10 h-fit w-full items-center container mx-auto px-32">
        <section
          data-aos="fade-up"
          className="flex flex-col order-3 xl:order-1 text-center xl:text-left"
        >
          <span
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="xl:text-[28px] sm:text-[24px] text-[18px]"
          >
            HELLO, I Am <b className="font-extrabold">Project Manager</b>
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-offset="-100"
            className="font-extrabold xl:text-[50px] sm:text-[40px] text-[30px] text-primary"
          >
            ABDUALRAHMAN
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            data-aos-offset="-100"
            className="font-extrabold xl:text-[50px] sm:text-[40px] text-[30px] text-[#961A7A] tracking-[24px] sm:tracking-[32px] xl:tracking-[38px] ml-5 sm:ml-7 xl:ml-0"
          >
            RIHAWEI
          </span>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-offset="-100"
            className="capitalize max-w-[500px]"
          >
            lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            officia tempore nisi odit, minus odio consequatur alias
            reprehenderitlorem ipsum, dolor sit amet consectetur adipisicing
            elit. Facere officia tempore nisi odit, minus odio consequatur alias
            reprehenderitlorem ipsum, dolor sit amet consectetur adipisicing
            elit. Facere officia tempore nisi odit, minus odio consequatur alias
            reprehenderitlorem ipsum, dolor sit amet consectetur adipisicing
            elit. Facere officia tempore nisi odit, minus odio consequatur alias
            reprehenderit
          </p>
        </section>
        <section className="relative order-2">
          <div className="absolute z-[-1] xl:left-[-50px] top-[-10px]">
            <img
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              src="/bigCircle.png"
              className="xl:w-[500px]  md:w-[300px] w-[250px] "
            />
          </div>
          <div>
            <img
              data-aos="fade-left"
              src="/businessMan.png"
              className="xl:w-[400px] md:w-[300px] w-[250px] "
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
