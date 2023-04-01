import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { Home, Login, Registration } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} action={Login.action} />
      <Route
        path="registration"
        element={<Registration />}
        action={Registration.action}
      />
      <Route path="home" element={<Home />} />
    </Route>
  )
);
