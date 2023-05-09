import React, { useState } from "react";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";
import { getLang } from "../../helper";

export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  const [text, setText] = useState("Something went wrong");

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        setText("Not Found!!!");
      case 503:
        setText("API Error");
      case 418:
        setText("Server Error");
    }
  }

  setTimeout(() => {
    navigate(getLang("/home"));
  }, 5000);

  return (
    <div className="absolute w-full h-full top-0 left-0 bg-black/20 ">
      <p className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-[7vw] text-center font-bold text-[red]">
        ☹
        <br />
        {text}
      </p>
    </div>
  );
}
