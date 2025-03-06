import classes from "./productButtons.module.css";
import CustomTooltip from "../ui/CustomTooltip";
import { RiShoppingBag2Line, RiArrowLeftRightLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

function ProductButtons({ addToCartBtn }) {
  return (
    <div className={`${classes.wrapper} ${addToCartBtn && classes.space}`}>
      {!addToCartBtn && (
        <CustomTooltip title="Add to cart" placement="top">
          <div className={`${classes.button} ${classes.bag}`}>
            <RiShoppingBag2Line size={20} />
          </div>
        </CustomTooltip>
      )}
      <CustomTooltip title="Add to wishlist" placement="top">
        <div className={`${classes.button} ${classes.none}`}>
          <FaRegHeart size={20} />
        </div>
      </CustomTooltip>
      <CustomTooltip title="Add to compare" placement="top">
        <div className={`${classes.button} ${classes.none}`}>
          <RiArrowLeftRightLine size={20} />
        </div>
      </CustomTooltip>
      <CustomTooltip title="Quick view" placement="top">
        <div className={`${classes.button} ${classes.eye}`}>
          <AiOutlineEye size={20} />
        </div>
      </CustomTooltip>
    </div>
  );
}

export default ProductButtons;
