import { Outlet, useLocation, useNavigate, useNavigation } from "react-router";
import { Footer, Header, Spinner } from "../main";
import { useEffect } from "react";

export const Root = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
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
        {navigation.state === "loading" && <Spinner />}
      </main>
      <Footer />
    </div>
  );
};

