import React from "react";
import { Link } from "react-router-dom";
import { geolocated, geoPropTypes } from "react-geolocated";
import Image from "./Societe-forestiere-logo.png";
import Load from "./load.gif";
import Logo from "./logo.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
  }

  componentDidUpdate() {
    const now = new Date();
    const annee = now.getFullYear();
    const mois = now.getMonth() + 1;
    const jour = now.getDate();

    const heure = now.getHours();
    const minute = now.getMinutes();

    let obj = {};
    obj.id = 1;
    obj.date =
      ("0" + jour).slice(-2) + "/" + ("0" + mois).slice(-2) + "/" + annee;
    obj.heure = heure + ":" + minute;

    obj.latitude = this.props.coords.latitude;
    obj.longitude = this.props.coords.longitude;
    obj.altitude = this.props.coords.altitude;

    localStorage.setItem("metas", JSON.stringify(obj));
  }

  refresh() {
    this.forceUpdate();
  }
  render() {
    const now = new Date();
    const annee = now.getFullYear();
    const mois = now.getMonth() + 1;
    const jour = now.getDate();
    const heure = now.getHours();
    const minute = now.getMinutes();

    return (
      <div>
        <img src={Image} className="logo responsive-img center-block" />
        <img src={Logo} className="logo responsive-img center-block" />

        <Link
          className="waves-effect waves-light btn btn-large teal darken-2"
          to="/cubage"
        >
          <i class="material-icons right">navigate_next</i>
          Cubage en bord de route
        </Link>
        <button className="waves-effect waves-light btn btn-large teal darken-2">
          <i class="material-icons right">navigate_next</i>
          Inventaire bois sur pied
        </button>
        <p id="demo" />

        {this.props.coords ? (
          <div>
            <ul>
              <li>
                Mise à jour le{" "}
                <i>
                  {("0" + jour).slice(-2) +
                    "/" +
                    ("0" + mois).slice(-2) +
                    "/" +
                    annee +
                    " à " +
                    heure +
                    ":" +
                    minute}
                </i>
              </li>
              <li>
                {" "}
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
            <img src={Load} className="logo responsive-img center-block" />

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
