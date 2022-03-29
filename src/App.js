import React, { useEffect } from "react";
import { Route, Switch, useLocation, withRouter } from "react-router-dom";

// style
import "./styles/App.css";

import Footer from "./layout/Footer";

import HeaderASAO from "./layout/HeaderASAO";

import RouteNotFound from "./components/RouteNotFound";
import Airdrop from "./pages/Airdrop";
import StakeDrop from "./pages/StakeDrop";

import CosmosCalculationPage from "./pages/StakeDrop/CosmosCalculationPage";
import PersistenceCalculationPage from "./pages/StakeDrop/persistence/CalculationPage";
import TerraCalculationPage from "./pages/StakeDrop/terra/CalculationPage";
import ComdexCalculationPage from "./pages/StakeDrop/comdex/CalculationPage";
import JunoCalculationPage from "./pages/StakeDrop/juno/CalculationPage";

const App = () => {
  const location = useLocation();

  // changing header
  function compareVersion(currentVersion, version) {
    let currentVersionList = currentVersion.split("v");
    let current = currentVersionList[1].split(".");
    let versionList = version.split("v");
    let oldVersion = versionList[1].split(".");
    if (
      current[0] * 1000 + current[1] * 100 + current[2] * 10 >
      oldVersion[0] * 1000 + oldVersion[1] * 100 + oldVersion[2] * 10
    ) {
      return true;
    } else {
      return false;
    }
  }
  const CURRENT_VERSION = "v0.2.2";
  if (
    localStorage.getItem("VERSION") == null ||
    compareVersion(CURRENT_VERSION, localStorage.getItem("VERSION"))
  ) {
    localStorage.clear();
    localStorage.setItem("VERSION", CURRENT_VERSION);
    window.location.reload();
  }

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
      component: Airdrop,
      path: "/",
    },
    {
      component: StakeDrop,
      path: "/stakedrop",
    },
    {
      component: CosmosCalculationPage,
      path: "/stakedrop/cosmos",
    },
    {
      component: PersistenceCalculationPage,
      path: "/stakedrop/persistence",
    },
    {
      component: TerraCalculationPage,
      path: "/stakedrop/terra",
    },
    {
      component: ComdexCalculationPage,
      path: "/stakedrop/comdex",
    },
    {
      component: JunoCalculationPage,
      path: "/stakedrop/juno",
    },
  ];

  return (
    <div className="app">
      <HeaderASAO />
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
