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
  museumsData,
  parksData,
  restaurantsData,
  barsData,
  nightclubsData,
  monumentsData,
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

      {restaurantsData.map((restaurantData) => {
        return (
          <div>
            <SwiperSlide>
              <div key={restaurantData.id}>{restaurantData.name}</div>
            </SwiperSlide>
          </div>
        );
      })}

      {barsData.map((barData) => {
        return (
          <div>
            <SwiperSlide>
              <div key={barData.id}>{barData.name}</div>
            </SwiperSlide>
          </div>
        );
      })}
      {museumsData.map((museumData) => {
        return (
          <div>
            <SwiperSlide>
              <p key={museumData.id}>{museumData.name} </p>
            </SwiperSlide>
          </div>
        );
      })}

      {nightclubsData.map((nightclubData) => {
        return (
          <div>
            <SwiperSlide>
              <p key={nightclubData.id}>{nightclubData.name} </p>
            </SwiperSlide>
          </div>
        );
      })}

      {parksData.map((parkData) => {
        return (
          <div>
            <SwiperSlide>
              <p key={parkData.id}>{parkData.name} </p>
            </SwiperSlide>
          </div>
        );
      })}

      {monumentsData
        .filter((monument) => {
          if (monument.name) return true;
          return false;
        })
        .map((monumentData) => {
          return (
            <div>
              <SwiperSlide>
                <p key={monumentData.id}>{monumentData.name} </p>
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
  museumsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  restaurantsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  barsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  nightclubsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  parksData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  monumentsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

Carousel.defaultProps = {
  europeanCities: [],
  museumsData: [],
  nightclubsData: [],
  parksData: [],
  restaurantsData: [],
  barsData: [],
  monumentsData: [],
};
