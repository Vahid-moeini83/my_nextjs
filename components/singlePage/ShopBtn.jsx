import classes from "./shopBtn.module.css";

function ShopBtn({ children, width = "100%", color, background, fontSize }) {
  const baseStyles = {
    width,
    color,
    background,
    fontSize: `${fontSize}px`,
  };

  return (
    <button style={baseStyles} className={classes.btn}>
      {children}
    </button>
  );
}

export default ShopBtn;
