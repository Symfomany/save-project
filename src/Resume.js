import React from "react";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";

import Image from "./foret.jpg";
const headers = [
  { label: "Id grume", key: "id" },
  { label: "Date", key: "date" },
  { label: "Heure", key: "heure" },
  { label: "Latitude", key: "latitude" },
  { label: "Longitude", key: "longitude" },
  { label: "Forêt", key: "foret" },
  { label: "Série", key: "serie" },
  { label: "Parcelle princip", key: "parcelle" },
  { label: "Autres parcelles", key: "autreParcelle" },
  { label: "Sous-parc. principale", key: "sousparcelle" },
  { label: "Autres sous- parc.", key: "autresousParcelle" },
  { label: "LOT", key: "lot" },
  { label: "PLAQUETTE", key: "plaquette" },
  { label: "ESSENCE", key: "arbre" },
  { label: "LONG.", key: "longeur" },
  { label: "DIAM.", key: "diametre" },
  { label: "QUALITE", key: "qualite" },
  { label: "COMM.", key: "comm" },
  { label: "VOLUME", key: "volume" }
];

const metas = JSON.parse(localStorage.getItem("metas"));
const cubage = JSON.parse(localStorage.getItem("cubage"));
const grume = JSON.parse(localStorage.getItem("grume"));

const data = [{ ...metas, ...cubage, ...grume }];

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    const metas = JSON.parse(localStorage.getItem("metas"));
    const cubage = JSON.parse(localStorage.getItem("cubage"));
    const grume = JSON.parse(localStorage.getItem("grume"));
    this.state = {
      metas,
      cubage,
      grume
    };

    console.log(metas, cubage, grume);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={Image} />
                <span className="card-title">Récapitulatif</span>
              </div>
              <div className="card-content" style={{ padding: 0 }}>
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Date et Heure</th>
                      <th>Coordonnées</th>
                      <th>Série</th>
                      <th>Forêt</th>
                      <th>Qualité</th>
                      <th>Méthode</th>
                      <th>Unité</th>
                      <th>Parcelle</th>
                      <th>Autres parcelles</th>
                      <th>Sous-parcelle</th>
                      <th>Autres sous-parcelles</th>
                      <th>Lot</th>
                      <th>Plaquette</th>
                      <th>Essence</th>
                      <th>Longueur</th>
                      <th>Diamètre</th>
                      <th>Volume</th>
                      <th>Commentaire</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        {this.state.metas.date} à {this.state.metas.heure}
                      </td>
                      <td>
                        {this.state.metas.latitude.toFixed(5)},
                        {this.state.metas.longitude.toFixed(5)}
                      </td>
                      <td>{this.state.cubage.serie}</td>
                      <td>{this.state.cubage.foret}</td>
                      <td>{this.state.cubage.qualite}</td>
                      <td>{this.state.cubage.methode}</td>
                      <td>{this.state.cubage.unite}</td>
                      <td>{this.state.cubage.parcelle}</td>
                      <td>{this.state.cubage.autreParcelle}</td>
                      <td>{this.state.cubage.sousparcelle}</td>
                      <td>{this.state.cubage.autresousParcelle}</td>
                      <td>{this.state.grume.lot}</td>
                      <td>{this.state.grume.plaquette}</td>
                      <td>{this.state.grume.arbre}</td>
                      <td>{this.state.grume.longeur}</td>
                      <td>{this.state.grume.diametre}</td>
                      <td>{this.state.grume.volume}</td>
                      <td>
                        <i>{this.state.grume.comm}</i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <CSVLink
          className="btn btn-large cyan pulse"
          data={data}
          headers={headers}
        >
          <i className="material-icons left">cloud_download</i>
          Télécharger le fichier csv
        </CSVLink>
        <Link
          className="waves-effect waves-light btn btn-large lime  darken-4"
          to="/"
        >
          <i className="material-icons left">cloud_download</i> Recommencer
          l'inventaire
        </Link>
      </div>
    );
  }
}
