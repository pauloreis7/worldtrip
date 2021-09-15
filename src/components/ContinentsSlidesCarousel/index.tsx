import { Flex } from "@chakra-ui/react";
import SwiperCore, { Autoplay, Lazy, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import { SlideItem } from './SlideItem'
import { CustomSlideNavigatorIcon } from './CustomSlideNavigatorIcon'

import "swiper/css";
import "swiper/css/lazy"
import "swiper/css/pagination"
import "swiper/css/navigation"

SwiperCore.use([Autoplay, Lazy, Pagination, Navigation, Scrollbar, A11y]);

export function ContinentsSlidesCarousel() {
  return (
    <Flex
      w="100%"
      maxWidth="6xl"
      mx="auto"
      position="relative"
    >
      <CustomSlideNavigatorIcon iconDirection="left" />

      <CustomSlideNavigatorIcon iconDirection="right" />

      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: "#custom_next",
          prevEl: "#custom_prev",
        }}
        pagination={{
          clickable: true,
        }} 
        lazy={true} 
        autoplay={{
          delay: 7000,
        }}
      >
        
        <SwiperSlide>
          <SlideItem 
            href={`/continents/northAmerica-a5ec`}
            title="North America"
            summary="The most commercial continent"
            imageSource="https://images.unsplash.com/photo-1558219902-b516d119d0bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideItem 
            href={`/continents/southAmerica-398a`}
            title="South America"
            summary="The most natural continent"
            imageSource="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideItem 
            href={`/continents/europe-a713`}
            title="Europe"
            summary="The oldest continent"
            imageSource="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=779&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideItem 
            href={`/continents/asia-3ff4`}
            title="Asia"
            summary="The most cultural continent"
            imageSource="https://images.unsplash.com/photo-1621415814107-4595c7b2b4fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=854&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideItem 
            href={`/continents/africa-d202`}
            title="Africa"
            summary="The most colorful continent"
            imageSource="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideItem 
            href={`/continents/oceania-75be`}
            title="Oceania"
            summary="The newest continent"
            imageSource="https://images.unsplash.com/photo-1595263187083-1334b774dfb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}