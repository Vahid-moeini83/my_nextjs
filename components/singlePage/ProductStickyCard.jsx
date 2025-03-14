import Image from "next/image";
import classes from "./productStickyCard.module.css";
import ShopBtn from "./ShopBtn";
import SelectColor from "./SelectColor";
import ProductQuantity from "./ProductQuantity";

function ProductStickyCard({
  name,
  image,
  colors,
  quantity,
  onIncQuantity,
  onDecQuantity,
  finalPrice,
  isPassed,
}) {
  return (
    <div
      className={`container ${classes.card} ${
        isPassed ? classes.visible : classes.hidden
      }`}
    >
      <div className={classes.product}>
        <div className={classes.image}>
          <Image src={image[0]} width={80} height={80} alt={name} />
        </div>
        <h3>{name}</h3>
      </div>
      <div className={classes.details}>
        <SelectColor colors={colors} finalPrice={finalPrice} />
        <div className={classes.buttons}>
          <ProductQuantity
            quantity={quantity}
            onIncQuantity={onIncQuantity}
            onDecQuantity={onDecQuantity}
          />
          <ShopBtn
            width="190px"
            color="var(--light-color)"
            background="var(--dark-color)"
            fontSize={14}
          >
            Add to cart
          </ShopBtn>
        </div>
      </div>
    </div>
  );
}

export default ProductStickyCard;
