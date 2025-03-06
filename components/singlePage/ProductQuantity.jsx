import classes from "./productQuantity.module.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function ProductQuantity({ quantity, onIncQuantity, onDecQuantity }) {
  return (
    <div className={classes.quantity}>
      <FaMinus onClick={onDecQuantity} size={14} />
      {quantity}
      <FaPlus onClick={onIncQuantity} size={14} />
    </div>
  );
}

export default ProductQuantity;
