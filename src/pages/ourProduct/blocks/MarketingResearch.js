import React from "react";
import { Container, Title } from "../../../components/reusable";
import search from "../../../assets/main/products/search.svg";
import styles from "../blocks/product.module.css";

export const MarketingResearch = () => {
  return (
    <Container bg="bg-[#F9F9F9]" className="py-[70px]">
      <Title>МАРКЕТИНГОВЫЕ ИССЛЕДОВАНИЯ</Title>
      <div className={styles.marketing_research}>
        <div className={styles.marketing_research_child}>
          <div>
            <img src={search} alt="search" />
            <p>
              Проведенные маркетинговые исследования показали отсутствие в мире
              аналогов продукции на основе предложенной технологии.
            </p>
          </div>
        </div>
        <div className={styles.marketing_research_child}>
          <div>
            <img loading="lazy" src={search} alt="search" />
            <p>
              По результатам данного исследования коммерческая значимость
              технологии была определена не только в правительственной и
              государственной сферах, но и в частных компаниях в сферах
              строительного бизнеса, атомной энергетики, страхового бизнеса,
              мобильных Телесистем и т. д.
            </p>
          </div>
        </div>
        <div className={styles.marketing_research_child}>
          <div>
            <img loading="lazy" src={search} alt="search" />
            <p>
              Основным экономическим эффектом продукции является ее
              относительная дешевизна и высокая эффективность. Анализ возможных
              рисков для восстановления инвестиций показывает, что это зависит в
              первую очередь от новизны продукта, от ее универсальности, от
              простоты управления и качества визуализации программного продукта,
              от качества и точности полученных результатов для практического
              применения.
            </p>
          </div>
        </div>
        <div className={styles.marketing_research_child}>
          <div>
            <img loading="lazy" src={search} alt="search" />

            <p>
              Тестирование технологии показало, что точность полученных
              результатов на порядок выше, чем точность дорогостоящих наземных
              космических методов, применяемых в развитых странах, таких как США
              и Япония, где действуют самые современные сети наблюдений, и где
              лучше всего решаются задачи сейсмостойкого строительства и
              перспективного проектирования.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
