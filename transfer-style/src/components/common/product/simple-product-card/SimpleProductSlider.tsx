import { Autoplay,Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MiniProductSlider } from "@/components/pages";
import { miniProductSlider } from "@/mock/miniProductSlider";
import { SimpleProductCard } from "../product-card";
import next from "next";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props{
  sliderData: Array<EntityType<ProductType>>;
  nextEl?: string;
  prevEl?: string;
}


export function SimpleProductSlider({sliderData,nextEl,prevEl}:Props) {
  return (
    <Swiper
           spaceBetween={16}
            slidesPerView={2}
            autoplay={false}
           
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl:nextEl,
              prevEl:prevEl

      }}
      breakpoints={
        {
          768: {
            slidesPerView: 3,
            spaceBetween: 18
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 22
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 24
          }
        }
  }

        
      
        >
            
            {
              sliderData.map((sliderData,index) => {
                    return (
                        <SwiperSlide key={index} >
                        <SimpleProductCard data={sliderData} />
                        </SwiperSlide>
                        
                    );
                })
            }
            </Swiper>
      
    );
}

