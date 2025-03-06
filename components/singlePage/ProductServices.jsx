import classes from "./productServices.module.css";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

function ProductServices() {
  return (
    <div className={classes.services}>
      <span>
        <IoColorPaletteOutline size={22} />
        Compare color
      </span>
      <span>
        <GoQuestion size={22} />
        Ask a quesiton
      </span>
      <span>
        <CiDeliveryTruck size={22} />
        Delivery & return
      </span>
      <span>
        <IoShareSocialOutline size={22} />
        Share
      </span>
    </div>
  );
}

export default ProductServices;
