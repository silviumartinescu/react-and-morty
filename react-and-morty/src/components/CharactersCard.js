import React from "react";
import styles from "./CharactersCard.module.scss";
import { Link } from "react-router-dom";
import { Search, Pagination, Buttons } from "./";

const CharactersCard = ({
  results,
  setCharactersPage,
  setSearch,
  info,
  charactersPage,
}) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, species, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${id}`}
          key={id}
          className="col-lg-3 col-md-6 col-12 position-relative mb-4 text-dark"
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold">{name}</div>
              <div className="">
                <div className="fs-6">Species</div>
                <div className="badge bg-secondary">{species}</div>
              </div>
            </div>
          </div>
          {(() => {
            return (
              <div
                className={`${styles.badge} ${
                  status === "Dead"
                    ? "bg-danger"
                    : status === "Alive"
                    ? "bg-success"
                    : "bg-secondary"
                } position-absolute badge`}
              >
                {status}
              </div>
            );
          })()}
        </Link>
      );
    });
  } else {
    display = `No Characters Found :/`;
  }

  return (
    <>
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setCharactersPage} setSearch={setSearch} />
      <Buttons />
      <div className="container-sm">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <div className="row">{display}</div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={charactersPage}
          setPageNumber={setCharactersPage}
        />
      </div>
    </>
  );
};

export default CharactersCard;
