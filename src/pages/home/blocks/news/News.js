import React from "react";
import { Container, Title } from "../../../../components/reusable";
import styles from "./news.module.css";
import logo from "../../../../assets/main/logo.svg";
import img from "../../../../assets/main/book-img.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { generateArray } from "../../../../helper";
import { CustomBtn } from "../../../../components/forms";

const data = generateArray(1, {
  title: "Энтропия, Сейсмология и Взгляд в Космологию:",
  subtitle: "Теория Возникновения и Эволюции",
  author: "Автор: Акопян С.Ц.",
  place: "Издательство Кембриджских ученых, Лондон. 332, 2023г",
  description: `В книге показано, что для изучения происхождения Вселенной, нет
    необходимости взглянуть на дальний космос или заглянуть вглубь
    материи, а достаточно необычным образом взглянуть на то, что
    скрывается у нас под ногами – на нашу Землю. Отмечается, что в
    сейсмичности Земли скрыты закономерности, которые можно
    «увидеть», оперируя новыми сейсмическими параметрами. Такой
    подход позволяет построить теорию энтропийной сейсмологии,
    которую можно применять при решении задачи прогноза
    землетрясений, построения динамических карт сейсмической
    опасности, контроля возникновения нежелательной сейсмичности в
    результате деятельности человека. Эта теория позволяет
    разработать сейсмический формализм в терминах, приемлемых для
    космологии. позволяющий взглянуть на современные проблемы физики
    и космологии с необычных позиций энтропийной сейсмологии.
    Построена некоторая реалистическая картина образования первичной
    ткани – темной энергии и темной материи из гравитонов и
    антигравитонов, в которой при определенных условиях зарождаются
    Вселенные. Показано, что диссипативная энтропийная сила –
    антигравитация, это, по существу, новый тип взаимодействия в
    Природе, пронизывающее все пространство. Книга предназначена для
    специалистов в области сейсмологии, прогноза землетрясений,
    физики, космологии, синергетики и др.`,
});

export const News = () => {
  return (
    <div className="py-[40px] max-w-[1440px] mx-auto">
      <div className="med-600:h-[44px] relative w-full mb-[65px] med-600:justify-between med-600:flex">
        <div className={styles.logo}>
          <img className="mx-auto" src={logo} alt="" />
        </div>
        <Title className={styles.title}>НОВОСТИ</Title>
      </div>
      <Container>
        <Swiper pagination={true} modules={[Pagination]} className="w-full">
          {data.map((el, i) => (
            <SwiperSlide key={i}>
              <Box {...el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

// const news_keys = {
//   id,
//   title,
//   description,
//   image,
//   button_text,
//   status,
// };

const Box = ({ author, place, subtitle, title, description, image }) => {
  return (
    <div className="flex flex-col gap-[35px] items-center mb-[50px]">
      <div className="grid grid-cols-2 gap-[50px] med-1200:inline med-600:grid med-600:grid-cols-1 med-600:gap-6">
        <img
          className="med-1200:float-left med-1200:w-[40%] med-600:w-full"
          src={img}
          alt=""
        />
        <div className="flex flex-col gap-1 text-black text-justify med-1200:inline">
          <b className="flex flex-col">
            <span className="font-semibold text-base">{title}</span>
            <span className="font-semibold text-sm">{subtitle}</span>
            <span className="text-xs font-normal my-2">{author}</span>
          </b>
          <div>
            <span className="text-[10px] my-2">{place}</span>
            <p className="leading-[170%] text-xs">{description}</p>
          </div>
        </div>
      </div>
      <CustomBtn>Купить книгу</CustomBtn>
    </div>
  );
};
