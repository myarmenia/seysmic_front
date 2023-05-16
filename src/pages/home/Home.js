import React from "react";
import {
  EarthquakePlaces,
  Globuses,
  ImageSlider,
  News,
  Partners,
  PressRelease,
  UsersInfo,
} from "./blocks";
import instance from "../../api";
import { filterByLang } from "../../helper";
import h1_icon from "../../assets/trash/home/h1.svg";
import organization from "../../assets/trash/home/organization.svg";
import axios from "axios";

const Component = () => {
  return (
    <>
      <ImageSlider />
      <Globuses />
      <EarthquakePlaces />
      <PressRelease />
      <Partners />
      <News />
      <UsersInfo />
    </>
  );
};

// const data = {
//   success: true,
//   data: [
//     {
//       id: 1,
//       title_en: "title en",
//       title_am: "title am",
//       title_ru: "title ru",
//       description_en:
//         "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>",
//       description_am:
//         "<pre>\r\n<strong>Lorem Ipsum-ը տպագրության և տպագրության ոլորտի </strong>ուղղակի կեղծ տեքստ է: Lorem Ipsum-ը եղել է արդյունաբերության ստանդարտ կեղծ տեքստը դեռևս 1500-ական թվականներից, երբ անհայտ տպիչը վերցրեց տիպի ճաշարան և խառնեց այն՝ ստեղծելու տիպային գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև ցատկ դեպի էլեկտրոնային տպագրություն՝ ըստ էության մնալով անփոփոխ։ Այն հանրաճանաչ դարձավ 1960-ականներին՝ թողարկելով Letraset թերթերը, որոնք պարունակում էին Lorem Ipsum հատվածներ, իսկ վերջերս՝ աշխատասեղանի հրատարակման ծրագրաշարով, ինչպիսին է Aldus PageMaker-ը, ներառյալ Lorem Ipsum-ի տարբերակները:</pre>\r\n\r\n<ul>\r\n\t<li>թվականներից, երբ անհայտ տ</li>\r\n\t<li>աշխատասեղանի հրատարակման ծրագրաշարով,</li>\r\n</ul>",
//       description_ru:
//         "<pre>\r\n<strong>Lorem Ipsum-ը տպագրության և տպագրության ոլորտի </strong>ուղղակի կեղծ տեքստ է: Lorem Ipsum-ը եղել է արդյունաբերության ստանդարտ կեղծ տեքստը դեռևս 1500-ական թվականներից, երբ անհայտ տպիչը վերցրեց տիպի ճաշարան և խառնեց այն՝ ստեղծելու տիպային գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև ցատկ դեպի էլեկտրոնային տպագրություն՝ ըստ էության մնալով անփոփոխ։ Այն հանրաճանաչ դարձավ 1960-ականներին՝ թողարկելով Letraset թերթերը, որոնք պարունակում էին Lorem Ipsum հատվածներ, իսկ վերջերս՝ աշխատասեղանի հրատարակման ծրագրաշարով, ինչպիսին է Aldus PageMaker-ը, ներառյալ Lorem Ipsum-ի տարբերակները:</pre>\r\n\r\n<ul>\r\n\t<li>թվականներից, երբ անհայտ տ</li>\r\n\t<li>աշխատասեղանի հրատարակման ծրագրաշարով,</li>\r\n</ul>",
//       date: "2023-05-09",
//       time: "17:57:00",
//       logo: "/var/www/SeiEn_back/storage/app/public/press-releases/1/e517ba5cc6212c0ee2923f843bcec7a4.png",
//       files: [
//         {
//           type: "image",
//           path: "public/press-releases/1/450422a086a00cab33b2b44538758655.jpg",
//         },
//         {
//           type: "image",
//           path: "public/press-releases/1/e946e88dd6467e80f978439273c861da.jpg",
//         },
//         {
//           type: "image",
//           path: "public/press-releases/1/a087e028530449214600d8717251ccbb.jfif",
//         },
//       ],
//       links: [
//         "/var/www/SeiEn_back/storage/app/http://seien.loc/press-release/create",
//         "/var/www/SeiEn_back/storage/app/http://seien.loc/press-release/create/1",
//       ],
//     },
//   ],
//   message: "success",
// };

// url: http://37.157.220.107:8880/api/press-releases
// url:http://37.157.220.107:8880/api/news
const loader = async ({ params: { lang } }) => {
  // const res = await instance.get(`news`);
  // const res1 = await instance.get(`press-releases`);
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );

  const data1 = res.data.map((el) => ({
    title: "Название организации",
    icon: h1_icon,
    image: organization,
    date: "24.02.2023",
    time: "16:00",
    description: el.body.split(" ").slice(0, 8).join(" ") + "...",
    // to: `/press-release/${el.id}`,
  }));

  // const translatedData = filterByLang(res1.data.data, lang);
  // console.log(res1);

  return { earth_quakes: res.data, press_release: data1 };
};

export const Home = Object.assign(Component, { loader });
