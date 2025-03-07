import classes from "./productsGrid.module.css";

const grids = [":", "::", ":::", "::::", ":::::", "::::::"];

function ProductsGrid({ gridValue, onGridChange }) {
  function handleChangeGrid(grid) {
    onGridChange(grid);
  }

  return (
    <ul className={classes.grids}>
      {grids.map((grid) => {
        const gridNumber = grid.split("").length;

        return (
          <li
            key={gridNumber}
            onClick={() => handleChangeGrid(`grid-${gridNumber}`)}
            className={`${classes[`grid-${gridNumber}`]} ${
              gridValue === `grid-${gridNumber}` ? classes.active : classes.grid
            }`}
          >
            {grid}
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsGrid;
