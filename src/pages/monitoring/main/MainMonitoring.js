import React from "react";
import {
  Container,
  CustomUl,
  Title,
  TitleBorder,
} from "../../../components/reusable";
import {
  AllQuakes,
  Describtion,
  HaitiExample,
  Levels,
  Map,
  MonitoringTable,
  NationalScheme,
  QuakeSources,
} from "./blocks";

// Images
import bg_img from "../../../assets/main/monitoring/main/bg-img.svg";
import img1 from "../../../assets/main/monitoring/main/monitoring-img1.png";
import tableImg1 from "../../../assets/main/monitoring/main/table-imgs/table-img1.svg";
import { useEffect } from "react";
import axios from "axios";

const data = [
  {
    src: tableImg1,
    describtion:
      "Граница плит спрединг – плиты расходятся и образуется новая кора (Тип А)",
  },
  {
    src: tableImg1,
    describtion: "Граница столкновения плит (Тип B, D)",
  },
  {
    src: tableImg1,
    describtion: "Граница трансформных разломов (Тип C)",
  },
  {
    src: tableImg1,
    describtion: "Бывшие границы плит, теперь неактивные.",
  },
  {
    src: tableImg1,
    describtion:
      "Диффузные зоны – области накопления напряжений и образования микроплит (Типы А, В, С, D)",
  },
  {
    src: tableImg1,
    describtion: "Горячие точки",
  },
  {
    src: tableImg1,
    describtion: "Движение плит",
  },
];

const ul_data = [
  <p className="text-[#1A374D]">
    точность прогноза землетрясений по времени от{" "}
    <span className="text-[#022FAE] font-bold">6 месяцев до 1 недели</span>, в
    зависимости от конкретной ситуации;
  </p>,
  <p>
    точность прогноза по магнитуде ± 0.1; большие отклонения по магнитуде
    оговариваются отдельно;
  </p>,
  <p>
    точность прогноза землетрясения по месту на поверхности Земли и по глубине
    очага ограничена размерами СС и может достигать размеров очага
    прогнозируемого землетрясения;
  </p>,
  <p>
    если внутри СС указывается зона ожидания сильного землетрясения, то
    автоматически в других местах внутри СС сильное землетрясение исключается,
    т.е. контролируется весь объем СС
  </p>,
  <p>
    элементы СС в ограниченном временном интервале (от 1 до 6 месяцев) могут
    находиться в неустойчивом состоянии, и если за это время сильное
    землетрясение не произойдет, то система вновь перейдет в устойчивое
    состояние
  </p>,
  <p>
    в зависимости от развития сейсмической ситуации результаты прогноза со
    временем могут изменяться и уточняться. Неустойчивость (прогнозируемое место
    землетрясения) может мигрировать внутри СС от одной разломной зоны к другой,
    прогнозируемое время ожидания землетрясения может удаляться или приближаться
    и соответственно магнитуда ожидаемого землетрясения может изменяться (все
    это заложено в методе)
  </p>,
  <p>
    точность прогноза по магнитуде ± 0.1; большие отклонения по магнитуде
    оговариваются отдельно;
  </p>,
];

export const MainMonitoring = () => {
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/contacts", {
          headers: {
            "Content-Type":
              "multipart/form-data; application/x-www-form-urlencoded; charset=UTF-8;application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoibmFtZSIsImVtYWlsIjoibmFtZSIsImlkIjoiNjQ2NjcyMjA1MmQ1MzFhNWFlOWIzMzRhIn0sImlhdCI6MTY4NDQzNjU3MSwiZXhwIjoxNjg0NDM3NDcxfQ.4cSTanQWU7W-jNDu3zNuj6SfEhGDM5GpmaEdP_KZGAI",
            "Access-Control-Allow-Origin": "http://localhost:3001/",
          },
        });

        console.log(res.data);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };

    fetchContacts()
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally((e) => {
        console.log("Finally");
      });
  }, []);
  return (
    <>
      <Container className="pb-[50px] py-[var(--py)]">
        <Title className="mb-4">Мониторинг и Прогноз</Title>
        <TitleBorder title="Производится на основе: метода сейсмической энтропии (МСЭ), на концепции Сейсмической Системы, которые выявляются в сейсмоопасных регионах с позиций плитовой тектоники" />
        <img className="py-5" src={img1} alt="" />
        <MonitoringTable {...{ data }} />
        <QuakeSources />
      </Container>
      <div className="relative">
        <img
          className="w-full min-h-[247.88px] med-600:object-cover"
          src={bg_img}
          alt=""
        />
        <Container
          bg="absolute top-0 left-0 w-full h-full"
          className="h-full flex justify-center items-center"
        >
          <p className="font-semibold text-[26px] text-white leading-[168.5%] py-3 text-center med-1200:text-[14px]">
            96% землетрясений на Земле происходят в условиях сжатия в зонах
            взаимодействия литосферных плит (90% приходятся на Тихоокеанскую
            плиту и 6% на Средиземноморско-Альпийско-Гималайский пояс). В
            рифтовых зонах в обстановке растяжения выделяется менее 1%
            сейсмической энергии Земли.
          </p>
        </Container>
      </div>
      <NationalScheme />
      <Map />
      <CustomUl
        title="ТОЧНОСТЬ ПРОГНОЗОВ"
        subtitle="Прогноз по МСЭ производится в рамках заранее оговоренных условий:"
        data={ul_data}
      />
      <Levels />
      <Describtion />
      <HaitiExample />
      <AllQuakes />
    </>
  );
};
