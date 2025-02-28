import classes from "./serviceItem.module.css";

function ServiceItem({ icon, title, description }) {
  return (
    <div className={classes.item}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.details}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
