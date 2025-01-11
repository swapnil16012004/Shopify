import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { MyContext } from "../../App";
import { useContext } from "react";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import newsLetterImg from "../../assets/images/coupon.png";
import { IoMailOutline } from "react-icons/io5";
// import Footer from "../../Components/Footer";

const Home = () => {
  const context = useContext(MyContext);

  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row homeProductsRow">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner1} alt="cursor" className="cursor w-100" />
                </div>

                <div className="banner mt-4">
                  <img src={banner2} alt="cursor" className="cursor w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center res-flex-column">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row w-100 mt-2">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={16}
                  navigation={true}
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
              <div className="d-flex align-items-center mt-2 ">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row productRow2 w-100 mt-4 d-flex productScroller ml-0 mr-0">
                {context.images.map((image) => (
                  <ProductItem
                    id={image.id}
                    hoverSrc={image.hoverSrc}
                    defaultSrc={image.defaultSrc}
                  />
                ))}
              </div>
              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src={banner3} alt="cursor" className="cursor w-100" />
                </div>
                <div className="banner">
                  <img src={banner4} alt="cursor" className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on <br />
                promotions and coupons.
              </p>
              <form>
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <button>Subscribe</button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={newsLetterImg} alt="newsLetterImg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
