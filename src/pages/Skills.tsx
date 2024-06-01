import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true });
    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return (
    <>
      <div id="skills">
        <h1
          data-aos="zoom-out-up"
          data-aos-once
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-center my-2 text-primary text-[60px]"
        >
          My Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 md:gap-4 container mx-auto px-10">
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-duration="500"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="250"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="350"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="450"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="550"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="650"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="750"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="850"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="950"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="1050"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/skills.svg" />
            <span className="font-bold">Risk management</span>
            <p className="w-[210px]">
              The ability to identify, assess, and mitigate potential threats.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
