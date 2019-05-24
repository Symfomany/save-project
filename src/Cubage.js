import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Autosuggest from "react-autosuggest";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Cubage.css";

import Button from "@material-ui/core/Button";

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

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

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
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".autocomplete");
      var instances = M.Autocomplete.init(elems, {
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
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems);
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="input-field col s12">
              <input id="nom" type="text" className="validate" />
              <label htmlFor="nom">Nom de la parcelle</label>
            </div>

            <div className="input-field col s12">
              <input
                type="text"
                id="autocomplete-input"
                className="autocomplete"
              />
              <label htmlFor="autocomplete-input">Choisissez la Foret</label>
            </div>

            <div className="input-field col s12">
              <select>
                <option>Choisir l'unité de mesure</option>
                <option value="1">mm.</option>
                <option value="1">cm.</option>
                <option value="3">decamètre</option>
                <option value="2">mètre</option>
              </select>
            </div>

            <Button variant="contained" color="primary">
              Hello World
            </Button>

            <div className="input-field col s12">
              <select>
                <option>Choisissez la parcelle de mesure</option>
                <option>Parcelle 1</option>
                <option value="1">Parcelle 2</option>
                <option value="1">Parcelle 3</option>
                <option value="1">Parcelle 4</option>
                <option value="1">Parcelle 5</option>
              </select>
            </div>

            <div className="input-field col s12">
              <input id="autre" type="text" className="validate" />
              <label htmlFor="autre">Autre sous-parcelle</label>
            </div>

            <div className="card">
              <div className="card-content ">
                <div className="input-field col s12">
                  <input id="essence" type="text" className="validate" />
                  <label htmlFor="essence">Essence</label>
                </div>
                <div className="input-field col s12">
                  <select>
                    <option>Choisissez la qualité du bois</option>
                    <option>Sec</option>
                    <option>Vert</option>
                    <option>Bonne</option>
                  </select>
                </div>
                <div className="input-field col s12">
                  <select>
                    <option>Choisissez la formule</option>
                    <option>Hubert</option>
                    <option>Jas</option>
                  </select>
                </div>
              </div>
            </div>

            <Link className="waves-effect waves-light btn btn-large" to="/Menu">
              <i className="material-icons">done</i> Enregistrer ce cubage
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
