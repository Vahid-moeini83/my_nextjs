import Image from "next/image";
import classes from "./flagIcon.module.css";

function FlagIcon({ countryName }) {
  const imageSrc =
    countryName === "United States" ? "/images/usa.svg" : "/images/vtn.svg";

  return (
    <span className={classes.flag}>
      <Image src={imageSrc} width={16} height={16} alt={countryName} />
      <span>{countryName === "United States" ? "USD" : "VTN"}</span>
    </span>
  );
}

export default FlagIcon;
