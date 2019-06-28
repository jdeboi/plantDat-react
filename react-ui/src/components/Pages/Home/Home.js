import React from 'react';
import './Home.css';
import { NavLink } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("/api/test")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
      <p>{this.state.apiResponse}</p>
      <div className="jumbotron">
      <div className="row">
      <div className="col-lg text-center">
      <h1>Plant dat!</h1>
      <p>Avert flooding by spawning a native plant in the Lucky Hotel!</p>
      <NavLink to="/plants">
      <button type="submit" className="btn spawnhome">Plant!</button>
      </NavLink>
      </div>
      </div>
      </div>
      <div className="imgtile"></div>
      </div>
    );
  }
}

export default App;
