import React from "react";
import "react-table/react-table.css"; // React-Table css
import { HashRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scroll-to-top";
import LandingApp from "../views/index";
import ResourcesApp from "../views/resources";

function App() {
  return (
    <HashRouter basename="/Deployment-Build/">
      <ScrollToTop />
      <Switch>
        <Route path="/resources" exact component={ResourcesApp} />
        <Route path="/" component={LandingApp} />
      </Switch>
    </HashRouter>
  );
}

export default App;
