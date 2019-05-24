import React from "react";
import { Link } from "react-router-dom";
import { geolocated, geoPropTypes } from "react-geolocated";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link className="waves-effect waves-light btn" to="/cubage">
          Cubage bord route
        </Link>
        <button className="waves-effect waves-light btn">
          Inventaire des bois sur pied
        </button>
        <p id="demo" />

        {this.props.coords ? (
          <div />
        ) : (
          <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
              <div class="circle-clipper left">
                <div class="circle" />
              </div>
              <div class="gap-patch">
                <div class="circle" />
              </div>
              <div class="circle-clipper right">
                <div class="circle" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
// Using Object.assign
Home.propTypes = Object.assign({}, Home.propTypes, geoPropTypes);
// Using ES6 object spread syntax
Home.propTypes = { ...Home.propTypes, ...geoPropTypes };

export default geolocated()(Home);
