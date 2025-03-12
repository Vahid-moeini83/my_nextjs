"use client";

import Link from "next/link";
import classes from "./footerSignUp.module.css";
import Dropdowns from "@/components/ui/Dropdowns";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import useWindowWidth from "@/hooks/useWindowWidth";
import ToggleListIcon from "@/components/ui/ToggleListIcon";

function FooterSignUp() {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classes.signup}>
      <div className={classes.title}>
        <h3>Sign Up for Email</h3>
        {windowWidth <= 768 && (
          <ToggleListIcon
            isOpen={isOpen}
            onToggle={handleToggleMenu}
            color="light"
          />
        )}
      </div>
      <div
        className={`${classes.box} ${isOpen ? classes.open : classes.close}`}
      >
        <p>
          Sign up to get first dibs on new arrivals, sales, exclusive content,
          events and more!
        </p>
        <div className={classes.input}>
          <input type="email" placeholder="Enter email address" />
          <Link href="#">
            Subscribe
            <MdArrowOutward size={18} />
          </Link>
        </div>
        <Dropdowns place="footer" />
      </div>
    </div>
  );
}

export default FooterSignUp;
