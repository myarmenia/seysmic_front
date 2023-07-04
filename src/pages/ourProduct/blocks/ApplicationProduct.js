import React, { useMemo } from 'react';

import { Container, Title } from '../../../components/reusable';
import stylesru from '../blocks/product.module.css';
import stylesen from '../blocks/producten.module.css';
import stylesam from '../blocks/productam.module.css';
import { useTranslation } from '../../../hooks';
import { useParams } from 'react-router';

export const ApplicationProduct = () => {
  const { technology: language } = useTranslation().language;
  const { lang } = useParams();
  const styles = useMemo(() => {
    if (lang === 'ru') {
      return stylesru;
    } else if (lang === 'en') {
      return stylesen;
    } else if (lang === 'am') {
      return stylesam;
    }
  }, [lang]);

  return (
    <Container className="mt-[60px] med-965:hidden">
      <Title>{language.areas_of_application.title}</Title>
      <div className={styles.main}>
        <div>
          <div id={styles.box_img}>
            <div id={styles.box_img0}></div>
            <div id={styles.box_img1}></div>
            <div id={styles.box_img2}></div>
            <div id={styles.box_img3}></div>
            <div id={styles.box_img4}></div>
            <div id={styles.box_img5}></div>
          </div>
          <div id={styles.box_img_second}>
            <div id={styles.box_img_second0}></div>
            <div id={styles.box_img_second1}></div>
            <div id={styles.box_img_second2}></div>
            <div id={styles.box_img_second3}></div>
          </div>
        </div>
      </div>
    </Container>
  );
};
