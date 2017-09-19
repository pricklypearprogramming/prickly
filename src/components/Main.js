import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
//import Header from "./Header";
import Background from "./Background";
import Bootstrap from "./Bootstrap";
import Colors from "./Colors";
import CssFrame from "./CssFrameworks";
import Intro from "./Intro";
import Matpg from "./Materialize";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/background" component={Background} />
      <Route path="/colors" component={Colors} />
      <Route path="/bootstrap" component={Bootstrap} />
      <Route path="/cssFrameworks" component={CssFrame} />
      <Route path="/intro" component={Intro} />
      <Route path="/Materialize" component={Matpg} />
      <Route path="/home" component={Home} />
    </Switch>
  </main>
);

export default Main;
