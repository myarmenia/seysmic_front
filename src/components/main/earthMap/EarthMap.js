import React from "react";
import styles from "./earthMap.module.css";
import { earth_map } from "../../../store/constats";
import map_img from "../../../assets/main/monitoring/main-map.png";

export const EarthMap = ({ className = "", visible }) => {
  const handleClick = ({ id }) => {
    console.log(id);
  };
  return (
    <div className={[styles.map_bg, className].join(" ")}>
      <img src={map_img} className={styles.img} alt="map" />
      {earth_map.map((el, i) => (
        <div
          style={el}
          key={i}
          className={styles.blue_box}
          onClick={() => handleClick(el)}
        >
          <span
            className={[styles.blue_box_id, styles.blue_box_id_visible].join(
              " "
            )}
          >
            {el.id}
          </span>
        </div>
      ))}
    </div>
  );
};
