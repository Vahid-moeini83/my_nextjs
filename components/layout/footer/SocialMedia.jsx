import Link from "next/link";
import classes from "./socialMedia.module.css";
import { FaFacebookF, FaTiktok, FaPinterest } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

function SocialMedia() {
  return (
    <ul className={classes.list}>
      <li>
        <Link href="#">
          <FaFacebookF size={16} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FaXTwitter size={16} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FaInstagram size={16} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FaTiktok size={16} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FaPinterest size={16} />
        </Link>
      </li>
    </ul>
  );
}

export default SocialMedia;
