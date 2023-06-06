import React from "react";
import styles from "./SingleCharacterCard.module.scss";
import { useParams } from "react-router-dom";
import { useGetLocation, useGetCharacter } from "../api/useData";

const style = {
  item1: "fs-5 list-group-item bg-info text-center fw-bold",
  item2: "fs-5 list-group-item bg-gray text-center fw-bold",
  title: "fs-2 fw-bold card-title text-center",
};

const SingleCharacterCard = () => {
  let { id } = useParams();
  const location = useGetLocation(id);

  let display;
  const { name, type, dimension } = location;

  display = (
    <>
      <div className={` card ${styles.cards} bg-success`}>
        <img
          src="/Capture.PNG"
          className={`${styles.img} card-img-top`}
          alt="..."
        />
        <div className="card-body">
          <h5 className={style.title}>{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className={style.item1}>
            Dimension: {dimension === "unknown" ? "Unknown" : dimension}
          </li>
          <li className={style.item2}>
            Type: {type === "" ? "Mistery" : type}
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <div id="character-modal" className={`${styles.container}`}>
        {display}
      </div>
    </>
  );
};

export default SingleCharacterCard;
