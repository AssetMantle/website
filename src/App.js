import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation, withRouter } from "react-router-dom";

// style
import "./styles/App.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { HeaderSecondary } from "./layout/HeaderSecondary";
import AirdropHeader from "./layout/AirdropHeader";

import RouteNotFound from "./components/RouteNotFound";
import Home from "./pages/Home/";
import Pricing from "./pages/Pricing";
import WhatsAnNFT from "./pages/WhatsAnNFT";
import Airdrop from "./pages/Airdrop";

const App = () => {
  const [theme, setTheme] = useState(false);
  const [header, setHeader] = useState(1);

  const location = useLocation();

  useEffect(() => {
    setHeader(
      location.pathname === "/"
        ? 1
        : location.pathname.includes("airdrop")
        ? 2
        : 0
    );
  }, [location.pathname]);

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
      path: "/airdrop/",
    },
  ];

  return (
    <div className="app">
      {
        {
          0: <Header theme={theme} setTheme={setTheme} />,
          1: <HeaderSecondary theme={theme} setTheme={setTheme} />,
          2: <AirdropHeader />,
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
      <Footer />
    </div>
  );
};

export default withRouter(App);
