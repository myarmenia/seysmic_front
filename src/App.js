import { Outlet } from "react-router";
import { Container, Header } from "./components/main";


function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
