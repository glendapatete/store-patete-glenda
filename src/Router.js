import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Router() {
  return (
    <Router>
      

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     
    </Router>
  );
}
