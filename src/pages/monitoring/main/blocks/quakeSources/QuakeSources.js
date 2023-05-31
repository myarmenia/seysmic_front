import React, { useMemo } from "react";
import img2 from "../../../../../assets/main/monitoring/main/sources/under-img.svg";
import img1 from "../../../../../assets/main/monitoring/main/sources/upper-img.svg";
import B1 from "../../../../../assets/main/monitoring/main/sources/B1.png";
import B2 from "../../../../../assets/main/monitoring/main/sources/B2.png";
import C1 from "../../../../../assets/main/monitoring/main/sources/C1.png";
import C2 from "../../../../../assets/main/monitoring/main/sources/C2.png";
import D1 from "../../../../../assets/main/monitoring/main/sources/D1.png";
import D2 from "../../../../../assets/main/monitoring/main/sources/D2.png";
import { Gradient, Title } from "../../../../../components/reusable";
import { useTranslation } from "../../../../../hooks";
import { useParams } from "react-router";

export const QuakeSources = () => {
  const {
    monitoring_and_prediction: {
      movements_at_the_borders: { title, subtitle },
    },
  } = useTranslation().language;
  const { lang } = useParams();
  const data = useMemo(() => {
    if (lang === "en") {
      return [
        {
          title: "Normal Fault",
          number: "A",
          img1: img1,
          img2: img2,
        },
        {
          title: "Thrust Fault",
          number: "B",
          img1: B1,
          img2: B2,
        },
        {
          title: "Strick-Slip Transform Fault",
          number: "C",
          img1: C1,
          img2: C2,
        },
        {
          title: "Strick-Slip-Normal Fault",
          number: "D",
          img1: D1,
          img2: D2,
        },
      ];
    }
    if (lang === "ru") {
      return [
        {
          title: "Сброс",
          number: "A",
          img1: img1,
          img2: img2,
        },
        {
          title: "Надвиг-Подвиг",
          number: "B",
          img1: B1,
          img2: B2,
        },
        {
          title: "Сдвиг",
          number: "C",
          img1: C1,
          img2: C2,
        },
        {
          title: "Сбросо-сдвиг",
          number: "D",
          img1: D1,
          img2: D2,
        },
      ];
    }
    if (lang === "am") {
      return [
        {
          title: "Сброс",
          number: "A",
          img1: img1,
          img2: img2,
        },
        {
          title: "Надвиг-Подвиг",
          number: "B",
          img1: B1,
          img2: B2,
        },
        {
          title: "Сдвиг",
          number: "C",
          img1: C1,
          img2: C2,
        },
        {
          title: "Сбросо-сдвиг",
          number: "D",
          img1: D1,
          img2: D2,
        },
      ];
    }
    return [];
  }, [lang]);
  return (
    <div className="flex flex-col gap-7 py-20 med-900:py-10">
      <Title>{title}</Title>
      <div className="flex gap-4 justify-around med-600:grid med-600:grid-cols-2 justify-items-center">
        {data?.length && data.map((el, i) => <Box key={i} {...el} />)}
      </div>
      <p className="text-[26px] text-center leading-[165%] med-900:text-sm">
        {subtitle}
      </p>
    </div>
  );
};

const Box = ({ title, number, img1, img2 }) => {
  return (
    <div className="flex gap-1 med-600:w-[75%]">
      <Gradient className="text-[26px]">{number}</Gradient>
      <div className="flex flex-col gap-1 items-center">
        <div className="flex flex-col gap-2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
        <Gradient className="text-[26px] text-center w-full med-600:text-sm">
          {title}
        </Gradient>
      </div>
    </div>
  );
};
