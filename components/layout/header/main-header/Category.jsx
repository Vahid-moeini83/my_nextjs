import classes from "./category.module.css";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineArrowOutward } from "react-icons/md";
import { categories } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

function Category() {
  return (
    <div className={classes.category}>
      <Button
        color="var(--light-color)"
        background="var(--purple-color)"
        rounded="var(--rounded-xs)"
        icon={true}
      >
        <HiOutlineSquares2X2 size={20} />
        Browse All Categories
      </Button>
      <div className={classes.dropdown}>
        <div className={classes.list}>
          <ul>
            {categories?.map((category) => (
              <li key={category.id}>
                <Link href="#">
                  <Image
                    src={`/images/${category.id}.webp`}
                    width={40}
                    height={40}
                    alt={category.name}
                  />
                  <span>{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.link}>
          <Link href="#">
            View all collections
            <MdOutlineArrowOutward size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
