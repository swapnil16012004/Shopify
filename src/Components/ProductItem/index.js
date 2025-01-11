import { TfiFullscreen } from "react-icons/tfi";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../../App";
import { useState } from "react";

const ProductItem = ({ itemView, id, hoverSrc, defaultSrc }) => {
  const context = useContext(MyContext);
  const viewProductDetails = () => {
    context.setIsOpenProductModal(true);
  };

  const [imageSrcs, setImageSrcs] = useState(
    context.images.reduce((acc, image) => {
      acc[image.id] = image.defaultSrc;
      return acc;
    }, {})
  );

  const handleMouseOver = (id, hoverSrc) => {
    setImageSrcs((prevSrcs) => ({
      ...prevSrcs,
      [id]: hoverSrc,
    }));
  };

  const handleMouseOut = (id, defaultSrc) => {
    setImageSrcs((prevSrcs) => ({
      ...prevSrcs,
      [id]: defaultSrc,
    }));
  };

  return (
    <>
      <div className={`productItem ${itemView}`}>
        <div
          key={id}
          className="imgWrapper"
          onMouseOver={() => handleMouseOver(id, hoverSrc)}
          onMouseOut={() => handleMouseOut(id, defaultSrc)}
        >
          <a href="/product/1" alt="product">
            <img src={imageSrcs[id]} alt="p1" className="w-100 imgName" />
            <div className="badge badge-primary">28%</div>
          </a>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <TfiFullscreen />
            </Button>
            <Button>
              <IoMdHeartEmpty style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>

        <div className="info">
          <a href="/product/1">
            <h4>Werther's Original Caramel Hard Candies</h4>
          </a>
          <span className="text-success d-block">In Stock</span>
          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            className="mt-2 mb-2"
            readOnly
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$14.00</span>
          </div>
        </div>
      </div>

      {/* <ProductModal /> */}
    </>
  );
};

export default ProductItem;
