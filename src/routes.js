import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teams/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
