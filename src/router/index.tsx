import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import FooterSimple from "../components/FooterSimple";
import { useEffect } from "react";
import ReactGA from 'react-ga';


ReactGA.initialize('UA-207645967-1');

const Router = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <FooterSimple/>
    </Suspense>
  );
};

export default Router;
