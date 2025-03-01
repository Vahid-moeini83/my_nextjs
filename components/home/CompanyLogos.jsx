import classes from "./companyLogos.module.css";
import LogosSlider from "./LogosSlider";
import { logos } from "@/utils/data";

function CompanyLogos() {
  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.box}>
          <LogosSlider logos={logos} />
        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;
