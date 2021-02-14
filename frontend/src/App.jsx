import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./containers/login/loginPage";
import SignupPage from "./containers/signup/signupPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
