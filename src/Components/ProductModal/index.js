import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import QuantityBox from "../QuantityBox";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";
import { IoCartSharp } from "react-icons/io5";

const ProductModal = (props) => {
  const context = useContext(MyContext);

  return (
    <>
      <Dialog
        open={true}
        className="ProductModal"
        onClose={() => context.setIsOpenProductModal(false)}
      >
        <Button
          className="close_"
          onClick={() => context.setIsOpenProductModal(false)}
        >
          <MdClose />
        </Button>
        <h4 class="mb-1 font-weight-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>

          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>

        <hr />

        <div className="row mt-2 productDetaileModal">
          <div className="col-md-5">
            <ProductZoom />
          </div>

          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">$9.35</span>
              <span className="netPrice text-danger lg">$7.25</span>
            </div>
            <span className="badge bg-success">IN STOCK</span>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              perferendis natus autem, nostrum rerum asperiores eos tenetur
              harum quae, accusantium excepturi.
            </p>
            <div className="d-flex align-items-center">
              <QuantityBox />

              <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                <IoCartSharp /> Add to Cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-5 actions">
              <Button variant="outlined" className="btn-round btn-sml">
                <IoIosHeartEmpty /> &nbsp; ADD TO WISHLIST
              </Button>

              <Button variant="outlined" className="btn-round btn-sml ml-3">
                <MdOutlineCompareArrows /> &nbsp; ADD TO COMPARE
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
