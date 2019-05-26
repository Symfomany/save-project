import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Cubage.css";
import $ from "jquery";

export default class Cubage extends React.Component {
  state = {
    selectedOption: null,
    value: "",
    suggestions: []
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  componentDidMount() {
    var elems = $("#autocomplete-input");
    M.Autocomplete.init(elems, {
      data: {
        "Fôret des Ardennes": null,
        "Fôret des Vosges": null,
        "Fôret des Marigny": null,
        "Fôret de la Comté": null,
        "Fôret de Châtillon": null,
        "Fôret Chenue": null,
        "Fôret de Fontenay": null,
        "Fôret de Bassican": null,
        "Fôret du Vercors": null,
        "Fôret des Fays": null,
        "Fôret de Randan": null,
        "Fôret du Der": null,
        "Fôret de Clairvaux": null,
        "Fôret du Massacre": null,
        "Fôret de Champlitte": null
      }
    });

    var elems = $("#autocomplete-input-two");
    M.Autocomplete.init(elems, {
      data: {
        Epicéa: null,
        Châtaignier: null,
        Chêne: null,
        Hêtre: null,
        Charme: null,
        Frêne: null,
        Merisier: null,
        Erable: null,
        Mélèze: null,
        "Pin d’Alep": null,
        "Pin maritime": null,
        "Pin sylvestre": null,
        "Pin cembro": null,
        "Pin à crochets": null,
        "Pin laricio de Corse": null,
        "Sapin des Vosges": null
      }
    });

    var elems = $("select");
    M.FormSelect.init(elems);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              id="autocomplete-input"
              className="autocomplete"
              required
            />
            <label htmlFor="autocomplete-input">Choisissez la Foret</label>
          </div>

          <div className="input-field col s12">
            <select className="browser-default">
              <option disabled>Choisissez la série</option>
              <option value="0">Série 1</option>
              <option value="1">Série 2</option>
              <option value="2">Série 3</option>
              <option value="3">Série 4</option>
              <option value="4">Série 5</option>
            </select>
          </div>

          <div className="input-field col s12">
            <select className="browser-default">
              <option disabled>Choisissez la parcelle principale</option>
              <option value="0">Parcelle 1</option>
              <option value="1">Parcelle 2</option>
              <option value="2">Parcelle 3</option>
              <option value="3">Parcelle 4</option>
              <option value="4">Parcelle 5</option>
            </select>
          </div>

          <div className="input-field col s12">
            <select multiple className="browser-default">
              <option value="" disabled>
                Autres parcelles
              </option>
              <option value="0">Parcelle 10</option>
              <option value="1">Parcelle 20</option>
              <option value="2">Parcelle 30</option>
              <option value="3">Parcelle 40</option>
              <option value="4">Parcelle 50</option>
            </select>
          </div>

          <div className="input-field col s12">
            <select className="browser-default">
              <option value="" disabled>
                Choisissez la sous-parcelle principale
              </option>
              <option value="">Sous-Parcelle 1</option>
              <option value="1">Sous-Parcelle 2</option>
              <option value="2">Sous-Parcelle 3</option>
              <option value="3">Sous-Parcelle 4</option>
              <option value="4">Sous-Parcelle 5</option>
            </select>
          </div>

          <div className="input-field col s12">
            <input id="autre" type="text" className="validate" />
            <label htmlFor="autre">Autres sous-parcelles</label>
          </div>

          <div className="input-field col s12">
            <select className="browser-default">
              <option value="" disabled>
                Choisissez la qualité du bois
              </option>
              <option value="1">Sec</option>
              <option value="2">Vert</option>
              <option value="3">Bonne</option>
            </select>
          </div>
          <div className="input-field col s12">
            <select className="browser-default">
              <option value="" disabled>
                Choisissez la formule
              </option>
              <option value="1">Hubert</option>
              <option value="2">Jas</option>
            </select>
          </div>

          <div className="input-field col s12">
            <select className="browser-default">
              <option value="" disabled>
                Choisir l'unité de mesure
              </option>
              <option value="1">mm.</option>
              <option value="1">cm.</option>
              <option value="3">decamètre</option>
              <option value="2">mètre</option>
            </select>
          </div>

          <Link className="waves-effect waves-light btn btn-large" to="/Menu">
            <i className="material-icons right">done</i> Enregistrer ce cubage
          </Link>
        </div>
      </div>
    );
  }
}
