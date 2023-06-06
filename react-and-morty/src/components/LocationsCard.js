import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import styles from "./CharactersCard.module.scss";
import useLocationScroll from "./useLocationScroll";

const LocationsCard = () => {
  const [locationId, setLocationId] = useState(1);
  const { locations, hasMore, loading } = useLocationScroll(locationId);

  const observer = useRef();
  const lastLocationElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLocationId((prevLocationId) => prevLocationId + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  let display;

  if (locations) {
    display = locations.map((x, index) => {
      const itemProps =
        locations.length === index + 1 ? { ref: lastLocationElementRef } : {};
      let { id, name, type, dimension } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${id}`}
          key={id}
          className="col-lg-3 col-md-6 col-12 position-relative mb-4 text-dark"
          {...itemProps}
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            <img
              src="/Capture.PNG"
              alt=""
              className={`${styles.img} img-fluid`}
            />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Dimension</div>
                <div className="badge bg-secondary">{dimension}</div>
              </div>
              <div className="">
                <div className="fs-6">Type</div>
                <div className="badge bg-secondary">{type}</div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = `No Locations Found :/`;
  }

  return (
    <>
      <h1 className="text-center mb-4">Locations</h1>
      <Buttons />
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <div className="row">{display}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationsCard;
