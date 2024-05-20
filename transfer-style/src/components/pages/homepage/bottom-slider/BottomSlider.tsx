import { getAllProductApiCall } from "@/api/Product";
import { ProductVerticalList, SimpleProductCard } from "@/components/common";
import { RecentlyAddedMock } from "@/mock/RecentlyAdded";
import { TopRatedMock } from "@/mock/TopRated";
import { TopSellingMock } from "@/mock/TopSelling";
import { TrendingProductsMock } from "@/mock/TrendingProducts";
import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { useQueries, useQuery } from "@tanstack/react-query";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { InView, useInView } from "react-intersection-observer";

interface Props{
  sliderData: Array<any>;
  
}

export function BottomSlider({ sliderData }: Props) {
    const { data:topRateData } = useQuery<ApiResponseType<ProductType>>({ 
    queryKey: [getAllProductApiCall.name,'top_rate'],
    queryFn: () => getAllProductApiCall({ populate: ["thumbnail"], sort:["rate:desc"],pagination:{page:1,pageSize:3} })
    });
  
  console.log('topRateData',topRateData);
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
           <ProductVerticalList title={'Recently Added'} data={RecentlyAddedMock} />
         </SwiperSlide> 
         <SwiperSlide>
           
             <InView as="div" onChange={(inView, entry) => console.log("Inview:", inView)}>
                 <ProductVerticalList title={'Top Rated'} data={TopRatedMock} />
             </InView>
         </SwiperSlide> 
          </Swiper>

       
      
       
       
      
      </>
      
     );
};
