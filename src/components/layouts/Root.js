import { useEffect } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router";
import { ScrollRestoration } from "react-router-dom";
import { getLang } from "../../helper";
import { Footer, Header, MonitoringNavbar, Spinner } from "../main";
import { useLengPoint } from "../../hooks/useLengPoint";
import instance from "../../api";

const Component = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { pathname } = useLocation();
  const { lang } = useParams();
  useEffect(() => {
    if (pathname === "/") {
      if (!localStorage.getItem("lang")) {
        localStorage.setItem("lang", process.env.REACT_APP_DEFAULT_LANG);
        navigate(`/${process.env.REACT_APP_DEFAULT_LANG}/home`);
      } else {
        navigate(getLang("/home"));
      }
    }
  }, []);
  useEffect(() => {
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
const loader = async () => {
  try {
    const res = await instance.get(`footer/social-links`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const Root = Object.assign(Component, { loader });
