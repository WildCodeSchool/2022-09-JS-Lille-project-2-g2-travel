/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
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
      <SwiperSlide>
        <img
          alt="Barcelona"
          src="https://barcelonesite.fr/images/barcelona_2.jpg"
        />
        <p className="text-block">Barcelona</p>
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Nantes"
          src="https://www.flycorsair.com/sites/default/files/2022-06/AdobeStock_299134759_Editorial_Use_Only%20Nantes%20compresse.jpg"
        />
        <p className="text-block">Nantes</p>
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Amsterdam"
          src="https://www.voyageavecnous.fr/wp-content/uploads/2018/04/Amsterdam-card-ou-holland-pass.jpg"
        />
        <p className="text-block">Amsterdam</p>
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Rome"
          src="https://www.wanderlustchloe.com/wp-content/uploads/2020/10/Colosseum-Rome.jpg"
        />
        <p className="text-block">Rome</p>
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Lisboa"
          src="https://th.bing.com/th/id/R.bb2dfe5efb010e87bd4b6c6e580cac6f?rik=TVr5duw1VJoAbA&pid=ImgRaw&r=0"
        />
        <p className="text-block">Lisboa</p>
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Stockholm"
          src="https://www.cityzeum.com/images/guides/default/sept2018/ph_1302.jpg"
        />
        <p className="text-block">Stockholm</p>
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Berlin"
          src="https://th.bing.com/th/id/R.9cb5947a24e0f0177a387e198a1bc138?rik=isgVnrtplrOBGg&riu=http%3a%2f%2fwww.slate.com%2fcontent%2fdam%2fslate%2farticles%2fnews_and_politics%2froads%2f2016%2f04%2f160414_RK_Berlin.jpg.CROP.promo-xlarge2.jpg&ehk=CpjFM2B40Pl%2b%2b3Lc%2b1JjWo1QWYcOb65Sc1HmES4ErOI%3d&risl=&pid=ImgRaw&r=0"
        />
        <p className="text-block">Berlin</p>
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Prague"
          src="https://www.triptipedia.com/tip/img/TmuZxaBzp.jpg"
        />
        <p className="text-block">Prague</p>
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Athenes"
          src="https://evasion-online.com/image-photo/athenes/Athene_Grece-1.jpg"
        />
        <p className="text-block">Athenes</p>
      </SwiperSlide>
    </Swiper>
  );
}
