import classes from "./shopInfo.module.css";

function ShopInfo() {
  return (
    <>
      <p className={classes.info}>
        Address: 1234 Fashion Street, Suite 567,
        <br />
        New York, NY 10001
        <br />
        Email: <span>info@fashionshop.com</span>
        <br />
        Phone: <span>(212) 555-1234</span>
      </p>
    </>
  );
}

export default ShopInfo;
