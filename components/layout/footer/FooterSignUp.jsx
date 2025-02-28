"use client";

import Link from "next/link";
import classes from "./footerSignUp.module.css";
import Dropdowns from "@/components/ui/Dropdowns";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { HiMinus, HiPlus } from "react-icons/hi2";
import useWindowWidth from "@/hooks/useWindowWidth";

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
          <>
            {isOpen ? (
              <HiMinus onClick={handleToggleMenu} size={16} />
            ) : (
              <HiPlus onClick={handleToggleMenu} size={16} />
            )}
          </>
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
        <div className={classes.dropdowns}>
          <Dropdowns place="footer" />
        </div>
      </div>
    </div>
  );
}

export default FooterSignUp;
