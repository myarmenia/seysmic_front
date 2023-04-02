import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import {
  About,
  Contacts,
  Home,
  Login,
  Monitoring,
  PressRelease,
  Registration,
  Technologies,
} from "../pages";

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
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="monitoring" element={<Monitoring />} />
      <Route path="press-release" element={<PressRelease />} />
      <Route path="technologies" element={<Technologies />} />
    </Route>
  )
);
