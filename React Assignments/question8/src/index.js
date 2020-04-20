import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const HomeComponent = () => {
  return (
    <h3>Home Page</h3>
  )
}

const AboutComponent = () => {
  return (
    <h3>About Page</h3>
  )
}

const ContactComponent = () => {
  return (
    <div>
      <h3>Contact Page</h3>
    </div>

  )
}

const Links = () => (
  <div className="list-group">
    <NavLink className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
    <NavLink className="list-group-item" activeClassName="active" to="/about">About</NavLink>
    <NavLink className="list-group-item" activeClassName="active" to="/contact">Contact</NavLink>
  </div>
)

const RouterComponent = () => (

  <Router>
    <div className="row">
      <div className="col-12">
        <Links />
      </div>
      <div className="12">
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/contact" component={ContactComponent} />
      </div>
    </div>
  </Router>
)



ReactDOM.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
