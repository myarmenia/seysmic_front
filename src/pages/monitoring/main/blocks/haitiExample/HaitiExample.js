import React from "react";
import { Container, RoundNum, Title } from "../../../../../components/reusable";
import exmpl_img1 from "../../../../../assets/main/monitoring/main/example-images/expl-img1.svg";
import styles from "./haitiExample.module.css";

const list_data = [
  "Сейсмичность в Гаити обусловлена взаимодействием Карибской плиты с Северо-Американской.",
  "Для выявления СС Гаити (М≥7.0) была использована информация о сильных землетрясениях c 1700.",
  "В СС выявлены три однородные сейсмотектонические зоны: Септентрионал (А),  Испаниола (B) и Энрикуилло (C).",
  "Подготовка землетрясения Порт О’Пренс начинается с 1953 года. За все время продолжительностью Т=56 лет 7 месяцев в системе 95% времени не было опасно, 3% времени было тревожно, и только 2% времени было опасно. Трек подготовки сильного землетрясения развивался вблизи неустойчивости зоны С  периодически приближаясь к зоне А.",
  "Землетрясение в Гаити в очередной раз показало, что традиционные методы построения карты сейсмической опасности содержат существенные методические ошибки. По традиционной карте сейсмической опасности столица Гаити Порт О’Пренс располагалась в VI-VII бальной зоне, а во время землетрясения подверглась воздействию в IX-X баллов.",
  "Метод сейсмической энтропии позволяет устранить недостатки традиционных методов оценки сейсмической опасности и позволяет строить динамические карты как для суши, таки для океанического дна.",
];
const ul_data1 = [
  "По величине накопленной энтропии это землетрясение является самым сильным в мире, W=20.586.",
  "Подготовка землетрясения началась с 1946 г. и продолжалась 65 лет. За все это время (99.975% от времени подготовки) катастрофическое мега землетрясение исключалось. Траектория развивалась ниже зоны неустойчивости.",
  "Мониторинг землетрясения производился одновременно в двух СС Япония М≥7.8 и Мега Япония М≥8.4 с начала 2008 г.",
  "Последние три года опасность была локализована на СВ Хонсю и мигрировала от Токио вначале на восток в сторону океана, а затем вдоль СВ побережья на север.",
  "Только 9 марта 2011 года, после землетрясения с магнитудой 7.5, трек попал в зону неустойчивости и через два дня произошла катастрофа.",
  "Если бы наша КТ мониторинга была бы взята официально на вооружение японскими сейсмологами и правительством, то землетрясение Тохоку была бы спрогнозирована на краткосрочном этапе за два дня до землетрясения с вероятностью Pt=99.975%.",
];

const data = [
  {
    title: "на прИМЕРе ГАити",
    subtitle:
      " Покажем это на примере катастрофического землетрясения Порт О’Пренс, ГАИТИ, 12 января 2010, М = 7.2 *. Это землетрясение привело к огромному число жертв и разрушений",
    numbers: [
      { numbers: 222570, title: "число погибших составило" },
      { numbers: 311000, title: "число получивших ранения" },
      { numbers: 869, title: "пропавших без вести  человек." },
      { numbers: "5.6млрд", title: "Материальный ущерб оценивается в  евро." },
    ],
    list_data: list_data,
    images: [
      { title: "Интенсивность", img: exmpl_img1 },
      { title: "Интенсивность", img: exmpl_img1 },
    ],
    quake_desc: {
      text: "* Землетрясение Порт О’Пренс, Гаити, USGS-EMSC",
      red_text: "2010.01.12 21:53:10 18.46N 72.53W H = 13 км М = 7.2",
    },
  },
  {
    title: "на прИМЕРе тохоку",
    subtitle:
      "Покажем это на примере мониторинга неустойчивости при подготовке катастрофического землетрясения Тохоку, ЯПОНИЯ, 11 марта 2011, М = 9.0 *",
    numbers: [
      { numbers: 15896, title: "число погибших составило" },
      { numbers: 6157, title: "число получивших ранения" },
      { numbers: 2536, title: "пропавших без вести  человек." },
    ],
    list_data: ul_data1,
    images: [
      { title: "Интенсивность", img: exmpl_img1 },
      { title: "Интенсивность", img: exmpl_img1 },
      { title: "Интенсивность", img: exmpl_img1 },
    ],
    quake_desc: {
      text: "* Землетрясение Тохоку, ЯПОНИЯ, USGS-EMSC",
      red_text: "2010.01.12 05:46:23 38.32N 142.37W H = 32 км М = 9.0",
    },
  },
];

export const HaitiExample = () => {
  return (
    <>
      <div className="flex flex-col gap-16 med-1200:gap-12 med-600:gap-8">
        {data.map((el, i) => (
          <Box {...el} key={i} />
        ))}
      </div>
    </>
  );
};
const Box = ({ title, subtitle, numbers, list_data, images, quake_desc }) => {
  return (
    <Container className="flex flex-col gap-8 med-900:gap-6">
      <Title>{title}</Title>
      <p className="text-[21px] med-1200:text-[16px]">{subtitle}</p>
      <Datas {...{ numbers }} />
      <div className="flex flex-col gap-[35px] med-1200:gap-[30px] med-900:gap-7 med-600:gap-5 py-5">
        <Title>
          Визуализация процесса подготовки катастрофического землетрясения
        </Title>
        <div className="med-900:flex med-900:flex-col gap-4">
          <iframe
            src="https://www.youtube.com/embed/DtvfnOtO1Wk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-[277px] w-[390px] float-left pr-[25px] pb-[25px] med-900:pr-[15px] med-900:pb-[15px] med-900:w-full"
          ></iframe>
          {list_data.map((text, i) => (
            <p className={styles["list-item"]} key={i}>
              <span>{text}</span>
            </p>
          ))}
        </div>
        <div className="flex gap-5 justify-between items-center med-1200:flex-wrap">
          <div className="flex gap-[34px] med-1200:gap-5 med-900:gap-3 med-900:grid med-900:grid-cols-2">
            {images.map((el, i) => (
              <ImageBox {...el} key={i} />
            ))}
          </div>
          <div className="flex flex-col gap-2 text-[26px] leading-[168.5%] text-justify">
            <p>{quake_desc.text}</p>
            <p className="text-[#F05328]">{quake_desc.red_text}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

// Current page's components

const ImageBox = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span>{title}</span>
      <img className="max-w-[280px] med-900:w-full" src={img} alt="" />
    </div>
  );
};
const Datas = ({ numbers }) => {
  return (
    <div className="flex flex-col items-center gap-12 med-1200:gap-10 med-900:gap-8 med-600:gap-5">
      <p className="text-[26px] w-fit">По официальным данным</p>
      <div className="w-[90%] grid justify-items-center grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-5">
        {numbers.map((el, i) => (
          <RoundNum {...el} key={i} />
        ))}
      </div>
    </div>
  );
};
