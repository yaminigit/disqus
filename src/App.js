import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Post from "./Component/Post";
import Login from "./Component/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/post" component={Post}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
