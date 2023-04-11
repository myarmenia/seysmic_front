import React from "react";
import styles from "../blocks/product.module.css";
import { Container, Title } from "../../../components/reusable";
import color from "../../../assets/main/products/color.svg";
import yellow from "../../../assets/main/products/yellow.svg";
const colors = [color, yellow];
const ProductCard = ({ color }) => {
  return (
    <div className={styles.card_box}>
      <div className={styles.card_box_child}>
        <div>
          <h2>1 категория</h2>
          <p>Компьютерные системы глобального и регионального мониторинга.</p>
        </div>
        <div className={styles.bg}>
          <img src={color} alt="" className="object-cover"/>
          {/* // <p>
          //   1.1. Глобальная система мониторинга (ГСМ): для страхования; для
          //   группы стран регионов; для UNISDR; для ГК Росатом МАГАТЭ; для
          //   мобильных систем; для туристических компаний.
          // </p>
          // <p>
          //   1.2. Глобальные динамические карты СО: для Строителей и
          //   Проектировщиков
          // </p>
          // 1.3. Другие области: для сейсмологов, физиков и космологов
          // <p></p> */}
        </div>
      </div>
    </div>
  );
};
export const Product = () => {
  return (
    <Container className="mt-[80px] text-light-grey">
      <div className="flex flex-col items-center">
        <div className={styles.line}></div>
        <p className="text-2xl text-center my-[25px]">
          Метод сейсмической энтропии основан на концепции Сейсмической Системы,
          которые выявляются в сейсмоопасных регионах с позиций плитовой
          тектоники.
        </p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.product_card}>
        <Title>Продукция</Title>
        {colors.map((color, index) => {
          return <ProductCard color={color} key={index} />;
        })}
      </div>
    </Container>
  );
};
