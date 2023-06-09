import React from "react";
import img from "../../../../assets/main/about/Ararat.svg";
import { Container } from "../../../../components/reusable";
import person1_img from "../../../../assets/main/about/person1.svg";
import person2_img from "../../../../assets/main/about/person2.svg";
import { useTranslation } from "../../../../hooks";

export const Preface = () => {
  const { about: language } = useTranslation().language;
  const persons = language.persons.map((el, i) => ({
    ...el,
    image: [person1_img, person2_img][i],
  }));
  return (
    <div>
      <div
        style={{
          background: `url('${img}') no-repeat`,
          backgroundSize: "cover",
        }}
        className="h-[490px] bg-cover med-600:h-[200px]">
        <p className="text-white h-full text-[36px] leading-[168%] flex flex-col items-center justify-center text-center med-600:text-[16px] max-w-[80%] mx-auto">
          <span className="text-[30px] font-bold med-600:text-[14px]">
            {language.title}
          </span>
          <span className="font-bold">{language.sub_title}</span>
          <span className="font-bold">
            <i className="text-[#2FCBFD]">“SeiEn”</i> LLC
          </span>
        </p>
      </div>
      <Container className="py-[38px]">
        <p className="leading-[168.5%] text-xl med-600:text-[14px] med-600:leading-[165%]">
          {language.preface.part1}
          <br />
          {language.preface.part2}
          <br />
          {language.preface.part3}
          <br />
          {language.preface.part4}
        </p>
      </Container>
      <div className="bg-[#F0F2F5] border-collapse">
        {persons.map((el, i) => (
          <Box {...el} key={i} />
        ))}
      </div>
    </div>
  );
};

const Box = ({ name, roles, description, image, className = "" }) => {
  return (
    <div className="border-b-[9px] border-[#DEDEDE] py-[57px] first:border-t-[9px]">
      <Container
        className={
          "flex gap-[65px] med-900:!flex-col-reverse med-600:gap-[28px] " +
          className
        }>
        <img
          loading="lazy"
          className="med-1200:w-auto med-600:mx-auto"
          src={image}
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-dark-blue font-bold text-[32px] pb-[20px] whitespace-pre-line med-1440:text-[24px] med-600:pb-[10px]">
            {name}
          </span>
          <div className="flex flex-col justify-between gap-3 med-600:gap-1">
            {roles.map((role, i) => (
              <p
                key={i}
                className="text-[24px] text-black font-bold leading-[180%] whitespace-pre-line med-1440:text-[20px] med-600:text-[14px]">
                {role}
              </p>
            ))}
          </div>
          {description && (
            <p className="text-justify font-medium text-[20px] leading-[180%] mt-[26px] whitespace-pre-wrap med-1440:text-[15px] med-600:mt-[10px] med-600:text-[14px] med-600:leading-[180%]">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};
