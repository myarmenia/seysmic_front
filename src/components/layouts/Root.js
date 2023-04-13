import { Outlet, useLocation, useNavigate, useNavigation } from "react-router";
import { Footer, Header, Spinner } from "../main";
import { useEffect } from "react";
import { getLang } from "../../helper";

export const Root = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      navigate(getLang("/home"));
    }
  }, []);

  return (
    <div className="root">
      <Header />
      <main className="h-full max-w-[100vw] overflow-x-hidden">
        <Outlet />
        {navigation.state !== "idle" && <Spinner />}
      </main>
      <Footer />
    </div>
  );
};
