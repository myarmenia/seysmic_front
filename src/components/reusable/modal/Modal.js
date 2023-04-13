import React, { memo, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

export const Modal = ({ children, open, handleClose, title }) => {
  useEffect(() => {
    if (!open) {
      document.body.className = "";
      document.getElementById("modal-container")?.remove();
    } else {
      document.body.className = "h-screen overflow-hidden";
    }
  }, [open]);

  if (!open) return null;

  return (
    <ModalPortal>
      <div className="duration-300">
        <div className={styles.bg} onClick={handleClose} />
        <div className={styles.modal}>
          <div className="w-full flex gap-5 justify-between items-center">
            <p>{title}</p>
            <span onClick={handleClose} className="cursor-pointer">
              &times;
            </span>
          </div>
          <div className={styles.content}>{children}</div>
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
