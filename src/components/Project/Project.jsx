import React from 'react'
import { Data } from "./Data"
import './Project.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'

const Project = () => {
  return (
    <section className="project container section" id='projects'>
        <h2 className="section__title">
            Projects
        </h2>
        <span className="section__subtitle">Courses / Projects</span>
        <Swiper className="project__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576:{
                    slidesPerView:2,
                },
                768:{
                    slidesPerView:2,
                    spaceBetween: 48,
                },
            }}
            modules={[Pagination]}
        >
            {Data.map(({id, image, title, link, code})=>
            {
                return(
                    <SwiperSlide className="project__card" key={id}>
                        <img src={image} alt="" className="project__img" />

                        <h3 className="project__name">{title}</h3>
                        <div className="project__links">
                            <a href={link} target='blank' className="project__link"> Demo</a>
                            <a href={code} target='blank' className="project__link"> Github</a>

                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Project