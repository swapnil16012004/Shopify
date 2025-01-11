import React from "react";
import Slider from "react-slick";
import OverlayBanner from "../OverlayBanner";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <>
      <div className="container mt-3">
        <div className="homeBannerSection">
          <Slider {...settings}>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-6.jpg"
                className="w-100"
                alt="banner"
              />
              <OverlayBanner
                per={20}
                mainText={"A different kind of grocery store"}
                price={7.99}
              />
            </div>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-7.jpg"
                className="w-100"
                alt="banner"
              />
              <OverlayBanner
                per={40}
                mainText={"Quality Freshness Guaranteed!"}
                price={14.35}
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
