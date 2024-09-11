import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const client = [
  {
    image: patientAvatar,
    name: "John M. Rivera",
    des: "Global Healthcare was professional…. Adele was endearing and I felt comfortable talking to her and providing details about my MS",
  },
  {
    image: patientAvatar,
    name: "John M. Rivera",
    des: "Global Healthcare was professional…. Adele was endearing and I felt comfortable talking to her and providing details about my MS",
  },
  {
    image: patientAvatar,
    name: "John M. Rivera",
    des: "Global Healthcare was professional…. Adele was endearing and I felt comfortable talking to her and providing details about my MS",
  },
  {
    image: patientAvatar,
    name: "John M. Rivera",
    des: "Global Healthcare was professional…. Adele was endearing and I felt comfortable talking to her and providing details about my MS",
  },
  {
    image: patientAvatar,
    name: "John M. Rivera",
    des: "Global Healthcare was professional…. Adele was endearing and I felt comfortable talking to her and providing details about my MS",
  },
  {
    image: patientAvatar,
    name: "John M. Rivera",
    des: "Global Healthcare was professional…. Adele was endearing and I felt comfortable talking to her and providing details about my MS",
  },
  {
    image: patientAvatar,
    name: "John M. Rivera",
    des: "Global Healthcare was professional…. Adele was endearing and I felt comfortable talking to her and providing details about my MS",
  },
];

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <div>
          {client.map((user, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer bg-[#007EFF] card mt-[10px] rounded-[30px]"
            >
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img
                    className="h-[50px] w-[50px] rounded-md"
                    src={user.image}
                    alt="image"
                  />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-[white]">
                      {user.name}
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="md:text-[17px] md:font-semibold text-[white] md:pt-[20px] pt-[20px]">
                  {user.des}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
