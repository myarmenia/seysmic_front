import React from "react";
import logo from "../../../assets/main/LGG_logo.svg";
import img from "../../../assets/main/home/partners_img.svg";
import { Container, Title, ViewPosition } from "../../../components/reusable";

export const Partners = () => {
  return (
    <ViewPosition>
      {(bool) => (
        <Container className="flex flex-col items-center py-[65px] med-600:py-[35px]">
          <Title className="mb-[60px] med-600:mb-[30px]">
            Стратегический партнер
          </Title>
          <div className="grid grid-cols-2 gap-[50px] med-900:flex med-900:flex-col-reverse">
            <div className="flex flex-col gap-[25px] text-[#1A374D] font-bold text-lg text-justify leading-[150%] med-600:gap-4">
              <img className="w-[100px]" src={logo} alt="" />
              <p className="font-semibold text-start">
                Официальный сайт партнера{" "}
                <a className="font-bold" href="https://lgg.foundation/">
                  https://lgg.foundation/
                </a>
              </p>
              <div>
                <span className="font-bold">Natural risks</span>
                <p className="med-600:text-sm">
                  We seek and support projects and technologies that aim to try
                  to predict natural disasters (earthquakes, tsunamis,
                  hurricanes, etc.), monitor natural anomalies, to identify
                  patterns in their occurrence. The goal for this area is to
                  find and promote the use of technologies that not only deal
                  with consequences from natural disasters, but also proactively
                  focus on early predictions and warnings, thus reducing the
                  risks and damage to people's lives.
                </p>
              </div>
            </div>
            <img
              style={{
                transform: bool ? "translateX(0)" : "translateX(500px)",
              }}
              className="object-contain w-full duration-700"
              src={img}
              alt=""
            />
          </div>
        </Container>
      )}
    </ViewPosition>
  );
};
