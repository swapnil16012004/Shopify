import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import QuantityBox from "../../Components/QuantityBox";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);

  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>

            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands : </span>
                    <span>Welch's</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      precision={0.5}
                      value={4.5}
                      size="small"
                      readOnly
                    />
                    <span className="text-light cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex align-items-center info mb-3">
                <span className="oldPrice">Rs: 2000</span>
                <span className="netPrice text-danger ml-2">Rs: 1500</span>
              </div>
              <span className="badge badge-success">IN STOCK</span>
              <p className="mt-3">
                Rs: Rs: Kurta: The kurta is the top piece, which is a long
                tunic-style garment that can vary in length, sleeve style, and
                neckline. In this set, it is made from rayon fabric, which is
                known for its softness, smooth texture, and breathability. Rayon
                kurta often comes in a variety of prints, patterns, and colors,
                catering to different tastes and occasio.
              </p>
              <div className="productSize d-flex align-items-center">
                <span>Size:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      M
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      L
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      XL
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      XXL
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center mt-3 ">
                <QuantityBox />

                <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                  <BsCartFill /> &nbsp; Add To Cart
                </Button>
                <Tooltip title="Add to Wishlist" placement="top">
                  <Button
                    variant="outlined"
                    className="btn-round btn-sml btn-circle ml-4"
                  >
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to Compare" placement="top">
                  <Button
                    variant="outlined"
                    className="btn-round btn-sml btn-circle ml-2"
                  >
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
          <br />
          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews (3)
                  </Button>
                </li>
              </ul>

              <br />

              {activeTabs === 0 && (
                <div className="tabContent">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque neque voluptatem necessitatibus labore. Rem officiis
                  repellendus ut veniam tempore incidunt quasi quis earum optio
                  nostrum eaque adipisci nisi, asperiores fuga. Maiores aperiam,
                  hic ratione qui, rerum, sed quia beatae aliquam voluptatum
                  officia itaque est molestias quis tempore! Odio aspernatur
                  quis et veritatis unde maxime at tenetur neque? Praesentium,
                  eum! Nulla.
                </div>
              )}

              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35" L x 24"W x 37-45"H(front to back)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5" L x 18.5"W x 16.5"H</p>
                          </td>
                        </tr>
                        <tr className="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5" L x 24"W x 18.5"H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr className="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                        <tr className="handle-height-ground-to-handle">
                          <th>Handle Height (ground to handle)</th>
                          <td>
                            <p>37-45"</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12" air/wide track slick tread</p>
                          </td>
                        </tr>
                        <tr className="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5"</p>
                          </td>
                        </tr>
                        <tr className="head-room-inside-canopy">
                          <th>head-room-inside-canopy</th>
                          <td>
                            <p>25"</p>
                          </td>
                        </tr>
                        <tr className="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr className="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>customer questions and answers</h3>
                      <br />

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                              alt="1"
                            />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            Swapnil Pawar
                          </span>
                        </div>
                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-light">01/03/1993</h5>
                            <div className="ml-auto">
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Error odio cumque repellat harum impedit magni
                            dolorem quo nulla minima libero at rerum,
                            dignissimos inventore, et quisquam corrupti fugit
                            eos! Error. Aliquam ab repellat qui esse obcaecati
                            hic, deleniti architecto tempora, enim nemo
                            suscipit, ratione asperiores illo! Repellat
                            voluptatibus aperiam quod, est nam minima
                            accusantium vel, ex maxime qui provident eligendi.
                          </p>
                        </div>
                      </div>

                      <br className="res-hide" />
                      <br className="res-hide" />

                      <form className="reviewForm">
                        <h4>Add a review</h4>
                        <div className="form-group">
                          <textarea
                            name="review"
                            className="form-control"
                            placeholder="Write a Review"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="userName"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="rating"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <Button
                            type="submit"
                            className="btn-blue btn-lg btn-big btn-round"
                          >
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <br />

          <RelatedProducts title={"RELATED PRODUCTS"} />
          <RelatedProducts title={"RECENTLY VIEWED PRODUCTS"} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
