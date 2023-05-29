import React from 'react';
import { Container, Title, TitleBorder, Ul } from '../../../components/reusable';
import styles from './technologiesBlock.module.css';
import { ApplicationProduct } from '../../ourProduct/blocks/ApplicationProduct';
const data = [
  'Метод, лежащий в основе КТ, основан: на введении новых физических параметров, рассчитываемых на основе сейсмостатистики; на концепции сейсмической системы (СС), в рамках которых сформулирован новый закон – закон производства сейсмической энтропии (Акопян С. Ц., 1995-2015 гг.). ',
  'Ретроспективный анализ показывает, что из 750 исторических сильных землетрясений 96% подчиняются новому закону. ',
  'Новые закономерности позволяют: устойчиво следить за развитием сейсмической неустойчивости во времени и пространстве; прогнозировать место, время и силу; исключать землетрясения на 97% от всего времени подготовки; делать мониторинг и оценить возможный сценарий развития сейсмичности; контролировать триггерную и техногенную сейсмичность; рассчитывать принципиально новые динамические карты сейсмической опасности; информировать о подготовке сильных землетрясений, цунами и возможных последствиях.',
];
export const TechnologyWorks = () => {
  return (
    <>
      <Container className="mb-[60px]">
        <Title>Как работает технология</Title>
        <div className="flex flex-col items-center mt-[40px]">
          <TitleBorder title="Основа технологии – это введение новых параметров, закон производства сейсмической энтропии и специализированный комплекс программ LMTP-SPQ." />
          <Ul data={data} className={styles.list}></Ul>
          <ApplicationProduct />
          <PlannedProducts />
        </div>
      </Container>
    </>
  );
};

export const PlannedProducts = () => {
  return (
    <>
      <Title>Категории планируемой продукции</Title>
      <div className={styles.bigBox}>
        <div className={styles.boxes}>
          <h1 className='text-[#EA3933] pb-[21px] text-[28px] font-semibold'>1 категория</h1>
          <p>Компьютерные системы глобального и регионального мониторинга.</p>
        </div>
        <div className={styles.boxes}>
          <h1 className='text-[#FEC60A] pb-[21px] text-[28px] font-semibold'>2 категория</h1>
          <p>Специализированные компьютерные программы, Приложения.</p>
        </div>
        <div className={styles.boxes}>
          <h1 className='text-[#89C53D] pb-[21px] text-[28px] font-semibold'>3 категория</h1>
          <p>Коммерческая информация в виде бюллетеней, анимации.</p>
        </div>
        <div className={styles.boxes}>
          <h1 className='text-[#01A1A1] pb-[21px] text-[28px] font-semibold'>4 категория</h1>
          <p>Коммерческие программы для индустрии</p>
        </div>
      </div>
    </>
  );
};
