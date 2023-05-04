import React from "react";
import { Container, Title } from "../../../components/reusable";
import img from "../../../assets/main/home/partners_img.svg";
import logo from "../../../assets/main/LGG_logo.svg";
import { useRef } from "react";
import { useAnimation } from "../../../hooks";

export const Partners = () => {
  const ref = useRef(null),
    bool = useAnimation(ref);
  return (
    <Container myRef={ref} className="flex flex-col items-center py-[65px]">
      <Title className="mb-[60px]">Стратегический партнер</Title>
      <div className="grid grid-cols-2 gap-[50px] med-900:grid-cols-1 med-400:flex med-400:flex-col-reverse">
        <div className="flex flex-col gap-[25px] text-[#1A374D] font-bold text-lg text-justify leading-[150%]">
          <img className="w-[100px]" src={logo} alt="" />
          <b>
            Официальный сайт партнера{" "}
            <a className="font-bold" href="https://lgg.foundation/">
              https://lgg.foundation/
            </a>
          </b>
          <div>
            <span className="font-bold">Natural risks</span>
            <p>
              We seek and support projects and technologies that aim to try to
              predict natural disasters (earthquakes, tsunamis, hurricanes,
              etc.), monitor natural anomalies, to identify patterns in their
              occurrence. The goal for this area is to find and promote the use
              of technologies that not only deal with consequences from natural
              disasters, but also proactively focus on early predictions and
              warnings, thus reducing the risks and damage to people's lives.
            </p>
          </div>
        </div>
        <img
          style={{
            transform: bool ? "translateX(0)" : "translateX(500px)",
          }}
          className="object-contain w-full duration-700 med-900:duration-800"
          src={img}
          alt=""
        />
      </div>
    </Container>
  );
};
