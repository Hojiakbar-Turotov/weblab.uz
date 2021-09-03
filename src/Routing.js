import React from "react";
import HomeMain from "./system/home/HomeMain";
import Portfolio from "./system/portfolio/Portfolio";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./system/style/main.scss";
import "./system/style/animation.scss";
import Footer from "./system/footer/Footer";

function Routing() {
  return (
    <div>
<Router>
  <Switch>
    <Route path='/' exact component={HomeMain} />
    <Route path='/portfolio' exact component={Portfolio} />
  </Switch>
</Router>
<Footer />
    </div>
  );
}

export default Routing;
