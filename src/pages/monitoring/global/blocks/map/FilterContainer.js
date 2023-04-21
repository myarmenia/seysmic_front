import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { SearchInput } from "../../../../../components/forms";

export const FilterContainer = () => {
  const data = useLoaderData();
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState(data);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const searchClick = () => {
    if (!value.trim()) setCountries(data);
    else {
      setCountries(data.filter(({ name }) => name.includes(value.trim())));
    }
  };

  return (
    <div className="absolute top-[50px] left-[12px] flex flex-col gap-[19px] py-[27px] px-[30px] bg-white rounded-[20px] shadow-[3px_0px_15px_rgba(0,_0,_0,_0.15);]">
      <div className="flex flex-col gap-[30px]">
        <span className="text-black text-[21px] font-semibold">
          Поиск по списку стран
        </span>
        <SearchInput
          onButtonClick={searchClick}
          inputProps={{
            placeholder: "Поиск",
            value,
            onChange: handleChange,
          }}
          clearValue={() => setValue("")}
        />
      </div>
      <div className="flex flex-col gap-3 px-5">
        <span className="font-medium text-[21px]">Регионы</span>
        <div className="flex flex-col gap-[19px] max-h-[450px] overflow-y-auto overflow-x-hidden">
          {countries.map(({ name, id }, i) => (
            <CountryBox title={name} index={id} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
const CountryBox = ({ index, title }) => {
  return (
    <div className="text-[#606060] text-[18px]">
      {index} - {title}
    </div>
  );
};
