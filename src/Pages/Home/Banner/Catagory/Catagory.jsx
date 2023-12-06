
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../../assets/home/slide1.jpg'
import slider2 from '../../../../assets/home/slide2.jpg'
import slider3 from '../../../../assets/home/slide3.jpg'
import slider4 from '../../../../assets/home/slide4.jpg'
import slider5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../../Componante/Sectiontitle/SectionTitle';

const Catagory = () => {
    return (
       <section>
        <SectionTitle   
        
        subheading={"11am to 10pm"}
       heading={"Order Online"}
        >
       

        </SectionTitle>
         <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <p className=' uppercase text-center -mt-24 text-4xl text-white'>SALAD</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <p className=' uppercase text-center -mt-24 text-4xl text-white'>PiZZA</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <p className=' uppercase text-center -mt-24 text-4xl text-white'>SOUPS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <p className=' uppercase text-center -mt-24 text-4xl text-white'>DESSRPTS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <p className=' uppercase text-center -mt-24 text-4xl text-white'>HUNY</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <p className=' uppercase text-center -mt-24 text-4xl text-white'>SALAD</p>
        </SwiperSlide>
       
      </Swiper>
       </section>
    );
};

export default Catagory;