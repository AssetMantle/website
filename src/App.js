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
import StargazeCalculationPage from "./pages/StakeDrop/stargaze/CalculationPage";
import MantleDropClaim from "./pages/StakeDrop/claim/MantleDropClaim";
import OsmosisClaimPage from "./pages/StakeDrop/claim/OsmosisClaimPage";

const App = () => {
  const location = useLocation();

  // changing header
  const CURRENT_VERSION = process.env.REACT_APP_VERSION;
  if (localStorage.getItem("VERSION") !== CURRENT_VERSION) {
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
    {
      component: StargazeCalculationPage,
      path: "/stakedrop/stargaze",
    },
    {
      component: MantleDropClaim,
      path: "/stakedrop/claim",
    },
    {
      component: OsmosisClaimPage,
      path: "/osmosis-claim",
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
