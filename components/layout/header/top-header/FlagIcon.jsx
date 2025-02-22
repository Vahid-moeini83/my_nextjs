import Image from "next/image";
import classes from "./flagIcon.module.css";
import { countries } from "@/utils/data";

function FlagIcon({ countryId }) {
  const country = countries?.find((country) => country.id === countryId);

  if (!country) return;

  const imageSrc = `/images/${country.id}.svg`;

  return (
    <span className={classes.flag}>
      <Image src={imageSrc} width={16} height={16} alt={country.name} />{" "}
      <span>{country.unit}</span>
    </span>
  );
}

export default FlagIcon;
