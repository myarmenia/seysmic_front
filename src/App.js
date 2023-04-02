import { Outlet, useLocation, useNavigate } from "react-router";
import { Footer, Header } from "./components/main";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, []);
  return (
    <div className="app">
      <Header />
      <main className="h-full max-w-[100vw] overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
