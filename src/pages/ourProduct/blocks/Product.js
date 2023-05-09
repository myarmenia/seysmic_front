import React from "react";
import styles from "../blocks/product.module.css";
import { Container, Title, Ul } from "../../../components/reusable";
import red from "../../../assets/main/products/red.png";
import yellow from "../../../assets/main/products/yellow.png";
import green from "../../../assets/main/products/green.png";
import blue from "../../../assets/main/products/blue.png";

const products = [
  {
    text: [
      "1.1. Глобальная система мониторинга (ГСМ): для страхования; для группы стран регионов для UNISDR; для ГК Росатом МАГАТЭ; для мобильных систем; для туристических компаний.",
      "1.2. Глобальные динамические карты СО: для Строителей и Проектировщиков",
      "1.3. Другие области: для сейсмологов, физиков и космологов",
    ],
    color: red,
    textColor: "#EA3933",
    category: "1 категория",
    categoryText:
      "Компьютерные системы глобального и регионального мониторинга.",
  },
  {
    text: [
      "2.1. Специализированные компьютерные программы из категории 1.1 для отдельных стран; Приложения",
      "2.2.Специализированные компьютерные программы: для России, Ирана, Китая, Средиземноморских стран' для стран Карибского бассейна; для островных государств Океании; для стран Африки, Ближнего Востока; для Среднеазиатских стран, Японии, ЮВ Азии.",
    ],
    textColor: "#FEC60A",
    color: yellow,
    category: "2 категория",
    categoryText: "Специализированные компьютерные программы, Приложения.",
  },
  {
    text: [
      "3.1 Специализированные Бюллетени: для UNDRR; для медиа компаний; для рекламных дисплеев и панелей; для страховых компаний; для туристических  компаний; для интернет компаний; для компаний мобильных телесистем.",
      "3.2. Видео Бюллетени; популярные фильмы; компьютерные игры для сейсмического обучения и образования.",
    ],
    textColor: "#89C53D",
    color: green,
    category: "3 категория",
    categoryText:
      "Коммерческая информация в виде бюллетеней, рекламы, анимации.",
  },
  {
    text: [
      "4.1. Специализированные программы для нефтегазовых разработок.",
      "4.2. Специализированные экологические программы.",
      "4.3. Специализированные программы для контроля техногенных сооружений и коммуникаций (мосты, тоннели, эстакады, плотины, трубопроводы, газонефтепроводные и т. д.).",
    ],
    textColor: "#01A1A1",
    color: blue,
    category: "4 категория",
    categoryText: "Коммерческие программы для индустрии",
  },
];
const ProductCard = (props) => {
  const { text, color, textColor, category, categoryText } = props;
  return (
    <div className={styles.card_box}>
      <div className={styles.card_box_child}>
        <div className={styles.left_box}>
          <h2 style={{ color: textColor }}>{category}</h2>
          <p>{categoryText}</p>
        </div>
        <div
          className={styles.right_box}
          style={{ backgroundImage: `url(${color})` }}
        >
          {text.map((el, i) => {
            return <p key={i}>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
const data = [
  " Заинтересованным покупателям мы готовы продемонстрировать модификацию продукции для Японии, Италии, Индонезии, Ирана, Индии, Пакистана, Китая, Калифорнии, Мьянмы, стран центральной Африки и Карибского бассейна.",
  "Для эксплуатации готовой Программной продукции клиенты будут обучаться самостоятельному пользованию программой, возобновлению входной информации из Интернета в он лайн режиме, а мы соответственно будем дублировать мониторинг. Для корректировки, в квартал раз будем предоставлять обновления входных данных. Клиентам со скидкой будут представлены возможности приобретения новых усовершенствованных версии программного продукта.",
];

export const Product = () => {
  return (
    <Container className="text-light-grey">
      <div className="flex flex-col items-center">
        <div className={styles.line}></div>
        <p className="text-2xl text-center my-[25px] med-1200:text-lg ">
          Метод сейсмической энтропии основан на концепции Сейсмической Системы,
          которые выявляются в сейсмоопасных регионах с позиций плитовой
          тектоники.
        </p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.product_card}>
        <Title>Продукция</Title>

        {products.map((product, index) => {
          return <ProductCard {...product} key={index} />;
        })}
      </div>
      <Ul className={styles.list} data={data}></Ul>
    </Container>
  );
};
