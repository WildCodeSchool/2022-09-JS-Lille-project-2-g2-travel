/* eslint-disable no-shadow */
import { Swiper, SwiperSlide } from "swiper/react";
import { PropTypes } from "prop-types";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

import "./carousel.css";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel({ EuropeanCities }) {
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      breakpoints={{
        600: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {EuropeanCities.map((EuropeanCities) => {
        return (
          <div>
            <SwiperSlide>
              <img
                className="EuropeanCitiesImage"
                src={EuropeanCities.img}
                alt="EuropeanImages"
              />
              <p className="CitiesName">{EuropeanCities.cityName} </p>
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
}

Carousel.propTypes = {
  EuropeanCities: PropTypes.arrayOf(
    PropTypes.shape({
      cityName: PropTypes.string,
      img: PropTypes.string,
    })
  ),
};

Carousel.defaultProps = {
  EuropeanCities: [],
};
