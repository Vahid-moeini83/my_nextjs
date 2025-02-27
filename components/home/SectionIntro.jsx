import Image from "next/image";
import classes from "./sectionIntro.module.css";
import IntroImage from "./IntroImage";

function SectionIntro() {
  return (
    <section className={classes.section}>
      <Image src="/images/home/intro-bg.webp" fill alt="intro" />
      <div className={`container ${classes.intro}`}>
        <div className={classes.images}>
          <IntroImage
            image="/images/home/intro-1.webp"
            to="/collections/gaming"
            title="Popular."
            description="Every piece is made to last beyond the season"
          />
          <IntroImage
            image="/images/home/intro-2.webp"
            to="/collections/gaming"
            title="Best Seller."
            description="Every piece is made to last beyond the season"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionIntro;
