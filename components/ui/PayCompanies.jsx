import classes from "./payCompanies.module.css";
import Image from "next/image";

function PayCompanies({ hasRights = true }) {
  return (
    <div className={classes.companies}>
      {hasRights && <p>&copy; 2025 Ecomus. All rights reserved.</p>}
      <div>
        <Image
          src="/images/footer/visa.svg"
          width={48}
          height={30}
          alt="visa"
        />
        <Image
          src="/images/footer/paypal.svg"
          width={48}
          height={30}
          alt="paypal"
        />
        <Image
          src="/images/footer/master.svg"
          width={48}
          height={30}
          alt="master"
        />
        <Image
          src="/images/footer/american_express.svg"
          width={48}
          height={30}
          alt="amercian_express"
        />
        <Image
          src="/images/footer/diners_club.svg"
          width={48}
          height={30}
          alt="diners_club"
        />
      </div>
    </div>
  );
}

export default PayCompanies;
