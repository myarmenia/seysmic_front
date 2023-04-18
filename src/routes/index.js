import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorBoundary } from "../components/main";
import { MonitoringRoot, Root } from "../components/layouts";
import {
  About,
  Contacts,
  EarthQuake,
  EarthQuakes,
  Home,
  Login,
  Monitoring,
  OurProduct,
  PressRel,
  PressReleases,
  Regional,
  Registration,
  Technologies,
  Search,
} from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
      <Route path=":lang">
        <Route path="search" element={<Search />} />
        <Route path="login" element={<Login />} action={Login.action} />
        <Route
          path="registration"
          element={<Registration />}
          action={Registration.action}
        />
        <Route path="home" element={<Home />} loader={Home.loader} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="monitoring" element={<MonitoringRoot />}>
          <Route index element={<Monitoring />} loader={Monitoring.loader} />
          <Route path="regional" element={<Regional />} />
        </Route>
        <Route path="product" element={<OurProduct />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="press-release">
          <Route
            index
            element={<PressReleases />}
            loader={PressReleases.loader}
          />
          <Route path=":id" element={<PressRel />} loader={PressRel.loader} />
        </Route>
        <Route path="earth-quakes">
          <Route index element={<EarthQuakes />} loader={EarthQuakes.loader} />
          <Route
            path=":id"
            element={<EarthQuake />}
            loader={EarthQuake.loader}
          />
        </Route>
      </Route>
    </Route>
  )
);
