import img1 from "../../assets/resuableImg/globuses/globus1.svg";
import img2 from "../../assets/resuableImg/globuses/globus2.svg";
import img3 from "../../assets/resuableImg/globuses/globus3.svg";
import img4 from "../../assets/resuableImg/globuses/globus4.svg";
import { getLang } from "../../helper";

export const globuses = {
  am: [
    {
      title: "Համաշխարհային մոնիտորինգ",
      src: img1,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/global"),
    },
    {
      title: "Տարածաշրջանային մոնիտորինգ Հայաստանում",
      src: img2,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/regional"),
    },
    {
      title: "Տիեզերական մոնիտորինգ",
      src: img3,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/cosmos"),
    },
    {
      title: "Մեր արտադրությունը",
      src: img4,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/product"),
    },
  ],
  ru: [
    {
      title: "Глобальный мониторинг",
      src: img1,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/global"),
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
      to: getLang("/monitoring/cosmos"),
    },
    {
      title: "Наша Продукция",
      src: img4,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/product"),
    },
  ],
  en: [
    {
      title: "Global monitoring",
      src: img1,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/global"),
    },
    {
      title: "Regional monitoring in Armenia",
      src: img2,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/regional"),
    },
    {
      title: "Space monitoring",
      src: img3,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/cosmos"),
    },
    {
      title: "Our production",
      src: img4,
      description:
        "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
      to: getLang("/monitoring/product"),
    },
  ],
};
