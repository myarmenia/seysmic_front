import React from "react";
import { useNavigate } from "react-router";
import img404 from "../../assets/main/404.png";

export function ErrorBoundary() {
  // const error = useRouteError();
  const navigate = useNavigate();
  // const [text, setText] = useState("Something went wrong");

  // if (isRouteErrorResponse(error)) {
  //   switch (error.status) {
  //     case 404:
  //       setText("Not Found!!!");
  //     case 503:
  //       setText("API Error");
  //     case 418:
  //       setText("Server Error");
  //   }
  // }

  setTimeout(() => {
    navigate(-1);
  }, 5000);

  return (
    <div className="absolute w-full h-full top-0 left-0 bg-white">
      <div className="flex flex-col gap-[100px] items-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 med-900:gap-[60px] med-600:gap-[50px]">
        <img src={img404} alt="" />
        <div className="flex flex-col items-center gap-[40px] med-900:gap-[20px] med-600:gap-[22px]">
          <p className="whitespace-nowrap text-[84px] leading-[98.55px] text-[#252F40] text-center font-bold med-1440:text-[72px] med-1200:text-[60px] med-600:leading-[53px] med-600:text-[44px]">
            Oh No! Error 404
          </p>
          <span className="text-[#838DA0] text-[40px] whitespace-nowrap med-600:whitespace-normal text-center med-600:text-[21.53px]">
            Информация отсутствует!
          </span>
        </div>
      </div>
    </div>
  );
}
