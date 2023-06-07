import React from "react";
import logo from "../../../assets/main/LGG_logo.svg";
import img from "../../../assets/main/home/partners_img.svg";
import { Container, Title, ViewPosition } from "../../../components/reusable";
import { useTranslation } from "../../../hooks";

export const Partners = () => {
  const { home: language } = useTranslation().language;

  return (
    <ViewPosition>
      {(bool) => (
        <Container className="flex flex-col items-center py-[65px] med-600:py-[35px]">
          <Title className="mb-[60px] med-600:mb-[30px]">
            {language?.strategic_partner}
          </Title>
          <div className="grid grid-cols-2 gap-[50px] med-900:flex med-900:flex-col-reverse">
            <div className="flex flex-col gap-[25px] text-[#1A374D] font-bold text-lg text-justify leading-[150%] med-600:gap-4">
              <img className="w-[100px]" src={logo} alt="" />
              <p className="font-semibold text-start">
                {language?.links_text}{" "}
                <a className="font-bold" href="https://lgg.foundation/">
                  https://lgg.foundation/
                </a>
              </p>
              <div>
                <span className="font-bold">{language?.description_title}</span>
                <p className="med-600:text-sm">{language?.description}</p>
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
