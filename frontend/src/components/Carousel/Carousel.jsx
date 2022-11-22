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
          <div key={europeanCities.id}>
            <SwiperSlide key={europeanCities.id}>
              <img
                className="image"
                src={europeanCity.img}
                alt="EuropeanImages"
              />
              <p className="name">{europeanCity.cityName} </p>
            </SwiperSlide>
          </div>
        );
      })}

      {restaurantsData.map((restaurantData) => {
        return (
          <div key={restaurantData.id}>
            <SwiperSlide key={restaurantData.id}>
              <p className="name">{restaurantData.name}</p>
            </SwiperSlide>
          </div>
        );
      })}

      {barsData.map((barData) => {
        return (
          <div key={barData.id}>
            <SwiperSlide key={barData.id}>
              <div className="name">{barData.name}</div>
            </SwiperSlide>
          </div>
        );
      })}
      {museumsData.map((museumData) => {
        return (
          <div key={museumData.id}>
            <SwiperSlide key={museumData.id}>
              <p className="name">{museumData.name} </p>
            </SwiperSlide>
          </div>
        );
      })}
      {nightclubsData.map((nightclubData) => {
        return (
          <div key={nightclubData.id}>
            <SwiperSlide key={nightclubData.id}>
              <p className="name">{nightclubData.name} </p>
            </SwiperSlide>
          </div>
        );
      })}
      {parksData.map((parkData) => {
        return (
          <div key={parkData.id}>
            <SwiperSlide key={parkData.id}>
              <p className="name">{parkData.name} </p>
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
            <div key={monumentData.id}>
              <SwiperSlide key={monumentData.id}>
                <p className="name">{monumentData.name} </p>
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
      id: PropTypes.number,
    })
  ),
  museumsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      img: PropTypes.string,
    })
  ),
  restaurantsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      img: PropTypes.string,
    })
  ),

  barsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      img: PropTypes.string,
    })
  ),
  nightclubsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      img: PropTypes.string,
    })
  ),
  parksData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      img: PropTypes.string,
    })
  ),
  monumentsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      img: PropTypes.string,
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
