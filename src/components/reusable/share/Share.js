import React, { useState } from "react";
import styles from "./share.module.css";
import link_to from "../../../assets/icons/link-to.svg";
import { social_networks } from "../../../store/constats";

export const Share = ({
  url,
  title = "aaaa",
  text = "aaaaaaaaa",
  className = "",
}) => {
  const [state, setState] = useState(false);
  return (
    <div
      className="relative h-fit shrink-0"
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <img
        onClick={() => {
          if (window.innerWidth < 600) {
            setState((p) => !p);
          }
        }}
        className={
          "w-[33px] box-content p-2 cursor-pointer med-600:w-[22px] " +
          className
        }
        src={link_to}
        alt=""
      />
      {state && (
        <div className={styles.options}>
          {social_networks(url, text, title).map((el, i) => (
            <SocialLink {...el} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

const SocialLink = ({ href, img }) => {
  return (
    <a href={href} target="_blank" className={styles.option}>
      <img src={img} alt="" />
    </a>
  );
};

// const shareHandler = async () => {
//   if (!navigator.canShare) {
//     try {
//       await navigator.share({ title, text, url });
//     } catch (err) {
//       console.log(err);
//     }
//   } else console.log("navigator not supported");
// };
