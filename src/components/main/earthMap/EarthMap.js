import React from "react";
import styles from "./earthMap.module.css";
import { earth_map } from "../../../store/constats";
import map_img from "../../../assets/main/monitoring/main-map.png";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

export const EarthMap = ({ className = "", visible }) => {
  const data = useLoaderData();
  return (
    <div className={[styles.map_bg, className].join(" ")}>
      <img src={map_img} className={styles.img} alt="map" />
      {Array.isArray(data?.map) &&
        data?.map.map((el, i) => <MapHover el={el} key={i} />)}
    </div>
  );
};

const MapHover = ({ el }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const handleClick = ({ id }) => {
    navigate(`earth-map/${id}`);
  };
  return (
    <>
      <div
        style={el}
        className={styles.blue_box}
        onClick={() => handleClick(el)}
        onMouseMove={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <span
            className={[styles.blue_box_id, styles.blue_box_id_visible].join(
              " "
            )}
          >
            {el?.title}
          </span>
        )}
      </div>
    </>
  );
};
