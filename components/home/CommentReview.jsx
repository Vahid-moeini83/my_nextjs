import Image from "next/image";
import classes from "./commentReview.module.css";
import { FaQuoteRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

function CommentReview({ comment }) {
  return (
    <div className={classes.review}>
      <FaQuoteRight size={32} />
      <span>OUR CUSTOMERS' RAVE REVIEW</span>
      <div>
        {Array.from({ length: comment.rating }, () => {
          return <MdOutlineStar size={20} key={Math.random()} />;
        })}
      </div>
      <p>{comment.description}</p>
      <div className={classes.info}>
        <div className={classes.image}>
          <Image
            src={`/images/home/comments/${comment.id}.webp`}
            fill
            alt={comment.item}
          />
        </div>
        <div>
          <span>{comment.customer}</span>
          <p>
            Purchase item: <span>{comment.item}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentReview;
