import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "src/routes";
import MainPage from "src/MainPage";
import "src/styles/app.scss";
import "antd/dist/antd.css";


const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.ROUTE_HOME} component={MainPage} />


      {/* add a 404 page */}
      <Route path={"/"} component={MainPage} />

    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
