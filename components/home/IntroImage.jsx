import classes from "./introImage.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

function IntroImage({ image, to, title, description }) {
  return (
    <div className={classes.box}>
      <Link href={to}>
        <Image src={image} width={680} height={640} alt={title} />
        <div className={classes.content}>
          <span>NO.1 GEAR</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button
            color="var(--dark-color)"
            background="var(--light-color)"
            rounded="var(--rounded-xs)"
          >
            Shop now
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default IntroImage;
