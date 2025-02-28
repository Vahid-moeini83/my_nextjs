"use client";

import Link from "next/link";
import classes from "./linksList.module.css";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

function LinksList({ title, list }) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleSubList() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classes.box}>
      <div>
        <h3>{title}</h3>
        {windowWidth <= 768 && (
          <>
            {isOpen ? (
              <HiMinus onClick={handleToggleSubList} size={16} />
            ) : (
              <HiPlus onClick={handleToggleSubList} size={16} />
            )}
          </>
        )}
      </div>
      <ul className={`${isOpen ? classes.open : classes.close}`}>
        {list?.map((item) => (
          <li key={item}>
            <Link href="#">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinksList;
