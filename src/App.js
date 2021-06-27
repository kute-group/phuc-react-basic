import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              Không tồn tại
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
