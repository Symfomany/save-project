import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Autosuggest from "react-autosuggest";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Cubage.css";
import ReactDOM from "react-dom";
import $ from "jquery";

const languages = [
  {
    name: "Fôret des Ardennes",
    year: 1972
  },
  {
    name: "Fôret des Vosges",
    year: 2012
  },
  {
    name: "Fôret des Marigny",
    year: 2012
  },
  {
    name: "Fôret de la Comté",
    year: 2012
  },
  {
    name: "Fôret de la Châtillon",
    year: 2012
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const options = [
  { value: "foret1", label: "Fôret des Ardennes" },
  { value: "cm.", label: "Fôret des Vosges" },
  { value: "dc", label: "Fôret des Marigny" },
  { value: "dc", label: "Fôret de la Comté" },
  { value: "dc", label: "Fôret de Randan" },
  { value: "dc", label: "Fôret du Vercors" },
  { value: "dc", label: "Fôret de Châtillon" },
  { value: "dc", label: "Fôret Chenue" },
  { value: "dc", label: "Fôret de Fontenay" },
  { value: "dc", label: "Fôret de Champlitte" },
  { value: "dc", label: "Fôret du Massacre" },
  { value: "dc", label: "Fôret des Fays" },
  { value: "dc", label: "Fôret de Clairvaux" },
  { value: "dc", label: "Fôret de Bassican" },
  { value: "dc", label: "Fôret du Der" }
];

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

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
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
            <input id="nom" type="text" className="validate" required />
            <label htmlFor="nom">Nom de la parcelle</label>
          </div>

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
            <select multiple>
              <option disabled>Choisissez la parcelle de mesure</option>
              <option value="0">Parcelle 1</option>
              <option value="1">Parcelle 2</option>
              <option value="2">Parcelle 3</option>
              <option value="3">Parcelle 4</option>
              <option value="4">Parcelle 5</option>
            </select>
          </div>

          <div className="input-field col s12">
            <input id="autre" type="text" className="validate" />
            <label htmlFor="autre">Autre sous-parcelle</label>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="input-field col s12">
                <select className="browser-default">
                  <option value="0">Choisissez la qualité du bois</option>
                  <option value="1">Sec</option>
                  <option value="2">Vert</option>
                  <option value="3">Bonne</option>
                </select>
              </div>
              <div className="input-field col s12">
                <select className="browser-default">
                  <option value="0">Choisissez la formule</option>
                  <option value="1">Hubert</option>
                  <option value="2">Jas</option>
                </select>
              </div>

              <div className="input-field col s12">
                <select className="browser-default">
                  <option value="0">Choisir l'unité de mesure</option>
                  <option value="1">mm.</option>
                  <option value="1">cm.</option>
                  <option value="3">decamètre</option>
                  <option value="2">mètre</option>
                </select>
              </div>
            </div>
          </div>

          <Link className="waves-effect waves-light btn btn-large" to="/Menu">
            <i className="material-icons">done</i> Enregistrer ce cubage
          </Link>
        </div>
      </div>
    );
  }
}
