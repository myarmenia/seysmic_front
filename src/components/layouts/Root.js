import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router";
import { Footer, Header, Spinner } from "../main";
import { useEffect } from "react";
import { getLang } from "../../helper";
import { useTranslation } from "../../App";

export const Root = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { pathname } = useLocation();
  const { lang } = useParams();
  const { changeLanguage } = useTranslation();
  useEffect(() => {
    if (pathname === "/") {
      navigate(getLang("/home"));
      if (!localStorage.getItem("lang")) localStorage.setItem("lang", "ru");
    }
  }, []);
  useEffect(() => {
    if (pathname && lang && lang !== "undefined") {
      changeLanguage(lang, navigate);
    }
  }, [lang]);

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
