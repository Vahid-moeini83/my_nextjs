import PayCompanies from "../ui/PayCompanies";
import classes from "./productGuarantee.module.css";
import { AiOutlineSafety } from "react-icons/ai";

function ProductGuarantee() {
  return (
    <div className={classes.wrapper}>
      <span className={classes.text}>
        <AiOutlineSafety size={24} />
        Guarantee Safe Checkout
      </span>
      <PayCompanies hasRights={false} />
    </div>
  );
}

export default ProductGuarantee;
