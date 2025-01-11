import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../../Components/ProductItem";
import { MyContext } from "../../../App";
import { useContext } from "react";

const RelatedProducts = ({ title }) => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="d-flex align-items-center mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd">{title}</h3>
        </div>
      </div>
      <div className="product_row w-100 mt-0 check1">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          navigation={false}
          slidesPerGroup={3}
          modules={[Navigation]}
          className="mySwiper"
        >
          {context.images.map((image) => (
            <SwiperSlide>
              <ProductItem
                id={image.id}
                hoverSrc={image.hoverSrc}
                defaultSrc={image.defaultSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default RelatedProducts;
