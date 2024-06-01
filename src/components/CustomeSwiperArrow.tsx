import { IoMdArrowBack } from "react-icons/io";
const CustomeSwiperArrow = ({
  sectionId,
  mobileScreenWidth,
}: {
  sectionId: string;
  mobileScreenWidth?: string;
}) => {
  return (
    <>
      <div
        className={` absolute w-[${mobileScreenWidth}] md:wd-[105%] md:w-[90%] top-1/2 translate-y-[-100%]  left-1/2 transform -translate-x-1/2`}
      >
        <div className="flex justify-between">
          <button
            id="swiper-btn"
            className={`custom-button-next-${sectionId} `}
          >
            <IoMdArrowBack />
          </button>
          <button
            id="swiper-btn"
            className={`custom-button-prev-${sectionId} rotate-180`}
          >
            <IoMdArrowBack />
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomeSwiperArrow;
