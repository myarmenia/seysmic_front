import { Outlet, useNavigate } from "react-router";
import { Footer, Header } from "./components/main";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <div className="app">
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
