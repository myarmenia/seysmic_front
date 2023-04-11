import { Outlet, useLocation, useNavigate } from "react-router";
import { Footer, Header } from "../main";
import { useEffect } from "react";

export const Root = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, []);
  return (
    <div className="root">
      <Header />
      <main className="h-full max-w-[100vw] overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
