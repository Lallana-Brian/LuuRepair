import ReusableSwiper from "./ReusableSwiper";
import TextSwiper from "./TextSwiper";
import "swiper/css";

const HomeSwiper = () => {
  return (
    <div className="relative w-full">
      <ReusableSwiper />
      <TextSwiper />
    </div>
  );
};

export default HomeSwiper;
