import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// style
import "./styles/App.css";

import Header from "./layout/Header";
import RouteNotFound from "./components/RouteNotFound";
import Homepage from "./views/Hompage";
// import Footer from "./components/Footer";
const App = () => {
  const [theme, setTheme] = useState(false);

  const routes = [
    {
      component: Homepage,
      path: "/",
    },
  ];

  return (
    <div className="app">
      <div className="app-nav">
        <Header theme={theme} setTheme={setTheme} />
      </div>

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
      {/* <Footer/> */}
    </div>
  );
};

export default withRouter(App);
