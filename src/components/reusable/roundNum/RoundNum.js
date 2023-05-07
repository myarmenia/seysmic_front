import React, { useEffect, useState } from "react";
import { ViewPosition } from "../ViewPosition";
import styles from "./roundNum.module.css";

const glb_animation_length = 4,
  glb_offset = 24;

export const RoundNum = ({ numbers, title }) => {
  const splited = numbers.toString().split("");
  return (
    <ViewPosition className="flex flex-col gap-5 w-fit max-w-[200px] px-2 py-3 items-center med-600:gap-2">
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
          <p className="text-center med-600:text-xs">{title}</p>
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

export const CircularProgress = ({ size, strokeWidth, percentage, color }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <ViewPosition
      onClick={() => {
        console.log(Math.floor(Math.random() * 100), "hello Vasya");
        setProgress(Math.floor(Math.random() * 100));
      }}
    >
      {(bool) => (
        <>
          {bool && (
            <svg width={size} height={size} viewBox={viewBox}>
              <defs>
                <linearGradient
                  id="gradient-def-circle"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop stopColor="#0A1577" offset="33%"></stop>
                  <stop stopColor="#009BEC00" offset="33%"></stop>
                  <stop stopColor="#92D3FF" offset="33%"></stop>
                </linearGradient>
              </defs>
              <circle
                fill="none"
                // stroke="#ccc"
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
                strokeLinecap="round"
                style={{ transition: "all 2s" }}
              />
              <text
                fill="black"
                fontSize="40px"
                x="50%"
                y="50%"
                dy="20px"
                textAnchor="middle"
              >
                {`${percentage}%`}
              </text>
            </svg>
          )}
        </>
      )}
    </ViewPosition>
  );
};
