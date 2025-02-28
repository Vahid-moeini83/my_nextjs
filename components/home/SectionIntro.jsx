import Image from "next/image";
import classes from "./sectionIntro.module.css";
import IntroSlider from "./IntroSlider";

function SectionIntro() {
  return (
    <section>
      <div className={classes.intro}>
        <Image src="/images/home/intro-bg.webp" fill alt="intro" />
        <div className={`container ${classes.content}`}>
          <IntroSlider />
        </div>
      </div>
    </section>
  );
}

export default SectionIntro;
