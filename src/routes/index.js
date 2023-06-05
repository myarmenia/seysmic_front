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
  FAQ,
} from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={Root.loader}
      errorElement={<ErrorBoundary />}>
      <Route path=":lang">
        <Route
          path="search/:page"
          element={<Search />}
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
        {/* loader={loaderContacts} */}
        <Route
          path="contacts"
          element={<Contacts />}
          action={Contacts.action}
          loader={Contacts.loader}
        />
        <Route path="monitoring">
          <Route index element={<MainMonitoring />} />
          <Route path="global">
            <Route
              index
              element={<GlobalMonitoring />}
              loader={GlobalMonitoring.loader}
            />
            <Route
              path=":id"
              element={<CountriesItem />}
              loader={CountriesItem.loader1}
            />
            <Route
              path="earth-map/:id"
              element={<CountriesItem />}
              loader={CountriesItem.loader2}
            />
          </Route>
          <Route path="cosmos" element={<Cosmos />}>
            <Route
              index
              element={<MonitoringExamples />}
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
            path=":page"
            element={<PressReleases />}
            loader={PressReleases.loader}
            // action={PressReleases.action}
          />
          <Route
            path="release-page/:id"
            element={<PressRel />}
            loader={PressRel.loader}
          />
        </Route>
        <Route path="earth-quakes">
          <Route
            path=":page"
            element={<EarthQuakes />}
            loader={EarthQuakes.loader}
            action={EarthQuakes.action}
          />
          <Route
            path="earth-quake/:id"
            element={<EarthQuake />}
            loader={EarthQuake.loader}
          />
        </Route>
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Route>
  )
);
