import React from "react";
import { Link } from "react-router-dom";
import { geolocated, geoPropTypes } from "react-geolocated";
import Image from "./Societe-forestiere-logo.png";
class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={Image} className="logo responsive-img" />
        <Link className="waves-effect waves-light btn" to="/cubage">
          Cubage bord route
        </Link>
        <button className="waves-effect waves-light btn">
          Inventaire des bois sur pied
        </button>
        <p id="demo" />

        {this.props.coords ? (
          <div>
            <ul>
              <li>
                Latitude: <b>{this.props.coords.latitude}</b>
              </li>
              <li>
                Longitude: <b>{this.props.coords.longitude}</b>
              </li>
              {this.props.coords.altitude ? (
                <li>
                  Altitude: <b>{this.props.coords.altitude}</b>
                </li>
              ) : (
                <div />
              )}
            </ul>

            <button class="btn btn-large btn-floating teal darken-4">
              <i class="material-icons">gps_fixed</i>
            </button>
          </div>
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

const options = {
  watchPosition: true
};
export default geolocated(options)(Home);
