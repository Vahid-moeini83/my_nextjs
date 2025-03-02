"use client";

import classes from "./hotDealsTimer.module.css";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";

function HotDealsTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");
    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((difference / (1000 * 60)) % 60)
    ).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0"
    );

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return;

  return (
    <div className={classes.timer}>
      <FaRegClock size={24} />
      <span>{`${timeLeft.days}D : ${timeLeft.hours}H : ${timeLeft.minutes}M : ${timeLeft.seconds}S`}</span>
    </div>
  );
}

export default HotDealsTimer;
