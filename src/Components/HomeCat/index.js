import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Fashion from "../../assets/images/shopify images/1.png";
import Electronics from "../../assets/images/shopify images/2.png";
import Bags from "../../assets/images/shopify images/3.png";
import Footwear from "../../assets/images/shopify images/4.png";
import Groceries from "../../assets/images/shopify images/5.png";
import Beauty from "../../assets/images/shopify images/6.png";
import Wellness from "../../assets/images/shopify images/7.png";
import Jewellery from "../../assets/images/shopify images/8.png";

const HomeCat = () => {
  const [catImages, setCatImages] = useState([
    {
      item: "#ecffec",
      img: Fashion,
      name: "Fashion",
    },
    {
      item: "#feefea",
      img: Electronics,
      name: "Electronics",
    },
    {
      item: "#fdf0ff",
      img: Bags,
      name: "Bags",
    },
    {
      item: "#def3ff",
      img: Footwear,
      name: "Footwear",
    },
    {
      item: "#ffe8f8",
      img: Groceries,
      name: "Groceries",
    },
    {
      item: "#e3fffa",
      img: Beauty,
      name: "Beauty",
    },
    {
      item: "#fff3ff",
      img: Wellness,
      name: "Wellness",
    },
    {
      item: "#feefea",
      img: Jewellery,
      name: "Jewellery",
    },
  ]);

  return (
    <>
      <section className="homeCat">
        <div className="container">
          <div className="mb-3 hd">Featured Categories</div>
          <Swiper
            slidesPerView={8}
            spaceBetween={8}
            navigation={false}
            slidesPerGroup={0}
            modules={[Navigation]}
            className="mySwiper"
          >
            {catImages?.map((group) => {
              return (
                <SwiperSlide>
                  <a href="/cat/1" alt="category">
                    <div
                      className="item text-center cursor"
                      style={{ background: group.item }}
                    >
                      <img src={group.img} alt="1" />
                    </div>
                    <h6>{group.name}</h6>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeCat;
