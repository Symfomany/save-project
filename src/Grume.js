import React from "react";
import { CSVLink } from "react-csv";

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

export default class Grume extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s9">
            <div className="input-field col s12">
              <div className="input-field col s12">
                <input id="nom" type="text" className="validate" />
                <label htmlFor="nom">Lot</label>
              </div>
            </div>
            <div className="input-field col s12">
              <div className="input-field col s12">
                <input id="plaquette" type="text" className="validate" />
                <label htmlFor="plaquette">Plaquette</label>
              </div>
            </div>
            <div className="input-field col s12">
              <div className="input-field col s12">
                <input id="essence" type="text" className="validate" />
                <label htmlFor="essence">Essence</label>
              </div>
            </div>
            <div className="input-field col s12">
              <div className="input-field col s12">
                <p class="range-field">
                  <input type="range" id="test5" min="0" max="100" />
                </p>
              </div>
            </div>
            <div className="input-field col s12">
              <div className="input-field col s12">
                <input id="diametre" type="text" className="validate" />
                <label htmlFor="diametre">Diamètre</label>
              </div>
            </div>
            <div className="input-field col s12">
              <div className="input-field col s12">
                <input id="qualite" type="text" className="validate" />
                <label htmlFor="qualite">Qualité</label>
              </div>
            </div>
            <div className="input-field col s12">
              <div className="input-field col s12">
                <input id="volume" type="text" className="validate" />
                <label htmlFor="volume">Volume</label>
              </div>
            </div>

            <div className="input-field col s12">
              <button
                class="btn waves-effect waves-light btn-large"
                type="submit"
                name="action"
              >
                Enregistrer le grume
                <i class="material-icons right">send</i>
              </button>

              <CSVLink
                class="btn-floating btn-large cyan pulse"
                data={data}
                headers={headers}
              >
                <i class="material-icons right">cloud_download</i>
                Télécharger le csv
              </CSVLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
