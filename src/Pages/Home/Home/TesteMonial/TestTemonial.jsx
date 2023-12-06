
import SectionTitle from "../../../../Componante/Sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const TestTemonial = () => {
    const[revew,setrevew]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setrevew(data))
    },[])
    
    return (
        <section className="my-20">
            <SectionTitle 
            subheading={'---What Our Clients Say---'}
            heading={'TESTIMONIALS'}
            >

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
     {
        revew.map(revews=><SwiperSlide
        
        key={revews._id}
        >
            <div className="m-24 flex flex-col items-center my-6">
            <Rating 
      style={{ maxWidth: 180 }}
      value={revews.rating}
      readOnly
    />
                <p className="py-8">{revews.details}</p>
                <h3 className="text-2xl text-yellow-500 text-center" >{revews.name}</h3>
            </div>



        </SwiperSlide>)
     }
      </Swiper>
            
        </section>
    );
};

export default TestTemonial;