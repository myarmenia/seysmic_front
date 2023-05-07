import React, { useEffect, useState } from "react";
import { formatToCompactNum } from "../../../helper";
import { ViewPosition } from "../ViewPosition";
import styles from "./roundNum.module.css";

const glb_animation_length = 4,
  glb_offset = 24,
  numbers = Array.from({ length: 10 }).map((_, i) => i);

const generateNums = () =>
  numbers.map(() => Math.floor(Math.random() * numbers.length)).join("");

export const RoundNum = ({ numbers, title }) => {
  const splited = formatToCompactNum(numbers).split("");
  return (
    <ViewPosition className="flex flex-col gap-5 w-fit max-w-[200px] px-2 py-3 items-center med-600:gap-2">
      {(bool) => (
        <>
          <div className="relative w-fit">
            {/* <div className={styles.box} /> */}
            <CircularProgress {...{ bool }}>
              <div className="flex w-fit z-[10] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {splited.map((letter, i) => (
                  <Number {...{ bool, splited }} key={i}>
                    {letter}
                  </Number>
                ))}
              </div>
            </CircularProgress>
          </div>
          <p className="text-center med-600:text-xs">{title}</p>
        </>
      )}
    </ViewPosition>
  );
};

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

export const CircularProgress = ({
  size = 200,
  strokeWidth = 15,
  children,
  bool,
}) => {
  const [progress, setProgress] = useState(0);

  const viewBox = `0 0 ${size} ${size}`,
    radius = (size - strokeWidth) / 2,
    circumference = radius * Math.PI * 2,
    dash = (progress * circumference) / 100;

  useEffect(() => {
    setProgress(bool ? 100 : 0);
  }, [bool]);

  return (
    <svg
      className="w-[140px] h-[140px] rounded-full relative med-600:w-[100px] med-600:h-[100px]"
      viewBox={viewBox}
    >
      <defs>
        <linearGradient id="gradient-def-circle" x1="0" y1="1" x2="1" y2="1">
          <stop
            id="SvgjsStop1045"
            stopOpacity="1"
            stopColor="rgba(146,211,255,1)"
            offset="0"
          ></stop>
          <stop
            id="SvgjsStop1046"
            stopOpacity="1"
            stopColor="rgba(0,143,251,1)"
            offset="0.3"
          ></stop>
          <stop
            id="SvgjsStop1047"
            stopOpacity="1"
            stopColor="rgba(0,143,251,1)"
            offset="1"
          ></stop>
        </linearGradient>
      </defs>
      <circle
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke="url(#gradient-def-circle)"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="square"
        style={{
          transition: `all ${Math.floor(Math.random() * 2000 + 500)}ms`,
        }}
      />
      <foreignObject
        fill="black"
        x="50%"
        y="50%"
        textAnchor="middle"
        className={`min-w-[${size}px] h-full w-full -translate-x-1/2 -translate-y-1/2`}
      >
        {children}
      </foreignObject>
    </svg>
  );
};
