import {
  Container,
  Title,
  TitleBorder,
  Ul,
} from "../../../../../components/reusable";
import attreactor from "../../../../../assets/aboutCoputerTechologiesphoto/attractor.png";
import attreactor2 from "../../../../../assets/aboutCoputerTechologiesphoto/attractor2.png";
import entropyproduction from "../../../../../assets/aboutCoputerTechologiesphoto/entropyproduction.png";
import mega from "../../../../../assets/aboutCoputerTechologiesphoto/mega.png";
import seismicSystem from "../../../../../assets/aboutCoputerTechologiesphoto/seismicSystem.png";
import shema from "../../../../../assets/aboutCoputerTechologiesphoto/shema.png";
import file_pdf from "../../../../../assets/icons/file-pdf.svg";
import styles from "./aboutCoputerTechologies.module.css";
import { useTranslation } from "../../../../../hooks";

export const AboutCoputerTechologies = () => {
  const {SE_and_CT: language } = useTranslation().language;
  console.log(language.title,1125);
  const data = [
    "Мониторинг иерархии СС сверху вниз позволяет детализировать и снизить порог прогнозируемых землетрясений и одновременно повышать точность и надежность прогнозов сильных землетрясений в СС верхнего энергетического уровня (рис. слева)",
    "При выборе конкретного объекта (например, площадки АЭС) мониторинг иерархии СС производится с низу вверх только в тех СС, в которые попадает выбранный объект (рис. справа)",
  ];
  const ul_data = [
    "На трековой диаграмме показаны разные стадии тревог и ожидания сильных землетрясений по мере развития траектории и приближения к аттрактору (рис. слева) <br/> <span class='text-[#7BB500] font-semibold ml-[30px]'>D, C, С1, С2 – Зеленая стадия, не опасная</span> (долгосрочно-среднесрочная, годы–месяцы)<br><span class='text-[#FF0000] ml-[30px] font-semibold'>B1-3, В0, A1-3, А0 – Красная стадия, опасная</span> (среднесрочно-краткосрочная, месяцы–дни)",
    "Показаны разные проявления сейсмичности (форшоки, сейсмические рои и затишья, триггеры и т.д.) (рис. справа)",
  ];
  const ul_data2 = [
    "PK – вероятность по кумулятивной энергии",
    "PW – вероятность по энтропии",
    "P =PK*PW – вероятность сильного землетрясения (эта вероятность равна нулю вне аттрактора и начинает расти, когда траектория входит в аттрактор)",
  ];
  return (
    <Container className="mb-[115px]">
      <Title className="mb-4">
        {language.title}
      </Title>
      <TitleBorder
        title={
          "МСЭ позволяет строить математическую модель геологической среды (объем СС), благодаря чему впервые в мировой практике становится возможным визуализировать весь процесс подготовки сильных землетрясений."
        }
      />
      <p className="mt-8 text-[18px] leading-[168.5%] text-justify med-600:text-sm">
          {language.text}
        <a href="/" className="inline">
          <img alt="" className="inline" loading="lazy" src={file_pdf} />
        </a>
      </p>
      <Title className="mt-11 mb-8 snap-x snap-mandatory">
        СЕЙСМИЧЕСКАЯ СИСТЕМА И ЗАКОН ПРОИЗВОДСТВА СЕЙСМИЧЕСКОЙ ЭНТРОПИИ
      </Title>
      <div className="flex justify-between gap-5 med-600:flex-col med-600:justify-center med-600:items-center">
        <img
          alt=""
          src={seismicSystem}
          className="object-contain w-[44.99%] med-600:w-full "
        />
        <img
          alt=""
          src={entropyproduction}
          className="w-1/2 object-contain med-600:w-full"
        />
      </div>
      <Title className="mb-4 mt-11">ПИРАМИДА ИЕРАРХИИ СС</Title>
      <TitleBorder
        title={
          "При таком подходе СС разбиваются на подсистемы, те в свою очередь разбиваются на под подсистемы и так далее. При этом понижается пороговая магнитуда прогнозируемых сильных землетрясений, как правило уменьшаются и размеры систем"
        }
      />
      <img alt="" className="object-contain mt-11" src={mega} loading="lazy" />
      <Ul className={[styles.list, "mt-8"].join(" ")} data={data} />
      <Title className="mb-4 mt-11">ТРЕКОВАЯ ДИАГРАММА И СТАДИИ ПРОГНОЗА</Title>
      <TitleBorder
        title={
          "Мониторинг и прогноз осуществляется на основе трековой диаграммы и аттрактора"
        }
      />
      <div className="flex justify-between gap-5 med-600:flex-col med-600:justify-center med-600:items-center ">
        <img
          alt=""
          src={attreactor}
          className="object-contain w-1/2 med-600:w-full"
        />
        <img
          alt=""
          src={attreactor2}
          className="w-1/2 object-contain med-600:w-full"
        />
      </div>
      <Ul className={[styles.list, "mt-8"].join(" ")} data={ul_data} />
      <Title className="mb-4 mt-11">ВЕРОЯТНОСТЬ ПРОГНОЗА</Title>
      <TitleBorder
        title={
          "Прогноз делается на основе энергетических и трековых диаграмм, а вероятности являются дополнительными параметрами"
        }
      />
      <div className="mt-11 flex justify-between gap-5  med-600:flex-col-reverse">
        <div className="w-1/2 med-600:w-full">
          <p className="text-[18px] leading-[168.5%] text-justify med-600:text-sm">
            Рассчитываются три значения вероятности:
          </p>
          <Ul className={[styles.list].join(" ")} data={ul_data2} />
        </div>
        <img
          alt=""
          loading="lazy"
          className="object-contain w-1/3 med-600:w-full"
          src={shema}
        />
      </div>
    </Container>
  );
};
