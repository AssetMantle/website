import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// style
import "./styles/App.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import RouteNotFound from "./components/RouteNotFound";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const [theme, setTheme] = useState(false);

    const CURRENT_VERSION = process.env.REACT_APP_VERSION;
    if (localStorage.getItem("VERSION") !== CURRENT_VERSION) {
        localStorage.clear();
        localStorage.setItem("VERSION", CURRENT_VERSION);
        window.location.reload();
    }

  const routes = [
    {
      component: Home,
      path: "/",
    },
    {
      component: About,
      path: "/about",
    },
  ];

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />

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
