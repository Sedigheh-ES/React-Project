import { SimpleProductCard } from "@/components/common";
import { PropductDealCards } from "@/components/common/";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props{
  sliderData: Array<EntityType<ProductType>>;
  
}

export function DealsOfTheDay({sliderData}:Props) {
  return (
    <>
    <Swiper
           spaceBetween={16}
            slidesPerView={2}
            autoplay={true}     
            modules={[Autoplay]}
            
      breakpoints={
        {
          768: {
            slidesPerView: 3,
            spaceBetween: 18
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 22
          }
        }
      }     
        >
            
            {
              sliderData.map((sliderData,index) => {
                    return (
                        <SwiperSlide key={index} >
                        <PropductDealCards data={sliderData}/>
                        </SwiperSlide>
                        
                    );
                })
            }
      </Swiper>
      
      </>
      
     );
};

