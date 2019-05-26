import React from "react";
import { Link } from "react-router-dom";
import { geolocated, geoPropTypes } from "react-geolocated";
import Image from "./Societe-forestiere-logo.png";
import Map from "./tree.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <img src={Image} className="logo responsive-img center-block" />
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
              <li>
                <a
                  href={`https://maps.google.com/?q=${
                    this.props.coords.latitude
                  },${this.props.coords.longitude}`}
                >
                  <b>Voir sur Google Map</b>
                </a>
              </li>
            </ul>

            <button
              onClick={this.refresh}
              className="btn waves-effect right fixed btn-large btn-floating teal darken-4"
            >
              <i className="material-icons">gps_fixed</i>
            </button>
          </div>
        ) : (
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
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
