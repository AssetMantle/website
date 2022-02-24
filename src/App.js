import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// style
import "./styles/App.css";

import Header from "./layout/Header";
import RouteNotFound from "./components/RouteNotFound";
import Footer from "./layout/Footer";
import Home from "./pages/Home/";
import { HeaderSecondary } from "./layout/HeaderSecondary";

const App = () => {
  const [theme, setTheme] = useState(false);

  const routes = [
    {
      component: Home,
      path: "/",
    },
  ];

  const HEADER = 1;

  return (
    <div className="app">
      {HEADER === 0 && <Header theme={theme} setTheme={setTheme} />}
      {HEADER === 1 && <HeaderSecondary theme={theme} setTheme={setTheme} />}

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
