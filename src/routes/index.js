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
  Registration,
  Technologies,
  Search,
  Cosmos,
  CountriesItem,
  MonitoringExamples,
  Regional,
  RegionalIndex,
  RegionalDynamic,
} from "../pages";

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
          <Route path="global">
            <Route
              index
              element={<GlobalMonitoring />}
              loader={GlobalMonitoring.loader}
            />
            <Route path=":id" element={<CountriesItem />} />
          </Route>
          <Route path="cosmos" element={<Cosmos />}>
            <Route
              index
              element={<MonitoringExamples />}
              action={MonitoringExamples.action}
              loader={MonitoringExamples.loader}
            />
          </Route>
          <Route path="regional" element={<Regional />}>
            <Route index element={<RegionalIndex />} />
            <Route path=":id" element={<RegionalDynamic />} />
          </Route>
          <Route path="product" element={<OurProduct />} />
        </Route>
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
