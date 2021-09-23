import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  HashRouter,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Router() {
  return (
    <Router>
      

        <Switch>
          <HashRouter path="/">
            <Home />
          </HashRouter>
        </Switch>
     
    </Router>
  );
}
