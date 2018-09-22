import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "src/routes";
import PageHome from "src/PageHome";

// import PageReport from "src/PageReport";
// import PageLogin from "src/PageLogin";

import "src/styles/app.scss";
import "antd/dist/antd.css";
// import "src/styles/normalize.scss";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.ROUTE_HOME} component={PageHome} />


      {/* add a 404 page */}
      <Route path={"/"} component={PageHome} />

    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
