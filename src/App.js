import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModal from "../src/Components/ProductModal";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

import one1 from "./assets/images/products/11.jpg";
import one2 from "./assets/images/products/12.jpg";
import two1 from "./assets/images/products/21.jpg";
import two2 from "./assets/images/products/22.jpg";
import three1 from "./assets/images/products/31.webp";
import three2 from "./assets/images/products/32.jpg";
import four1 from "./assets/images/products/41.webp";
import four2 from "./assets/images/products/42.jpg";
import five1 from "./assets/images/products/51.webp";
import five2 from "./assets/images/products/52.webp";
import six1 from "./assets/images/products/61.webp";
import six2 from "./assets/images/products/62.jpg";
import seven1 from "./assets/images/products/71.webp";
import seven2 from "./assets/images/products/72.webp";
import eight1 from "./assets/images/products/81.webp";
import eight2 from "./assets/images/products/82.webp";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    // const responsive =
    await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };

  const images = [
    {
      id: 1,
      defaultSrc: one1,
      hoverSrc: one2,
    },
    {
      id: 2,
      defaultSrc: two1,
      hoverSrc: two2,
    },
    {
      id: 3,
      defaultSrc: three1,
      hoverSrc: three2,
    },
    {
      id: 4,
      defaultSrc: four1,
      hoverSrc: four2,
    },
    {
      id: 5,
      defaultSrc: five1,
      hoverSrc: five2,
    },
    {
      id: 6,
      defaultSrc: six1,
      hoverSrc: six2,
    },
    {
      id: 7,
      defaultSrc: seven1,
      hoverSrc: seven2,
    },
    {
      id: 8,
      defaultSrc: eight1,
      hoverSrc: eight2,
    },
  ];

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    setIsOpenProductModal,
    isOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
    images,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route
            path="/product/:id"
            exact={true}
            element={<ProductDetails />}
          />
          <Route path="/cart" exact={true} element={<Cart />} />
          <Route path="/signIn" exact={true} element={<SignIn />} />
          <Route path="/signUp" exact={true} element={<SignUp />} />
        </Routes>
        {isHeaderFooterShow === true && <Footer />}
        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
