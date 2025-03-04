import GetDirectionLink from "../ui/GetDirectionLink";
import classes from "./mapInfo.module.css";

function MapInfo() {
  return (
    <div className={classes.info}>
      <h3>Ecomus Store</h3>
      <p>
        301 Front St W Toronto, Canada
        <br />
        support@ecomus.com
        <br />
        (08) 8942 1299
      </p>
      <p>
        Mon - Fri, 8:30am - 10:30pm
        <br />
        Saturday, 8:30am - 10:30pm
        <br />
        Sunday Closed
      </p>
      <GetDirectionLink />
    </div>
  );
}

export default MapInfo;
