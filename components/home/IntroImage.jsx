import classes from "./introImage.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import useWindowWidth from "@/hooks/useWindowWidth";

function IntroImage({ image, to, title, description }) {
  const windowWidth = useWindowWidth();

  return (
    <div className={classes.box}>
      <Link href={to}>
        <Image
          src={image}
          width={
            windowWidth >= 1150
              ? 700
              : windowWidth > 768
              ? 520
              : windowWidth > 480
              ? 480
              : 360
          }
          height={
            windowWidth >= 1150
              ? 640
              : windowWidth > 768
              ? 480
              : windowWidth > 480
              ? 400
              : 320
          }
          alt={title}
        />
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
