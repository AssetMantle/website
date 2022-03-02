import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation, withRouter } from "react-router-dom";

// style
import "./styles/App.css";

import Header from "./layout/Header";
import RouteNotFound from "./components/RouteNotFound";
import Footer from "./layout/Footer";
import Home from "./pages/Home/";
import { HeaderSecondary } from "./layout/HeaderSecondary";
import Pricing from "./pages/Pricing";

const App = () => {
  const [theme, setTheme] = useState(false);
  const [header, setHeader] = useState(1);

  const location = useLocation();

  useEffect(() => {
    setHeader(location.pathname === "/" ? 1 : 0);
  }, [location.pathname]);

  const routes = [
    {
      component: Home,
      path: "/",
    },
    {
      component: Pricing,
      path: "/pricing",
    },
  ];

  return (
    <div className="app">
      {header === 0 && <Header theme={theme} setTheme={setTheme} />}
      {header === 1 && <HeaderSecondary theme={theme} setTheme={setTheme} />}

      <Switch>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              exact
              component={withRouter(route.component)}
              path={route.path}
            />
          );
        })}
        <Route component={RouteNotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
