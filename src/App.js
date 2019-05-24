import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cubage from "./Cubage";
import Grume from "./Grume";
import Menu from "./Menu";
import "./App.css";
import { AnimatedSwitch } from "react-router-transition";
import { spring } from "react-router-transition";

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="teal darken-2">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <i className="material-icons">devices_other</i> Logo
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">
                  <i className="material-icons">reply</i>
                </Link>
              </li>
              <li>
                <a href="sass.html">
                  <i className="material-icons">event</i>
                </a>
              </li>
              <li>
                <a href="badges.html">
                  <i className="material-icons">supervisor_account</i>
                </a>
              </li>
              <li>
                <a href="collapsible.html">
                  <i className="material-icons">attach_money</i>
                </a>
              </li>
              <li>
                <a href="collapsible.html">
                  <i className="material-icons">headset_mic</i>
                </a>
              </li>

              <li>
                <a href="mobile.html">
                  <i className="material-icons">add</i>
                </a>
              </li>
              <li>
                <a href="mobile.html">
                  <i className="material-icons">settings</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="center main">
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            <Route path="/cubage" component={Cubage} />
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/grume" component={Grume} />
          </AnimatedSwitch>
        </div>

        <footer className="page-footer teal lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">
                  You can use rows and columns here to organize your footer
                  content.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
