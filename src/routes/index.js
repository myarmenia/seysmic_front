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
  PressReleases,
  PressRel,
  Regional,
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
      <Route path="monitoring">
        <Route index element={<Monitoring />} loader={Monitoring.loader} />
        <Route path="regional" element={<Regional />} />
      </Route>
      <Route path="press-release">
        <Route
          index
          element={<PressReleases />}
          loader={PressReleases.loader}
        />
        <Route path=":id" element={<PressRel />} loader={PressRel.loader} />
      </Route>
      <Route path="technologies" element={<Technologies />} />
    </Route>
  )
);
