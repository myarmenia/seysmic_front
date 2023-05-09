import React from "react";
import regionalMap from "../../../../assets/main/monitoring/regional/regionalMap.svg";
import { Title } from "../../../../components/reusable";
export const PreFace = () => {
  return (
    <div>
      <Title>региональный мониторинг</Title>
      <img src={regionalMap} alt="regionalMap" className="mx-auto my-[57px]" />
    </div>
  );
};
