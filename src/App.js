import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Redeem from "./Pages/Redeem";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/redeems">
            <Redeem />
          </Route>
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
