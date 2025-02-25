import Image from "next/image";
import Connections from "./Connections";
import classes from "./footer.module.css";
import FooterSignUp from "./FooterSignUp";
import LinksList from "./LinksList";
import { footerHelpLinks } from "@/utils/data";
import { footerAboutUsLinks } from "@/utils/data";

function Footer() {
  return (
    <footer className={`container ${classes.footer}`}>
      <div className={classes.cols}>
        <Connections />
        <LinksList title="Help" list={footerHelpLinks} />
        <LinksList title="About Us" list={footerAboutUsLinks} />
        <FooterSignUp />
      </div>
      <span></span>
      <div className={classes.rights}>
        <p>&copy; 2025 Ecomus. All rights reserved.</p>
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
    </footer>
  );
}

export default Footer;
