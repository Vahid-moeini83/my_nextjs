import classes from "./services.module.css";
import { IoCubeOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { IoMdReturnLeft } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import ServiceItem from "./ServiceItem";
import ServicesSlider from "./ServicesSlider";

function Services() {
  return (
    <section className={classes.section}>
      <div className={`container ${classes.services}`}>
        <ServiceItem
          icon={<IoCubeOutline size={32} />}
          title="Free Shipping"
          description="You will love at great low prices"
        />
        <ServiceItem
          icon={<GoCreditCard size={32} />}
          title="Flexible Patment"
          description="Pay with Multiple Credit Cards"
        />
        <ServiceItem
          icon={<IoMdReturnLeft size={32} />}
          title="14 Day Returns"
          description="Within 30 days for an exchange"
        />
        <ServiceItem
          icon={<TfiHeadphoneAlt size={32} />}
          title="Premium Support"
          description="Outstanding premium support"
        />
      </div>
      <ServicesSlider />
    </section>
  );
}

export default Services;
