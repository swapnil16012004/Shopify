import { HiArrowLongRight } from "react-icons/hi2";

const OverlayBanner = ({ per, mainText, price }) => {
  return (
    <>
      <div className="overlayContainer">
        <div className="content-header">
          <span className="header-text1">exclusive offer</span>
          <span className="header-text2">-{per}% off</span>
        </div>
        <div className="content-main">
          <h3 className="main-text1">{mainText}</h3>
          <div className="main-text2">Only this week. Don't miss...</div>
        </div>
        <div className="content-footer">
          <span className="footer-text1">from</span>&nbsp;&nbsp;
          <span className="footer-text2">${price}</span>
        </div>
        <button className="btn btn-primary btn-text">
          Shop Now
          <HiArrowLongRight className="btn-text-icon" />
        </button>
      </div>
    </>
  );
};

export default OverlayBanner;
