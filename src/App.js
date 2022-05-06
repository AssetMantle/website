import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation, withRouter } from "react-router-dom";

// style
import AppContainer from "./styles/AppStyle";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import RouteNotFound from "./components/RouteNotFound";
import Home from "./pages/Home/";
import About from "./pages/About/";

const App = () => {
  const [theme, setTheme] = useState(false);

  const location = useLocation();

  // scrolling to top on every page change
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  
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
    // {
    //   component: Pricing,
    //   path: "/pricing",
    // },
    // {
    //   component: WhatsAnNFT,
    //   path: "/whats-an-nft",
    // },
    {
      component: About,
      path: "/about",
    },
  ];

  return (
    <AppContainer>
      {location.pathname === "/" ? (
        ""
      ) : (
        <Header theme={theme} setTheme={setTheme} />
      )}
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
      {location.pathname === "/" ? "" : <Footer />}
    </AppContainer>
  );
};

export default withRouter(App);
