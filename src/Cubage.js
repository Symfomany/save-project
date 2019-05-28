import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Cubage.css";
import $ from "jquery";

export default class Cubage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foret: "",
      serie: "",
      parcelle: "",
      sousparcelle: "",
      autreParcelle: "",
      autresousParcelle: "",
      qualite: "",
      methode: "Hubert",
      unite: "cm."
    };

    this.go = this.go.bind(this);
  }

  go = () => {
    console.log(this.state);
    localStorage.setItem("cubage", JSON.stringify(this.state));
    this.props.history.push("/menu");
  };

  changeUnite = event => {
    this.setState({
      unite: event.target.value
    });
    console.log(event.target.value);
  };
  changeMethode = event => {
    this.setState({
      methode: event.target.value
    });

    console.log(event.target.value);
  };
  changeQualite = event => {
    this.setState({
      qualite: event.target.value
    });
    console.log(event.target.value);
  };
  changeAutreSousParcelle = event => {
    this.setState({
      autresousParcelle: event.target.value
    });
  };
  changeSousParcelle = event => {
    this.setState({
      sousparcelle: event.target.value
    });
  };
  changeAutreParcelle = event => {
    this.setState({
      autreParcelle: event.target.value
    });
  };

  changeForetTwo = txt => {
    this.setState({
      foret: txt
    });
  };
  changeForet = event => {
    this.setState({
      foret: event.target.value
    });
  };
  changeSerie = event => {
    this.setState({
      serie: event.target.value
    });
  };

  changeParcelle = event => {
    this.setState({
      parcelle: event.target.value
    });
    console.log(event.target.value);
  };

  componentDidMount() {
    var elems = $("#autocomplete-input");

    const changeForetTwo = txt => {
      this.setState({
        foret: txt
      });
    };
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
      },
      onAutocomplete(text) {
        changeForetTwo(text);
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
              value={this.state.foret}
              onChange={this.changeForet}
              required
            />
            <label htmlFor="autocomplete-input">Choisissez la Foret</label>
          </div>

          <div className="input-field col s12">
            <select
              className="browser-default"
              value={this.state.serie}
              onChange={this.changeSerie}
            >
              <option disabled selected>
                Choisissez la série
              </option>
              <option value="Série 1">Série 1</option>
              <option value="Série 2">Série 2</option>
              <option value="Série 3">Série 3</option>
              <option value="Série 4">Série 4</option>
              <option value="Série 5">Série 5</option>
            </select>
          </div>

          <div className="input-field col s12">
            <select
              className="browser-default"
              value={this.state.parcelle}
              onChange={this.changeParcelle}
            >
              <option disabled selected>
                Choisissez la parcelle principale
              </option>
              <option value="Parcelle 1">Parcelle 1</option>
              <option value="Parcelle 2">Parcelle 2</option>
              <option value="Parcelle 3">Parcelle 3</option>
              <option value="Parcelle 4">Parcelle 4</option>
              <option value="Parcelle 5">Parcelle 5</option>
            </select>
          </div>

          <div className="input-field col s12">
            <input
              value={this.state.autreParcelle}
              onChange={this.changeAutreParcelle}
              id="autre"
              type="text"
              className="validate"
            />
            <label htmlFor="autre">Autres parcelles</label>
          </div>

          <div className="input-field col s12">
            <select
              className="browser-default"
              value={this.state.sousParcelle}
              onChange={this.changeSousParcelle}
            >
              <option value="a" disabled selected>
                Choisissez la sous-parcelle principale
              </option>
              <option value="Sous-Parcelle 1">Sous-Parcelle 1</option>
              <option value="Sous-Parcelle 2">Sous-Parcelle 2</option>
              <option value="Sous-Parcelle 3">Sous-Parcelle 3</option>
              <option value="Sous-Parcelle 4">Sous-Parcelle 4</option>
              <option value="Sous-Parcelle 5">Sous-Parcelle 5</option>
            </select>
          </div>

          <div className="input-field col s12">
            <input
              id="autresousParcelle"
              type="text"
              className="validate"
              value={this.state.autresousParcelle}
              onChange={this.changeAutreSousParcelle}
            />
            <label htmlFor="autresousParcelle">Autres sous-parcelles</label>
          </div>

          <div className="input-field col s12">
            <select
              className="browser-default"
              value={this.state.qualite}
              onChange={this.changeQualite}
            >
              <option value="b" disabled selected>
                Choisissez la qualité du bois
              </option>
              <option value="Sec">Sec</option>
              <option value="Vert">Vert</option>
              <option value="Bonne">Bonne</option>
              <option value="Humide">Humide</option>
            </select>
          </div>
          <div className="input-field col s12">
            <select
              className="browser-default"
              value={this.state.methode}
              onChange={this.changeMethode}
            >
              <option value="b" disabled selected>
                Méthode de cubage
              </option>
              <option value="Hubert" selected>
                Hubert
              </option>
              <option value="Jas">Jas</option>
            </select>
          </div>

          <div className="input-field col s12">
            <select
              className="browser-default"
              value={this.state.unite}
              onChange={this.changeUnite}
            >
              <option value="a" disabled selected>
                Choisir l'unité de mesure
              </option>
              <option value="cm.">cm.</option>
              <option value="mm.">mm.</option>
              <option value="dm.">decamètre</option>
              <option value="m.">mètre</option>
            </select>
          </div>

          <button
            className="waves-effect waves-light btn btn-large teal darken-2"
            onClick={this.go}
          >
            <i className="material-icons right">done</i> Enregistrer ce cubage
          </button>
        </div>
      </div>
    );
  }
}
