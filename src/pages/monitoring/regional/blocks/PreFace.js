import React from "react";
import regionalMap from "../../../../assets/main/monitoring/regional/regionalMap.svg";
import { Title } from "../../../../components/reusable";
import { useTranslation } from "../../../../hooks";
export const PreFace = () => {
  const { regional_monitoring: language } = useTranslation().language;

  return (
    <div>
      <Title>{language?.title}</Title>
      <img
        loading="lazy"
        src={regionalMap}
        alt="regionalMap"
        className="mx-auto my-[57px]"
      />
    </div>
  );
};
