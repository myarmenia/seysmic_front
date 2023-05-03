import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorBoundary } from "../components/main";
import { Root } from "../components/layouts";
import {
  About,
  Contacts,
  EarthQuake,
  EarthQuakes,
  Home,
  Login,
  GlobalMonitoring,
  MainMonitoring,
  OurProduct,
  PressRel,
  PressReleases,
  RegionalMonitoring,
  Registration,
  Technologies,
  Search,
} from "../pages";
import { MonitoringExamples } from "../pages/monitoring/regional/blocks/MonitoringExamples";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
      <Route path=":lang">
        <Route
          path="search"
          element={<Search />}
          action={Search.action}
          loader={Search.loader}
        />
        <Route path="login" element={<Login />} action={Login.action} />
        <Route
          path="registration"
          element={<Registration />}
          action={Registration.action}
        />
        <Route path="home" element={<Home />} loader={Home.loader} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="monitoring">
          <Route index element={<MainMonitoring />} />
          <Route
            path="global"
            element={<GlobalMonitoring />}
            loader={GlobalMonitoring.loader}
          />
          <Route path="regional" element={<RegionalMonitoring />}>
            <Route
              index
              element={<MonitoringExamples />}
              action={MonitoringExamples.action}
              loader={MonitoringExamples.loader}
            />
          </Route>
        </Route>
        <Route path="product" element={<OurProduct />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="press-release">
          <Route
            index
            element={<PressReleases />}
            loader={PressReleases.loader}
            action={PressReleases.action}
          />
          <Route path=":id" element={<PressRel />} loader={PressRel.loader} />
        </Route>
        <Route path="earth-quakes">
          <Route
            index
            element={<EarthQuakes />}
            loader={EarthQuakes.loader}
            action={EarthQuakes.action}
          />
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
