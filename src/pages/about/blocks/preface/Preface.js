import React from "react";
import img from "../../../../assets/main/about/Ararat.svg";
import { Container } from "../../../../components/reusable";
import person1_img from "../../../../assets/main/about/person1.svg";
import person2_img from "../../../../assets/main/about/person2.svg";

const persons = [
  {
    image: person1_img,
    name: "Лалаян Герман Григорьевич",
    roles: ["Учредитель", "Президент Фонда LGG"],
    description:
      "Фонд является новой некоммерческой организацией, которая поможет юридически оформить деятельность по поддержке технологических социально-значимых проектов, которая ведется уже не первый год. Мы не можем рассказать о длинной истории и больших достижениях, но все проекты, которые мы поддерживаем сейчас и поддержим в будущем, нацелены на спасение жизней.\nМы не будем привлекать средства на лечение больных – для этого есть сотни и тысячи других фондов, которые занимаются этой важной работой.",
  },
  {
    image: person2_img,
    name: "Акопян Самвел Цолакович",
    roles: [
      "Учредитель и генеральный директор",
      "Член Российского Экспертного Совета по прогнозу землетрясений, сейсмической опасности и риска (РЭС).",
      "Доктор физико-математических наук.",
      "Академик Международной академии по геоэкологии (МАГ).",
      "Имеет свыше 90 публикаций, две монографии и 5 компьютерных разработок.",
    ],
  },
];

export const Preface = () => {
  return (
    <div>
      <div
        style={{
          background: `url('${img}') no-repeat`,
          backgroundSize: "cover",
        }}
        className="h-[490px] bg-cover med-600:h-[200px]"
      >
        <p className="text-white h-full text-[36px] leading-[168%] flex flex-col items-center justify-center text-center med-600:text-[16px] max-w-[80%] mx-auto">
          <span className="text-[30px] font-bold med-600:text-[14px]">
            Международный Центр{" "}
          </span>
          <span className="font-bold">
            Глобального Мониторинга Сейсмического Риска
          </span>
          <span className="font-bold">
            <i className="text-[#2FCBFD]">“SeiEn”</i> LLC
          </span>
        </p>
      </div>
      <Container className="py-[38px]">
        <p className="leading-[168.5%] text-xl med-600:text-[14px] med-600:leading-[165%]">
          Наша компания ООО «СейЭн» была создана в октябре 2022 года в Ереване,
          Армения (учредители Акопян С.Ц. и Лалаян Г.Г.). Она является
          правопреемником компаний Центр прогнозирования землетрясений,
          «ГеоКвейк» (ООО «ЦПЗ Геоквейк», г. Москва, 2007-2012 гг.) и
          Международного центра глобального мониторинга и прогноза сейсмической
          погоды (О ОО «СейЭн», г. Москва, 2018-2022 гг.), учредителем и
          генеральным директором которых был Акопян С.Ц.
          <br />
          <br />
          <br />
          Основная деятельность ООО «СейЭн», направлена на мониторинг и
          прогнозирование землетрясений, на оценку сейсмического риска от
          ожидаемых землетрясений, на глобальное снижение ущерба от ожидаемых
          землетрясений и цунами посредством внедрения инновационных технологий
          в области энтропийной сейсмологии, способствующих повышению
          устойчивости общества к бедствиям в области землетрясений и цунами.
          Она соответствует стратегии и хартии United Nations Office for
          Disaster Risk Reduction (UNDRR, www.undrr.org) и вписывается в рамки
          Сендайской рамочной программы для уменьшения риска бедствий на
          2015–2030 гг. (принятой на 3-й Всемирной конференции ООН в Сендаи,
          Япония, 18 марта 2015)
        </p>
      </Container>
      <div className="bg-[#F0F2F5] border-collapse">
        {persons.map((el, i) => (
          <Box {...el} key={i} className={i % 2 ? "flex-row-reverse" : ""} />
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
          "flex gap-[65px] items-start med-900:!flex-col-reverse " + className
        }
      >
        <div className="flex flex-col">
          <span className="text-dark-blue font-bold text-[24px] pb-[20px]">
            {name}
          </span>
          <div className="flex flex-col justify-between gap-3">
            {roles.map((role, i) => (
              <p
                key={i}
                className="text-[20px] text-black font-bold leading-[180%] med-600:text-[14px]"
              >
                {role}
              </p>
            ))}
          </div>
          {description && (
            <p className="text-justify font-medium text-[15x] leading-[180%] mt-[26px] whitespace-pre-wrap med-600:text-[14px] med-600:leading-[180%]">
              {description}
            </p>
          )}
        </div>
        <img src={image} alt="" />
      </Container>
    </div>
  );
};
