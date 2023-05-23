import React from "react";
import styles from "./technologiesBlock.module.css";
import { Container, Title } from "../../../components/reusable";
import certificate from "../../../assets/main/technologies/certificate.svg";

export const AccumulatedExperience = () => {
  return (
    <>
      <Container
        className="min-h-[425px] flex items-center py-[100px] med-900:py-12"
        bg={styles.accumulated_experience}>
        <div className="flex flex-col gap-[70px] justify-between med-900:gap-12 med-600:gap-5">
          <Title>Накопленный опыт и апробация</Title>
          <p className=" text-xl text-justify text-black med-1200:text-sm">
            В On-Line режиме на сайте www.geoq.ru с 2008 по 2012 гг. было
            прогнозировано 18 землетрясений. На основе новых разработок к 2023
            году выявлено более 300 сейсмических систем верхнего энергетического
            уровня, расположенных на территории более 80 стран мира. КТ
            разрабатывалась и апробировалась на протяжении 30 лет. С 1988 года
            были сделаны многочисленные прогнозы землетрясений по всему миру в
            том числе в Калифорнии, в Италии, в Китае, в Иране, в Турции и
            Японии.
          </p>
        </div>
      </Container>
      <Container
        bg="bg-[linear-gradient(180deg,_#0026AA_0%,_#30CFFF_100%)]"
        className="flex flex-col pb-[42px] ">
        <div className="flex gap-[20px] justify-between med-1200:gap-[80px] med-900:flex-col-reverse med-900:gap-[40px] ">
          <p className="w-[50%] text-xl text-justify text-black mt-[92px] med-1200:text-sm med-900:mt-0 med-900:w-full ">
            По результатам конкурсного отбора, проведенного госкорпорацией
            "Росатом" 13 декабря 2017 года," Компьютерная технология для
            прогнозирования ожидаемого сейсмического воздействия и построения
            динамических карт сейсмической опасности для районов проектирования
            и размещения АЭС" была включена в Реестр инновационных решений,
            технологий, продукции, высокотехнологичных услуг в сфере
            капитального строительства объектов с использованием атомной энергии
            (см. сертификат Росатома № 002 2017).
          </p>
          <img
            src={certificate}
            alt=""
            className="max-w-md min-w-[200px] w-full h-[335px] object-cover mt-[92px] med-900:h-full"
          />
        </div>
      </Container>
      <Container className={styles.accumulated_bottom}>
        <div className={styles.title}>
          <h2>В области атомной и возобновляемой энергетики</h2>
          <p>
            КТ универсальна и ее можно использовать для прогнозирования
            сейсмической опасности АЭС и мест расположения основных
            энергетических объектов и коммуникаций
          </p>
        </div>
        <div className={styles.accumulated_text}>
          для On-Line мониторинга, прогноза землетрясений и цунами, для
          визуализации сейсмической обстановки на площадках действующих и
          проектируемых АЭС мира.
        </div>
        <div className={styles.accumulated_text}>
          для On-Line мониторинга, прогноза землетрясений и цунами, для
          визуализации сейсмической обстановки на площадках действующих и
          проектируемых АЭС мира.
        </div>
        <div className={styles.accumulated_text}>
          КТ позволяет создать динамические карты сейсмической опасности для
          площадок действующих и проектируемых АЭС дополнительно к существующим
          традиционным картам; внедрить динамический паспорт расчета
          сейсмических нагрузок на АЭС, на топливно-энергетические сооружения и
          коммуникации.
        </div>
      </Container>
    </>
  );
};
