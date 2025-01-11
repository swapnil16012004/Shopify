import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 name navPart1">
              <div className="catWrapper">
                <Button
                  className="allCatTab align-items-center"
                  onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
                >
                  <span className="icon1 mr-2">
                    <IoIosMenu />
                  </span>
                  <span className="text">ALL CATEGORIES</span>
                  <span className="icon2 ml-2">
                    <FaAngleDown />
                  </span>
                </Button>
                <div
                  className={`sidebarNav ${
                    isOpenSidebarVal === true ? "open" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to={"/"}>
                        <Button>
                          men <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <Link to={"/"}>
                          <Button>clothing</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>footwear</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>watches</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>clothing</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>footwear</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>watches</Button>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>
                          women <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <Link to={"/"}>
                          <Button>clothing</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>footwear</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>watches</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>clothing</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>footwear</Button>
                        </Link>
                        <Link to={"/"}>
                          <Button>watches</Button>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>beauty</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>watches</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>kids</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>gift</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>men</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>women</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>beauty</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>watches</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>kids</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Button>gift</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-10 name navPart2 d-flex align-items-center">
              <ul className="list list-inline ml-auto">
                <li className="list-inline-item">
                  <Link to={"/"}>
                    <Button>Home</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/"}>
                    <Button>MEN</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to={"/"}>
                      <Button>clothing</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>footwear</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>watches</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>clothing</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>footwear</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>watches</Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to={"/"}>
                    <Button>WOMEN</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to={"/"}>
                      <Button>clothing</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>footwear</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>watches</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>clothing</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>footwear</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>watches</Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to={"/"}>
                    <Button>BEAUTY</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to={"/"}>
                      <Button>clothing</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>footwear</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>watches</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>clothing</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>footwear</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>watches</Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to={"/"}>
                    <Button>WATCHES</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to={"/"}>
                      <Button>clothing</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>footwear</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>watches</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>clothing</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>footwear</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>watches</Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to={"/"}>
                    <Button>KIDS</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/"}>
                    <Button>GIFT</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/"}>
                    <Button>BLOG</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/"}>
                    <Button>CONTACT</Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
