import Image from "next/image";
import classes from "./comments.module.css";

function Comments() {
  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.box}>
          <Image
            width={500}
            height={500}
            layout="responsive"
            src="/images/home/comments/comments-bg.webp"
            alt="comments-bg"
          />
          <div className={classes.content}>Content is here</div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
