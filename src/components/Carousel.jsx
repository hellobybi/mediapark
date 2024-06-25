import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination,Autoplay} from "swiper/modules"
import "swiper/swiper-bundle.css";


export function Carousel(){
    return(
        <div className="p-3 mt-[-30px] lg:mt-0">
            <Swiper className=" max-w-[1420px] mx-auto"
            loop={true}
            slidesPerView={1}
            autoplay={{
                delay:10000,
                pauseOnMouseEnter:true
            }}
            pagination={{
                clickable:true
            }} 
            navigation={true} 
            modules={[Navigation,Pagination,Autoplay]}>
                <SwiperSlide>
                    <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/4e828d05-137a-48d3-a0b3-29c766715905_Rus-(2).webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/38511298-17e5-4986-8bf9-9084bbd8e22e_Web-Ru-(3).webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/c5989cde-0819-4a7a-937c-eb2f1c6fa93f_Web-RUS-(18).webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/91dca206-dd21-482d-ae98-fc86741ee967_%D1%80%D1%83%D1%81_-(3).webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/96a7a0d7-4ac1-4da0-ae9a-c3eefe85d958_WEB-Rus-(13).webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/fc4daf9c-d81c-4e16-b000-cbaf9970962e_Web-Ru-(2).webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/da44d751-c442-44cc-9fee-69c0a96fac16_Web-RU-(4).webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/bf08c8a3-ffd4-4625-a269-505137811a4b_Web-Rus-(14).webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/295fb84d-c105-43ce-9781-e4806308cf87_Web-Ru.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-[100%]" src="https://cdn.mediapark.uz/imgs/4ab31723-a0e2-4081-8e6f-f90050ef59ff_Web-Rus-(15).webp" alt="" />
                </SwiperSlide>
            </Swiper>
         </div>
    )
}