import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";
import { IoBagCheckOutline } from "react-icons/io5";
import one from "../../assets/images/products/11.jpg";
import two from "../../assets/images/products/21.jpg";
import three from "../../assets/images/products/31.webp";
import four from "../../assets/images/products/41.webp";
import five from "../../assets/images/products/51.webp";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd mb-1">Your Cart</h2>
          <p>
            There are <b className="text-red">3</b> products in your cart
          </p>
          <div className="row">
            <div className="col-md-9 pr-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width={"35%"}>Product</th>
                      <th width={"15%"}>Unit Price</th>
                      <th width={"25%"} className="text-center">
                        Quantity
                      </th>
                      <th width={"15%"}>Subtotal</th>
                      <th width={"10%"}>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width={"35%"}>
                        <Link to={"/product/1"}>
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="img_rapper">
                              <img src={one} alt="1" />
                            </div>
                            <div className="info px-3 text-justify">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <Rating
                                name="read-only"
                                value={5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td className="quantity text-center">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <QuantityBox />
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td width={"10%"} className="text-center">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width={"35%"}>
                        <Link to={"/product/1"}>
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="img_rapper">
                              <img src={two} alt="1" />
                            </div>
                            <div className="info px-3 text-justify">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <Rating
                                name="read-only"
                                value={5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td className="quantity text-center">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <QuantityBox />
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td width={"10%"} className="text-center">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width={"35%"}>
                        <Link to={"/product/1"}>
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="img_rapper">
                              <img src={three} alt="1" />
                            </div>
                            <div className="info px-3 text-justify">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <Rating
                                name="read-only"
                                value={5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td className="quantity text-center">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <QuantityBox />
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td width={"10%"} className="text-center">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width={"35%"}>
                        <Link to={"/product/1"}>
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="img_rapper">
                              <img src={four} alt="1" />
                            </div>
                            <div className="info px-3 text-justify">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <Rating
                                name="read-only"
                                value={5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td className="quantity text-center">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <QuantityBox />
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td width={"10%"} className="text-center">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width={"35%"}>
                        <Link to={"/product/1"}>
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="img_rapper">
                              <img src={five} alt="1" />
                            </div>
                            <div className="info px-3 text-justify">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <Rating
                                name="read-only"
                                value={5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td className="quantity text-center">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <QuantityBox />
                      </td>
                      <td width={"15%"}>&nbsp;&nbsp;&nbsp;$7.25</td>
                      <td width={"10%"} className="text-center">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border p-3 cartDetails">
                <h4>CART TOTALS</h4>
                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ml-auto text-red font-weight-bold">
                    $12.31
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Shipping</span>
                  <span className="ml-auto">
                    <b>Free</b>
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Estimate for</span>
                  <span className="ml-auto">
                    <b>United Kingdom</b>
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span>Total</span>
                  <span className="ml-auto text-red font-weight-bold">
                    $12.31
                  </span>
                </div>
                <br />
                <Button className="btn-blue btn-lg btn-big">
                  <IoBagCheckOutline /> &nbsp; Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
