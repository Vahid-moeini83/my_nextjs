"use client";

import { useState } from "react";
import classes from "./productToggleTabs.module.css";

function ProductToggleTabs({ colors }) {
  const [activeTab, setActiveTab] = useState("info");

  function handleActiveTab(tab) {
    setActiveTab(tab);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.tabs}>
        <ul>
          <li
            className={`${classes.tab} ${
              activeTab === "info" && classes.active
            }`}
            onClick={() => handleActiveTab("info")}
          >
            Additional Information
          </li>
          <li
            className={`${classes.tab} ${
              activeTab === "policies" && classes.active
            }`}
            onClick={() => handleActiveTab("policies")}
          >
            Return Policies
          </li>
        </ul>
      </div>
      <div className={classes.content}>
        {activeTab === "info" && (
          <div className={classes.info}>
            <div className={classes.infoTitle}>Color</div>
            <div className={classes.infoValue}>
              {colors.map((color, index) => (
                <span key={index}>
                  {color}
                  {index !== colors.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>
        )}
        {activeTab === "policies" && (
          <div className={classes.policy}>
            <h3>The Company Private Limited Policy</h3>
            <p>
              The Company Private Limited and each of their respective
              subsidiary, parent and affiliated companies is deemed to operate
              this Website (“we” or “us”) recognizes that you care how
              information about you is used and shared. We have created this
              Privacy Policy to inform you what information we collect on the
              Website, how we use your information and the choices you have
              about the way your information is collected and used. Please read
              this Privacy Policy carefully. Your use of the Website indicates
              that you have read and accepted our privacy practices, as outlined
              in this Privacy Policy.
            </p>
            <p>
              Please be advised that the practices described in this Privacy
              Policy apply to information gathered by us or our subsidiaries,
              affiliates or agents: (i) through this Website, (ii) where
              applicable, through our Customer Service Department in connection
              with this Website, (iii) through information provided to us in our
              free standing retail stores, and (iv) through information provided
              to us in conjunction with marketing promotions and sweepstakes.
            </p>
            <p>
              If you provide information to us or access or use the Website in
              any way after this Privacy Policy has been changed, you will be
              deemed to have unconditionally consented and agreed to such
              changes. The most current version of this Privacy Policy will be
              available on the Website and will supersede all previous versions
              of this Privacy Policy.
            </p>
            <p>
              If you have any questions regarding this Privacy Policy, you
              should contact our Customer Service Department by email at
              marketing@company.com
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductToggleTabs;
