import classes from "./productBuyPrice.module.css";
import CustomTooltip from "../ui/CustomTooltip";
import { formatPrice } from "@/utils/helpers";
import { FaRegHeart } from "react-icons/fa";
import { RiArrowLeftRightLine } from "react-icons/ri";

function ProductBuyPrice({ quantity, finalPrice }) {
  return (
    <div className={classes.box}>
      <div className={classes.top}>
        <button className={classes.add}>
          Add to cart - {formatPrice(finalPrice * quantity)}
        </button>
        <div className={classes.icons}>
          <CustomTooltip title="Add to wishlist" placement="top">
            <div className={classes.icon}>
              <FaRegHeart size={22} />
            </div>
          </CustomTooltip>
          <CustomTooltip title="Add to compare" placement="top">
            <div className={classes.icon}>
              <RiArrowLeftRightLine size={22} />
            </div>
          </CustomTooltip>
        </div>
      </div>
      <button className={classes.buy}>BUY IT NOW</button>
    </div>
  );
}

export default ProductBuyPrice;
