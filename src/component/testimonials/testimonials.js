import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assest/avatar1.jpg';
import AVTR2 from '../../assest/avatar2.jpg';
import AVTR3 from '../../assest/avatar3.jpg';
import AVTR4 from '../../assest/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar : AVTR2,
    name : "Akshay Sir",
    review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur laborum, assumenda molestiae alias ipsa ad ut aperiam fuga vero sequi laboriosam, accusantium, nihil architecto optio natus numquam omnis aliquid veniam ullam perferendis eum. Nisi, corporis, debitis numquam unde officiis rem mollitia, saepe fugiat id distinctio magnam aliquid delectus ratione."
  },
  {
    avatar : AVTR2,
    name : "Atul Sir",
    review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur laborum, assumenda molestiae alias ipsa ad ut aperiam fuga vero sequi laboriosam, accusantium, nihil architecto optio natus numquam omnis aliquid veniam ullam perferendis eum. Nisi, corporis, debitis numquam unde officiis rem mollitia, saepe fugiat id distinctio magnam aliquid delectus ratione."
  },
  {
    avatar : AVTR4,
    name : "Meenu garg",
    review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur laborum, assumenda molestiae alias ipsa ad ut aperiam fuga vero sequi laboriosam, accusantium, nihil architecto optio natus numquam omnis aliquid veniam ullam perferendis eum. Nisi, corporis, debitis numquam unde officiis rem mollitia, saepe fugiat id distinctio magnam aliquid delectus ratione."
  },
  {
    avatar : AVTR2,
    name : "Arvind Jadon",
    review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur laborum, assumenda molestiae alias ipsa ad ut aperiam fuga vero sequi laboriosam, accusantium, nihil architecto optio natus numquam omnis aliquid veniam ullam perferendis eum. Nisi, corporis, debitis numquam unde officiis rem mollitia, saepe fugiat id distinctio magnam aliquid delectus ratione."
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review From Client</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

    >
  {   data.map(({avatar , name , review},index) => {
      return (
        <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar}  />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
        </SwiperSlide>
      )
     })}
    </Swiper>
    </section>
  )
}

export default testimonials