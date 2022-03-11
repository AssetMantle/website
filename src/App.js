import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation, withRouter } from "react-router-dom";

// style
import "./styles/App.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { HeaderSecondary } from "./layout/HeaderSecondary";
import HeaderASAO from "./layout/HeaderASAO";

import RouteNotFound from "./components/RouteNotFound";
import Home from "./pages/Home/";
import Pricing from "./pages/Pricing";
import WhatsAnNFT from "./pages/WhatsAnNFT";
import Airdrop from "./pages/Airdrop";
import StakeDrop from "./pages/StakeDrop";

const App = () => {
  const [theme, setTheme] = useState(false);
  // taking header to show from useEffect
  const [header, setHeader] = useState(1);

  const location = useLocation();

  // changing header
  useEffect(() => {
    setHeader(
      location.pathname === "/"
        ? 1
        : location.pathname.includes("airdrop") ||
          location.pathname.includes("stakedrop")
        ? 2
        : 0
    );
  }, [location.pathname]);

  // scrolling to top on every page change
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
    {
      component: WhatsAnNFT,
      path: "/whats-an-nft",
    },
    {
      component: Airdrop,
      path: "/airdrop",
    },
    {
      component: StakeDrop,
      path: "/stakedrop",
    },
  ];

  return (
    <div className="app">
      {
        {
          0: <Header theme={theme} setTheme={setTheme} />,
          1: <HeaderSecondary theme={theme} setTheme={setTheme} />,
          2: <HeaderASAO />,
        }[header]
      }
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
      {location.pathname !== "/stakedrop" && <Footer />}
    </div>
  );
};

export default withRouter(App);
