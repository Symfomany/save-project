import React from "react";
import { CSVLink } from "react-csv";
import Image from "./foret.jpg";
const headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];

const data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

export default class Resume extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
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
                      <th>Parcelle</th>
                      <th>Autres parcelles</th>
                      <th>Sous-parcelle</th>
                      <th>Autres sous-parcelles</th>
                      <th>Essence</th>
                      <th>Longueur</th>
                      <th>Diamètre</th>
                      <th>Commentaire</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>10/03/2019 à 12:33</td>
                      <td>45.078, 4.7419</td>
                      <td>1</td>
                      <td>Forêt des Ardennes</td>
                      <td>Sec</td>
                      <td>Parcelle 1</td>
                      <td>Parcelle 3, Parcelle 5</td>
                      <td>Sous-Parcelle 233</td>
                      <td>Sous-Parcelle 3</td>
                      <td>Epicéa</td>
                      <td>688cm.</td>
                      <td>126cm.</td>
                      <td>
                        <i>Cette arbre a 1000 ans d'âge</i>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* <ul>
                  <li>
                    Id: <b>2</b>
                  </li>
                  <li>
                    Date et heure: <b>10/03/2019 à 12:33</b>
                  </li>
                  <li>
                    Coordonnées: <b>45.078, 4.7419</b> <br />
                    <a href={`https://maps.google.com/?q=45.078, 4.7419`}>
                      <b>Voir sur Google Map</b>
                    </a>
                  </li>
                </ul> */}
              </div>
              <div className="card-action">
                <a>
                  <i className="material-icons left">save</i> Sauvegarde de
                  l'inventaire
                </a>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-large pink lighten-1">
          <i className="material-icons left">edit</i> Modification de
          l'inventaire
        </button>
        <button className="btn btn-large green lighten-1" />
        <CSVLink className="btn btn-large cyan " data={data} headers={headers}>
          <i className="material-icons left">cloud_download</i>
          Télécharger le fichier csv
        </CSVLink>
        <button className="btn btn-large lime  darken-4">
          <i className="material-icons left">cloud_download</i> Recommencer
          l'inventaire
        </button>
      </div>
    );
  }
}
