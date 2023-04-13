import img1 from "../../assets/resuableImg/globuses/globus1.svg";
import img2 from "../../assets/resuableImg/globuses/globus2.svg";
import img3 from "../../assets/resuableImg/globuses/globus3.svg";
import img4 from "../../assets/resuableImg/globuses/globus4.svg";
import { getLang } from "../../helper";

export const globuses = [
  {
    title: "Глобальный мониторинг",
    src: img1,
    description:
      "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
    to: getLang("/monitoring?index"),
  },
  {
    title: "Региональный мониторинг в Армении",
    src: img2,
    description:
      "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
    to: getLang("/monitoring/regional"),
  },
  {
    title: "Космический мониторинг",
    src: img3,
    description:
      "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
    to: "a",
  },
  {
    title: "Наша Продукция",
    src: img4,
    description:
      "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
    to: "b",
  },
];
