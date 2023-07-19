import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WorkoutsPage from "./pages/WorkoutsPage";
import CmtyPage from "./pages/CmtyPage";
import RoutesPage from "./pages/RoutesPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Switch>
          <Route exact path="/workouts" component={WorkoutsPage} />
        </Switch>
        <Switch>
          <Route exact path="/routes" component={RoutesPage} />
        </Switch>
        <Switch>
          <Route exact path="/community" component={CmtyPage} />
        </Switch>
        <Switch>
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
