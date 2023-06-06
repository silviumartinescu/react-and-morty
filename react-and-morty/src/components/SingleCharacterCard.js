import React from "react";
import styles from "./SingleCharacterCard.module.scss";
import { useParams } from "react-router-dom";
import { useGetCharacter } from "../api/useData";

const style = {
  item1: "list-group-item bg-info text-center fw-bold",
  item2: "list-group-item bg-gray text-center fw-bold",
  title: "fs-2 fw-bold card-title text-center",
};

const SingleCharacterCard = () => {
  let { id } = useParams();
  const character = useGetCharacter(id);
  let display;
  const {
    image,
    name,
    species,
    status,
    gender,
    type,
    origin,
    location,
    episode,
  } = character;

  let episodeNr = "";
  if (episode) {
    episodeNr = episode[0].split("/")[episode[0].split("/").length - 1];
  }
  display = (
    <div className={`card ${styles.cards} bg-success`}>
      <img src={image} className={`${styles.img} card-img-top`} alt="..." />
      <div className="card-body">
        <h5 className={style.title}>{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className={style.item1}>Gender: {gender}</li>
        <li className={style.item2}>Species: {species}</li>
        <li className={style.item1}>Type: {type === "" ? "Mystery" : type}</li>
        <li className={style.item2}>Origin: {origin?.name}</li>
        <li className={style.item1}>Location: {location?.name}</li>
        <li className={style.item2}>First Appearance: Episode {episodeNr}</li>
        <li className={style.item1}>Status: {status}</li>
      </ul>
    </div>
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
