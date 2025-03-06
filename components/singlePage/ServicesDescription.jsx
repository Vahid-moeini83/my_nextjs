import classes from "./servicesDescription.module.css";
import { IoBoatOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";

function ServicesDescription() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <IoBoatOutline size={24} />
        <p>
          Estimate delivery times: <span>12-26 days</span>
          (International) <span>3-6 days</span> (United States).
        </p>
      </div>
      <div className={classes.description}>
        <GiReturnArrow size={24} />
        <p>
          Return within <span>30 days</span> of purchase. Duties & taxes are
          non-refundable.
        </p>
      </div>
    </div>
  );
}

export default ServicesDescription;
