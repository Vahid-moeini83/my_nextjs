import classes from "./productButtons.module.css";
import CustomTooltip from "../ui/CustomTooltip";
import { RiShoppingBag2Line, RiArrowLeftRightLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

function ProductButtons({ addToCartBtn, isInGrid }) {
  return (
    <div className={`${classes.wrapper} ${addToCartBtn && classes.space}`}>
      {!addToCartBtn && (
        <CustomTooltip title="Add to cart" placement="top">
          <div
            className={`${classes.button} ${classes.bag} ${
              isInGrid ? classes.small : ""
            }`}
          >
            <RiShoppingBag2Line size={20} />
          </div>
        </CustomTooltip>
      )}
      <CustomTooltip title="Add to wishlist" placement="top">
        <div
          className={`${classes.button} ${classes.none} ${
            isInGrid ? classes.small : ""
          }`}
        >
          <FaRegHeart size={20} />
        </div>
      </CustomTooltip>
      <CustomTooltip title="Add to compare" placement="top">
        <div
          className={`${classes.button} ${classes.none} ${
            isInGrid ? classes.small : ""
          }`}
        >
          <RiArrowLeftRightLine size={20} />
        </div>
      </CustomTooltip>
      <CustomTooltip title="Quick view" placement="top">
        <div
          className={`${classes.button} ${classes.eye} ${
            isInGrid ? classes.small : ""
          }`}
        >
          <AiOutlineEye size={20} />
        </div>
      </CustomTooltip>
    </div>
  );
}

export default ProductButtons;
