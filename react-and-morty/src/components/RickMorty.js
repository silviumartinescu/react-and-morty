import React from "react";
import styles from "./RickMorty.module.scss";
const RickMorty = () => {
  return (
    <div className="ricky">
      <img
        src="rickangry.png"
        className={`position-fixed ${styles.rotate} top-25 end-0 img-fluid shadow-4`}
        alt="..."
      />
    </div>
  );
};

export default RickMorty;
