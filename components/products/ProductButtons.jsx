import classes from "./productButtons.module.css";
import CustomTooltip from "../ui/CustomTooltip";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { RiShoppingBag2Line, RiArrowLeftRightLine } from "react-icons/ri";

function ProductButtons({ addToCartBtn, isInGrid, gridValue, showButtons }) {
  const hasFullWidth = gridValue === "grid-1";

  return (
    <div
      className={`${classes.wrapper} ${
        hasFullWidth
          ? ""
          : showButtons
          ? classes.normalShow
          : classes.normalWidth
      }`}
    >
      {!addToCartBtn && (
        <CustomTooltip title="Add to cart" placement="top">
          <div
            className={`${classes.button} ${
              hasFullWidth
                ? classes.secondary
                : isInGrid
                ? classes.small
                : classes.primary
            } ${showButtons ? classes.bag : ""}`}
          >
            <RiShoppingBag2Line size={20} />
          </div>
        </CustomTooltip>
      )}
      <CustomTooltip title="Add to wishlist" placement="top">
        <div
          className={`${classes.button} ${
            hasFullWidth
              ? classes.secondary
              : isInGrid
              ? classes.small
              : classes.primary
          } ${showButtons ? classes.heart : ""} ${classes.none}`}
        >
          <FaRegHeart size={20} />
        </div>
      </CustomTooltip>
      <CustomTooltip title="Add to compare" placement="top">
        <div
          className={`${classes.button} ${
            hasFullWidth
              ? classes.secondary
              : isInGrid
              ? classes.small
              : classes.primary
          } ${showButtons ? classes.compare : ""} ${classes.none}`}
        >
          <RiArrowLeftRightLine size={20} />
        </div>
      </CustomTooltip>
      <CustomTooltip title="Quick view" placement="top">
        <div
          className={`${classes.button} ${
            hasFullWidth
              ? classes.secondary
              : isInGrid
              ? classes.small
              : classes.primary
          } ${showButtons ? classes.eye : ""}`}
        >
          <AiOutlineEye size={20} />
        </div>
      </CustomTooltip>
    </div>
  );
}

export default ProductButtons;
