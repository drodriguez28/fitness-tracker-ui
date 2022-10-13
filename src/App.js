import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WorkoutsPage from "./pages/WorkoutsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Switch>
          <Route path="/workouts" exact component={WorkoutsPage} />
        </Switch>

        {/* <Switch>
          <Route path="/routes" exact component={ContactUs} />
        </Switch>
        <Switch>
          <Route path="/community" exact component={ContactUs} />
        </Switch> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
