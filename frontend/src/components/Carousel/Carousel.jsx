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

export default function Carousel({
  EuropeanCities,
  Restaurants,
  Museums,
  Park,
}) {
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

      {Restaurants.map((Restaurants) => {
        return (
          <div>
            <SwiperSlide>
              <p>{Restaurants.TypeName} </p>
            </SwiperSlide>
          </div>
        );
      })}

      {Museums.map((Museums) => {
        return (
          <div>
            <SwiperSlide>
              <p>{Museums.TypeName} </p>
            </SwiperSlide>
          </div>
        );
      })}

      {Park.map((Park) => {
        return (
          <div>
            <SwiperSlide>
              <p>{Park.TypeName} </p>
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
  Restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      TypeName: PropTypes.string,
    })
  ),
  Museums: PropTypes.arrayOf(
    PropTypes.shape({
      TypeName: PropTypes.string,
    })
  ),
  Park: PropTypes.arrayOf(
    PropTypes.shape({
      TypeName: PropTypes.string,
    })
  ),
};

Carousel.defaultProps = {
  EuropeanCities: [],
  Restaurants: [],
  Museums: [],
  Park: [],
};
