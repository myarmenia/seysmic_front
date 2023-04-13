import { Outlet, useLocation, useNavigate, useNavigation } from "react-router";
import { Footer, Header, Spinner } from "../main";
import { useEffect } from "react";

export const LanguageRoot = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { pathname } = useLocation();
  //   useEffect(() => {
  //     if (pathname === "/") {
  //       navigate("/home");
  //     }
  //   }, []);

  return <Outlet />;
};
