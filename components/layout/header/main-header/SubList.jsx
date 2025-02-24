import classes from "./subList.module.css";
import SubItem from "./SubItem";

function SubList({ subList, isOpen }) {
  return (
    <ul className={`${classes.list} ${isOpen ? classes.open : classes.close}`}>
      {subList?.map((item) => (
        <SubItem item={item} key={item} />
      ))}
    </ul>
  );
}

export default SubList;
