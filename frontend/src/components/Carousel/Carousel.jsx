import { Swiper, SwiperSlide } from "swiper/react";
import { PropTypes } from "prop-types";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */

import "./carousel.css";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel({
  europeanCities,
  restaurants,
  museums,
  parks,
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
      {europeanCities.map((europeanCity) => {
        return (
          <div>
            <SwiperSlide>
              <img
                className="EuropeanCitiesImage"
                src={europeanCity.img}
                alt="EuropeanImages"
              />
              <p className="CitiesName">{europeanCity.cityName} </p>
            </SwiperSlide>
          </div>
        );
      })}

      {restaurants.map((restaurant) => {
        return (
          <div>
            <SwiperSlide>
              <p>{restaurant.TypeName} </p>
            </SwiperSlide>
          </div>
        );
      })}

      {museums.map((museum) => {
        return (
          <div>
            <SwiperSlide>
              <p>{museum.TypeName} </p>
            </SwiperSlide>
          </div>
        );
      })}

      {parks.map((park) => {
        return (
          <div>
            <SwiperSlide>
              <p>{park.TypeName} </p>
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
}

Carousel.propTypes = {
  europeanCities: PropTypes.arrayOf(
    PropTypes.shape({
      cityName: PropTypes.string,
      img: PropTypes.string,
    })
  ),
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      TypeName: PropTypes.string,
    })
  ),
  museums: PropTypes.arrayOf(
    PropTypes.shape({
      TypeName: PropTypes.string,
    })
  ),
  parks: PropTypes.arrayOf(
    PropTypes.shape({
      TypeName: PropTypes.string,
    })
  ),
};

Carousel.defaultProps = {
  europeanCities: [],
  restaurants: [],
  museums: [],
  parks: [],
};
