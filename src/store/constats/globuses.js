import img1 from "../../assets/resuableImg/globuses/globus1.svg";
import img2 from "../../assets/resuableImg/globuses/globus2.svg";
import img3 from "../../assets/resuableImg/globuses/globus3.svg";
import img4 from "../../assets/resuableImg/globuses/globus4.svg";
import { getLang } from "../../helper";

export const globuses = {
  am: [
    {
      title: "Գլոբալ մոնիտորինգ",
      src: img1,
      description:
        "Մոնիտորինգն իրականացվում է աշխարհի 37 տարածաշրջանների համար",
      to: () => getLang("/monitoring/global"),
    },
    {
      title: "Ռեգիոնալ մոնիտորինգ Հայաստանում",
      src: img2,
      description:
        "Իրականացվում է Հայաստանի եվ հարակից երկրների 6 տարածաշրջանների համար",
      to: () => getLang("/monitoring/regional"),
    },
    {
      title: "Տիեզերական մոնիտորինգ",
      src: img3,
      description:
        "Արբանյակային պատկերների մոնիտորինգ եվ լինեաﬔնտային վերլուծություն իրականացվում է ուժեղ երկրաշարժերի սպասման գոտիների համար",
      to: () => getLang("/monitoring/cosmos"),
    },
    {
      title: "Տեխնոլոգիա",
      src: img4,
      description:
        "Նորարարական տեխնոլոգիան հիﬓված է սեյսﬕկ էնտրոպիայի արտադրման օրենքի եվ մասնագիտացված ծրագրային ապահովման վրա",
      to: () => getLang("/technologies"),
    },
  ],
  ru: [
    {
      title: "Глобальный мониторинг",
      src: img1,
      description:
        "Мониторинг производится для 37 регионов мира",
      to: () => getLang("/monitoring/global"),
    },
    {
      title: "Региональный мониторинг в Армении",
      src: img2,
      description:
        "Мониторинг производится для 6 регионов Армении и прилегающих стран",
      to: () => getLang("/monitoring/regional"),
    },
    {
      title: "Космический мониторинг",
      src: img3,
      description:
        "Мониторинг спутниковых снимков и линеаментный анализ проводится для зон ожидания сильных землетрясений",
      to: () => getLang("/monitoring/cosmos"),
    },
    {
      title: "Технология",
      src: img4,
      description:
        "Инновационная технология основана на законе производства сейсмической энтропии и специализированном программном обеспечении",
      to: () => getLang("/technologies"),
    },
  ],
  en: [
    {
      title: "Global Monitoring",
      src: img1,
      description:
        "Monitoring is carried out for 37 regions of the world",
      to: () => getLang("/monitoring/global"),
    },
    {
      title: "Regional Monitoring in Armenia",
      src: img2,
      description:
        "Monitoring is carried out for 6 regions of Armenia and adjacent countries",
      to: () => getLang("/monitoring/regional"),
    },
    {
      title: "Space Monitoring",
      src: img3,
      description:
        "Satellite images monitoring and lineament analysis is carried out for zones of expected strong earthquakes",
      to: () => getLang("/monitoring/cosmos"),
    },
    {
      title: "Technology",
      src: img4,
      description:
        "The innovative technology is based on the law of seismic entropy production and a specialized software",
      to: () => getLang("/technologies"),
    },
  ],
};
