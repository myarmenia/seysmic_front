import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router";
import { Footer, Header, MonitoringNavbar, Spinner } from "../main";
import { useEffect } from "react";
import { getLang } from "../../helper";
import { useTranslation } from "../../App";
import { ScrollRestoration } from "react-router-dom";

export const Root = () => {
  
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { pathname } = useLocation();
  const { lang } = useParams();
  const { changeLanguage } = useTranslation();
  useEffect(() => {
    if (pathname === "/") {
      if (!localStorage.getItem("lang")) {
        localStorage.setItem("lang", "ru");
        navigate("/ru/home");
      } else {
        navigate(getLang("/home"));
      }
    }
  }, []);
  useEffect(() => {
    if (pathname && lang && ["ru", "en", "am"].some((e) => lang === e)) {
      changeLanguage(lang, navigate);
    } else {
      changeLanguage("ru", navigate);
    }
    if (pathname.split("/").length < 3) {
      navigate(getLang("/home"));
    }
  }, [lang]);

  return (
    <>
      <div className="root">
        <Header />
        <main className="h-full max-w-[100vw] overflow-hidden">
          <Outlet />
          {navigation.state !== "idle" && <Spinner />}
        </main>
        <Footer />
        {/* ------------- For scrolling to top -------------- */}
        <ScrollRestoration />
        {/* ================================================= */}
      </div>
      <MonitoringNavbar />
    </>
  );
};
