import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Homepage from "./views/Hompage";
import Header from "./components/Header";
import RouteNotFound from "./components/RouteNotFound";
import './scss/style.css';
import Footer from "./components/Footer";
const App = () => {
  const routes = [
    {
      component:Homepage,
      path:'/'
    }
  ];
  return (
      <div className="app">
        <div className="app-nav">
         <Header/>
        </div>

        <Switch>
          {
            routes.map((route) => {
              return (
                  <Route
                      key={route.path}
                      exact
                      component={withRouter(route.component)}
                      path={route.path}/>
              );
            })
          }
          <Route component={RouteNotFound}/>
        </Switch>
        <Footer/>
      </div>
  );
};

export default withRouter(App);
