import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

export default function Category() {
  return (
    <>
      <SectionTitle
        heading="---From 11:00am to 10:00pm---"
        subHeading="order online"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Keyboard]}
        className="mySwiper m-10 text-center"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="uppercase text-3xl -mt-10 text-white font-mono">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="uppercase text-3xl -mt-10 text-white font-mono">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="uppercase text-3xl -mt-10 text-white font-mono">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="uppercase text-3xl -mt-10 text-white font-mono">Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="uppercase text-3xl -mt-10 text-white font-mono">Salad</h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
