import { ProductVerticalList, SimpleProductCard } from "@/components/common";
import { RecentlyAddedMock } from "@/mock/RecentlyAdded";
import { TopRatedMock } from "@/mock/TopRated";
import { TopSellingMock } from "@/mock/TopSelling";
import { TrendingProductsMock } from "@/mock/TrendingProducts";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props{
  sliderData: Array<any>;
  
}

export function BottomSlider({sliderData}:Props) {
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
            slidesPerView: 2,
            spaceBetween: 18
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22
          },

           1288: {
            slidesPerView: 4,
            spaceBetween: 22
          }
        }
      }     
        >
            
            
          <SwiperSlide>
           <ProductVerticalList title={'Top Selling'} data={TopSellingMock} />
         </SwiperSlide>   
         
          <SwiperSlide>
           <ProductVerticalList title={'Trending  Products'} data={TrendingProductsMock} />
         </SwiperSlide>     
         
          <SwiperSlide>
           <ProductVerticalList title={'Top Rated'} data={TopRatedMock} />
         </SwiperSlide> 

         <SwiperSlide>
           <ProductVerticalList title={'Recently Added'} data={RecentlyAddedMock} />
         </SwiperSlide> 
          </Swiper>

       
      
       
       
      
      </>
      
     );
};
