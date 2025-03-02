import Image from "next/image";
import classes from "./comments.module.css";
import CommentsSlider from "./CommentsSlider";
import { comments } from "@/utils/data";

function Comments() {
  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.box}>
          <Image
            fill
            objectFit="cover"
            src="/images/home/comments/comments-bg.webp"
            alt="comments-bg"
          />
          <div className={classes.content}>
            <CommentsSlider comments={comments} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
