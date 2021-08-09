import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import BaseballAutograph from "./pages/BaseballAutograph";
import BaseballEquipment from "./pages/BaseballEquipment";
import BaseballGameWorn from "./pages/BaseballGameWorn";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HockeyAutograph from "./pages/HockeyAutograph";
import HockeyEquipment from "./pages/HockeyEquipment";
import HockeyGameWorn from "./pages/HockeyGameWorn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
          <Route exact path={["/", "/6-Crosses-Vault","/home"]}> 
          <Home />
          </Route>
          <Route exact path={["/about"]}> 
          <About />
          </Route>
          <Route exact path={["/baseballautograph"]}> 
          <BaseballAutograph />
          </Route>
          <Route exact path={["/baseballequipment"]}> 
          <BaseballEquipment />
          </Route>
          <Route exact path={["/baseballgameworn"]}> 
          <BaseballGameWorn />
          </Route>
          <Route exact path={["/contact"]}> 
          <Contact />
          </Route>
          <Route exact path={["/hockeyautograph"]}> 
          <HockeyAutograph />
          </Route>
          <Route exact path={["/hockeyequipment"]}> 
          <HockeyEquipment />
          </Route>
          <Route exact path={["/hockeygameworn"]}> 
          <HockeyGameWorn />
          </Route>
          <Route exact path={["/sold"]}> 
          <HockeyGameWorn />
          </Route>
          <Route exact path={["/forsale"]}> 
          <HockeyGameWorn />
          </Route>
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
