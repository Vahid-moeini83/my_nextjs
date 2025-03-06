import classes from "./footer.module.css";
import Connections from "./Connections";
import FooterSignUp from "./FooterSignUp";
import LinksList from "./LinksList";
import PayCompanies from "@/components/ui/PayCompanies";
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
      <PayCompanies />
    </footer>
  );
}

export default Footer;
