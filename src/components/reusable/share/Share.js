import React, { useState } from "react";
import styles from "./share.module.css";
import link_to from "../../../assets/icons/link-to.svg";
import fcbook from "../../../assets/icons/social_networks/fcbook.svg";
import instagram from "../../../assets/icons/social_networks/instagram.svg";
import gmail from "../../../assets/icons/social_networks/gmail.svg";
import telegram from "../../../assets/icons/social_networks/telegram.svg";

import { FacebookShareButton, InstapaperShareButton } from "react-share";

export const Share = ({
  url,
  title = "aaaa",
  text = "aaaaaaaaa",
  className = "",
}) => {
  const [state, setState] = useState(false);
  const shareHandler = async () => {
    if (!navigator.canShare) {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        console.log(err);
      }
    } else console.log("navigator not supported");
  };

  return (
    <div className="relative h-fit">
      <img
        onClick={() => setState((p) => !p)}
        className={"w-[33px] box-content p-2 cursor-pointer " + className}
        src={link_to}
        alt=""
      />
      {state && (
        <div className={styles.options}>
          <FacebookShareButton url={url} className={styles.option}>
            <img src={fcbook} alt="" />
          </FacebookShareButton>
          <InstapaperShareButton url={url} className={styles.option}>
            <img src={instagram} alt="" />
          </InstapaperShareButton>
          <img className={styles.option} src={gmail} alt="" />
          {/* <TelegramShareButton url={url} className={styles.option}>
            <img src={telegram} alt="" />
          </TelegramShareButton> */}
          {/* <a className={styles.option} href="https://telegram.me/share/url">
            <img src={telegram} alt="" />
          </a> */}
        </div>
      )}
    </div>
  );
};

const shareOnTwitter = () => {
  const text = "Check out my ReactJS app!";
  const url = "https://my-reactjs-app.com";
  const hashtags = "reactjs, webdev";

  const shareUrl = `https://instagram.com/intent/tweet?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`;

  window.open(shareUrl, "_blank");
};
