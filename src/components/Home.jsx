import React from 'react'
import HIIT from '../images/HIIT.jpg'
import Jog from '../images/jogging.jpg'
import Yoga from '../images/yoga.jpg'
// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function Home() {
    
  return (
      <div>
         <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={Jog}alt="Slide 2"  className='logo' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default Home











// <Swiper
// // install Swiper modules
// modules={[Navigation, Pagination, Scrollbar, A11y]}
// spaceBetween={50}
// slidesPerView={3}
// navigation
// pagination={{ clickable: true }}
// scrollbar={{ draggable: true }}
// onSwiper={(swiper) => console.log(swiper)}
// onSlideChange={() => console.log('slide change')}
// >
// <SwiperSlide> <img src={HIIT}alt="Slide 1"  className='logo' /></SwiperSlide>
// <SwiperSlide> <img src={Jog}alt="Slide 2"  className='logo' /></SwiperSlide>
// <SwiperSlide> <img src={Yoga}alt="Slide 3"  className='logo' /></SwiperSlide>
// <SwiperSlide>Slide 4</SwiperSlide>
// ...
// </Swiper>