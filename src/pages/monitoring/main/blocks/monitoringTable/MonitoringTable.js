import React from "react";
import styles from "./monitoringTable.module.css";
import { Container, Gradient } from "../../../../../components/reusable";

export const MonitoringTable = ({ data }) => {
  return (
    <Container className="bg-[#D2E5F6] flex flex-col py-[30px] px-[24px]">
      <div className="flex flex-col mx-auto items-center justify-center">
        <Gradient className="mb-4 text-[24px] w-full font-semibold">
          Условные обозначения{" "}
        </Gradient>
        <div className="flex flex-col">
          {data?.length &&
            data.map(({ src, describtion }, i) => (
              <div key={i} className={styles["table-item"]}>
                <div>
                  <img src={src} alt="" />
                </div>
                <p>{describtion}</p>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};
