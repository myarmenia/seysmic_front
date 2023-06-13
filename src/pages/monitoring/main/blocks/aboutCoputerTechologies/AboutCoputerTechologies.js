import { Container, Title, TitleBorder, Ul } from '../../../../../components/reusable';
import attreactor from '../../../../../assets/aboutCoputerTechologiesphoto/attractor.png';
import attreactor2 from '../../../../../assets/aboutCoputerTechologiesphoto/attractor2.png';
import entropyproduction from '../../../../../assets/aboutCoputerTechologiesphoto/entropyproduction.png';
import mega from '../../../../../assets/aboutCoputerTechologiesphoto/mega.png';
import seismicSystem from '../../../../../assets/aboutCoputerTechologiesphoto/seismicSystem.png';
import shema from '../../../../../assets/aboutCoputerTechologiesphoto/shema.png';
import file_pdf from '../../../../../assets/icons/file-pdf.svg';
import styles from './aboutCoputerTechologies.module.css';
import { useTranslation } from '../../../../../hooks';

export const AboutCoputerTechologies = () => {
  const { monitoring_and_prediction: language } = useTranslation().language;
  console.log(language?.SE_and_CT);
  const data = [
    'Мониторинг иерархии СС сверху вниз позволяет детализировать и снизить порог прогнозируемых землетрясений и одновременно повышать точность и надежность прогнозов сильных землетрясений в СС верхнего энергетического уровня (рис. слева)',
    'При выборе конкретного объекта (например, площадки АЭС) мониторинг иерархии СС производится с низу вверх только в тех СС, в которые попадает выбранный объект (рис. справа)',
  ];
  const ul_data = [
    "На трековой диаграмме показаны разные стадии тревог и ожидания сильных землетрясений по мере развития траектории и приближения к аттрактору (рис. слева) <br/> <span class='text-[#7BB500] font-semibold ml-[30px]'>D, C, С1, С2 – Зеленая стадия, не опасная</span> (долгосрочно-среднесрочная, годы–месяцы)<br><span class='text-[#FF0000] ml-[30px] font-semibold'>B1-3, В0, A1-3, А0 – Красная стадия, опасная</span> (среднесрочно-краткосрочная, месяцы–дни)",
    'Показаны разные проявления сейсмичности (форшоки, сейсмические рои и затишья, триггеры и т.д.) (рис. справа)',
  ];
  const ul_data2 = [
    'PK – вероятность по кумулятивной энергии',
    'PW – вероятность по энтропии',
    'P =PK*PW – вероятность сильного землетрясения (эта вероятность равна нулю вне аттрактора и начинает расти, когда траектория входит в аттрактор)',
  ];
  return (
    <Container className="mb-[115px]">
      <Title className="mb-4">{language.SE_and_CT.title}</Title>
      <TitleBorder title={`${language.SE_and_CT.subTitle}`} />
      <p className="mt-8 text-[18px] leading-[168.5%] text-justify med-600:text-sm whitespace-pre-line ">
        {language.SE_and_CT.text1}
        <a href="/" className="inline">
          <img alt="" className="inline" loading="lazy" src={file_pdf} />
        </a>
        {language.SE_and_CT.text2}
      </p>
      <Title className="mt-11 mb-8 snap-x snap-mandatory">{language.SS_and_LSE.title}</Title>
      <div className="flex justify-between gap-5 med-600:flex-col med-600:justify-center med-600:items-center w-[80%] mx-auto med-900:w-full">
        <img
          loading="lazy"
          alt=""
          src={seismicSystem}
          className="object-contain w-[44.99%] med-600:w-full "
        />
        <img
          loading="lazy"
          alt=""
          src={entropyproduction}
          className="w-1/2 object-contain med-600:w-full"
        />
      </div>
      <Title className="mb-4 mt-11">{language.Pyramid.title}</Title>
      <TitleBorder title={`${language.Pyramid.subTitle}`} />
      <img alt="" className="object-contain mt-11" src={mega} loading="lazy" />
      <Ul className={[styles.list, 'mt-8'].join(' ')} data={language.Pyramid.texts} />
      <Title className="mb-4 mt-11">{language.Diagram_Prediction.title}</Title>
      <TitleBorder title={language.Diagram_Prediction.subTitle} />
      <div className="flex justify-between gap-5 med-600:flex-col med-600:justify-center med-600:items-center w-[80%] mx-auto med-900:w-full">
        <img
          loading="lazy"
          alt=""
          src={attreactor}
          className="object-contain w-1/2 med-600:w-full"
        />
        <img
          loading="lazy"
          alt=""
          src={attreactor2}
          className="w-1/2 object-contain med-600:w-full"
        />
      </div>
      <Ul className={[styles.list, 'mt-8'].join(' ')} data={language.Diagram_Prediction.texts} />
      <Title className="mb-4 mt-11">{language.Prediction_Probability.title}</Title>
      <TitleBorder title={language.Prediction_Probability.subTitle} />
      <div className="mt-11 flex justify-between gap-5  med-600:flex-col-reverse w-[80%] mx-auto med-900:w-full">
        <div className="w-1/2 med-600:w-full">
          <p className="text-[18px] leading-[168.5%] text-justify med-600:text-sm">
            {language.Prediction_Probability.ulTitile}
          </p>
          <Ul className={[styles.list].join(' ')} data={language.Prediction_Probability.texts} />
        </div>
        <img alt="" loading="lazy" className="object-contain w-1/3 med-600:w-full" src={shema} />
      </div>
    </Container>
  );
};
