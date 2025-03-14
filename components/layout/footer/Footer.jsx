"use client";

import classes from "./footer.module.css";
import Connections from "./Connections";
import FooterSignUp from "./FooterSignUp";
import LinksList from "./LinksList";
import PayCompanies from "@/components/ui/PayCompanies";
import { footerHelpLinks } from "@/utils/data";
import { footerAboutUsLinks } from "@/utils/data";
import { usePathname, useSearchParams } from "next/navigation";

function Footer() {
  const path = usePathname();
  const isInProductPage = path.includes("/collections/gaming/");

  return (
    <footer
      className={`container ${classes.footer} ${
        isInProductPage ? classes.padding : ""
      }`}
    >
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
