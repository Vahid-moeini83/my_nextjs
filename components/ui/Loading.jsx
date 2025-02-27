import classes from "./loading.module.css";

function Loading({ title }) {
  return <div className={classes.loading}>Loading {title} ...</div>;
}

export default Loading;
