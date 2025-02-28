import { PiStarFourThin } from "react-icons/pi";
import classes from "./autoSlider.module.css";

function AutoSlider() {
  return (
    <section>
      <div className={classes.slider}>
        <div className={classes.marquee}>
          <div className={classes.track}>
            {[...Array(20)].map((_, index) => (
              <span key={index} className={classes.text}>
                Free express shipping worldwide
                <PiStarFourThin size={24} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutoSlider;
