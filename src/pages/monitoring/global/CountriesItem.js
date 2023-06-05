import React from "react";
import globalMap from "../../../assets/main/monitoring/globalMap.svg";
import { Container, Title } from "../../../components/reusable";
import instance from "../../../api";
import { useLoaderData } from "react-router";

const Component = () => {
  const data = useLoaderData();
  console.log(data, 1221);
  return (
    <Container className="py-[var(--py)]">
      <Title>Глобальный мониторинг</Title>
      <img src={data.image_path} alt="" className="mx-auto mb-0 mt-[50px]" />
      <div className="flex gap-3 med-900:flex-col">
        <div className="grid grid-cols-2 gap-3 mt-[110px] med-1200:mt-5 med-1200:grid-cols-1">
          <div className="flex flex-col gap-3">
            <span className="text-[26px] font-semibold med-600:text-base">
              {data?.title}
            </span>

            <p
              className="text-xl med-600:text-xs "
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></p>
          </div>
        </div>
        <div></div>
        <img
          src={data?.schema_path}
          alt=""
          className="mx-auto w-1/2 object-contain mb-0 mt-[50px]"
        />
      </div>
      <div className="grid grid-cols-4 gap-[17px] mt-[120px] med-900:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] med-600:grid-cols-2">
        {data?.files.map(({ path }) => (
          <img
            src={path}
            className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"
          />
        ))}
      </div>
    </Container>
  );
};
const loader1 = async ({ params: { lang, id } }) => {
  try {
    const res = await instance.get(`region-info/${id}?lng=${lang}`);
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
const loader2 = async ({ params: { lang, id } }) => {
  try {
    const res = await instance.get(`map-region-info/${id}?lng=${lang}`);
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const CountriesItem = Object.assign(Component, { loader1, loader2 });
