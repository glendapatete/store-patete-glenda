import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Redeem from "./Pages/Redeem";
function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
            
          <Route path="/redeems" component={Redeem} />
           
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
