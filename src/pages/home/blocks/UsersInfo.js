import React from 'react';
import { CustomUl } from '../../../components/reusable';
import { useTranslation } from '../../../hooks';

export const UsersInfo = () => {
  const {
    home: { uldata: language },
  } = useTranslation().language;

  return (
    <div className="[&_b]:text-[#022FAE]">
      <CustomUl title={language?.title} data={language?.data} />
    </div>
  );
};
