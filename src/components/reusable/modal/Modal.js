import React from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { useEffect, useState, memo } from "react";

export const Modal = ({ children, open, handleClose, title }) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    if (open) {
      document.body.className = "h-screen overflow-hidden";
      setTimeout(() => {
        setOpacity(1);
      }, 1);
    } else {
      setOpacity(0);
      setTimeout(() => {
        document.body.className = "";
        document.getElementById("modal-container").remove();
      }, 300);
    }
  }, [open]);

  return (
    <ModalPortal>
      <div style={{ opacity }} className="duration-300">
        <div className={styles.bg} />
        <div className={styles.content}>
          <div className="w-full flex gap-5 justify-between items-center">
            <p>{title}</p>
            <span onClick={handleClose} className="cursor-pointer">
              &times;
            </span>
          </div>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

const ModalPortal = memo(({ children }) => {
  let container = document.getElementById("modal-container");
  if (!container) {
    container = Object.assign(document.createElement("div"), {
      id: "modal-container",
    });
    document.body.appendChild(container);
  }

  return createPortal(children, container);
});
