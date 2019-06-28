import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Resources from "../Pages/Resources/Resources";
import Plants from "../Pages/Plants/Plants";

import NotFound from "../NotFound";

// auth
import Secret from '../Auth/Secret';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import withAuth from '../Auth/withAuth';


// header and footer
import Header from "./Header"
import Footer from "./Footer"


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container main-content">
          <div id="content-wrap">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/about" component={About} />
              <Route  path="/resources" component={Resources} />
              <Route  path="/plants" component={Plants} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <Footer />

      </React.Fragment>
    );
  }
}

export default App;
