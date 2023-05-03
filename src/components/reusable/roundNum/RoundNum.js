import React from "react";
import { ViewPosition } from "../ViewPosition";
import styles from "./roundNum.module.css";

const glb_animation_length = 4,
  glb_offset = 24;

export const RoundNum = ({ numbers, title }) => {
  const splited = numbers.toString().split("");
  return (
    <ViewPosition className="flex flex-col gap-5 w-fit max-w-[200px] px-2 py-3 items-center">
      {(bool) => (
        <>
          <div className="relative w-fit">
            <div className={styles.box} />
            <div className="flex w-fit z-[10] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {splited.map((letter, i) => (
                <Number {...{ bool, splited }} key={i}>
                  {letter}
                </Number>
              ))}
            </div>
          </div>
          <p className="text-center">{title}</p>
        </>
      )}
    </ViewPosition>
  );
};

const numbers = Array.from({ length: 10 }).map((_, i) => i);
const generateNums = () =>
  numbers.map(() => Math.floor(Math.random() * numbers.length)).join("");

const Number = ({ children, bool, splited }) => {
  const random = Math.floor(Math.random() * splited.length + 1),
    steps = random - 1,
    duration = (steps * glb_animation_length) / random,
    delay = Math.floor(Math.random() * 100 + 1) / 100,
    offset = glb_offset * random * -1,
    realDur = (duration - duration * delay) * 1000;

  return (
    <span className={styles.letter}>
      <span
        style={{
          transform: bool ? "translateY(24px)" : `translateY(${offset}px)`,
          transitionDuration: realDur + 1500 + "ms",
          transitionDelay: delay + "ms",
        }}
        className={styles["fake-letters"]}
      >
        {generateNums()}
      </span>
      {children}
    </span>
  );
};
