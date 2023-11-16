// import Banner from "components/banner/banner"
import Banner from "components/b/banner";
import Form from "components/form/form";
import Products from "components/products/products";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import headerStore from "store/header";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Mousewheel } from "swiper/modules";

const Main = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    headerStore.changeOpen(inView);
  }, [inView]);

  return (
    // <Swiper slidesPerView={1} direction={'vertical'} mousewheel={true} modules={[Mousewheel]} className="slider">
    //   <SwiperSlide>
    //     <Banner />
    //   </SwiperSlide>
    //   <div ref={ref}>
    //     <SwiperSlide>
    //       <Products />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <Form />
    //     </SwiperSlide>
    //   </div>
    // </Swiper>
    <>
      <Banner />
      <div ref={ref}>
        <Products />
        <Form />
      </div>
    </>
  );
};

export default Main;
