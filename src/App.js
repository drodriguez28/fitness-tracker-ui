import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WorkoutsPage from "./pages/WorkoutsPage";
import CmtyPage from "./pages/CmtyPage";
import RoutesPage from "./pages/RoutesPage";


function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Switch>
          <Route path="/workouts" component={WorkoutsPage} />
        </Switch>

        <Switch>
          <Route path="/routes" component={RoutesPage} />
        </Switch>
        <Switch>
          <Route path="/community" component={CmtyPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
