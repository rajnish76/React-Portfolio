import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import Home from "./components";
import "./App.css";
import Resume from "./components/Resume";
import Technology from "./components/Technology";
import Error from "./components/Error";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/technology" component={Technology} exact />
        <Route path="/contact" component={Contact} exact />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
