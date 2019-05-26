import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const options = {
  autoStart: false,
  continuous: false,
  interimResults: true,
  //   maxAlternatives: 1,
  recognition: {
    lang: "fr-FR"
  }
};
const regexLot = new RegExp("lot|los|l`'02|l'eau|eau", "i");
const regexPlaquette = new RegExp("quett?es?|kate|kette|kete|paquet", "i");
const regexDiametre = new RegExp("diamètre|maitre|mettre|metre|mètre", "i");
const regexEssence = new RegExp("sens|essence|cense|ess", "i");
const regexLongueur = new RegExp("longueur|gueur|geur", "i");
const regexQualite = new RegExp("qualite|qualit|lité|lite", "i");
const regexQual = new RegExp("me sec|mi sec|sec|humide|vert", "i");

const regexArbre = new RegExp(
  "epicea|Châtaignier|Chataignier|Charme|Amandier|Cèdre|Noyer|Noistier|Platane|Orme|Poirier|Pommier|Saule|Tilleul|Pommier|Erable|Tremble|Cèdre|Cèdre|Cèdre|Ginkgo|Frêne|Frêne|marronnier|hêtre|mélèze|Pin|Pin maritime|Pin sylvestre|Sapin|Frêne|Merisier|Erable|chaîne|chêne|boulot|être|peupliers?|tilleul|séquoia",
  "i"
);
const regexComment = new RegExp(
  "mentaire|mentère|commentaire|commentaires|comm",
  "i"
);

const regexNb = new RegExp("[0-9]+", "i");
const regexComm = new RegExp(".*", "i");

class Grume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drap: true,
      lot: "",
      plaquette: "",
      diametre: "",
      longeur: "",
      qualite: "",
      volume: 0,
      arbre: "",
      comm: ""
    };
    this.toggleSound = this.toggleSound.bind(this);
  }

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
  }

  componentDidUpdate() {
    const { startListening, stopListening, transcript } = this.props;
    const speech = transcript.trim();

    if (regexLot.test(speech)) {
      this.lot.focus();
      if (regexNb.test(speech)) {
        var nb = speech.match(regexNb);
        // console.log(nb[0]);
        this.state.lot = nb[0];
      }
    } else if (regexPlaquette.test(speech)) {
      this.plaquette.focus();
      if (regexNb.test(speech)) {
        var nb = speech.match(regexNb);
        // console.log(nb[0]);
        this.state.plaquette = nb[0];
      }
    } else if (regexDiametre.test(speech)) {
      this.diametre.focus();
      if (regexNb.test(speech)) {
        var nb = speech.match(regexNb);
        // console.log(nb[0]);
        this.state.diametre = nb[0];
        window.scrollTo(0, document.body.scrollHeight);
      }
    } else if (regexQualite.test(speech)) {
      this.qualite.focus();
      if (regexQual.test(speech)) {
        var qualite = speech.match(regexQual);
        // console.log(nb[0]);
        this.state.qualite = qualite[0];
        window.scrollTo(0, document.body.scrollHeight);
      }
    } else if (regexLongueur.test(speech)) {
      this.longeur.focus();
      if (regexNb.test(speech)) {
        var nb = speech.match(regexNb);
        this.state.longeur = nb[0];
      }
    } else if (regexEssence.test(speech)) {
      console.log(speech);
      this.arbre.focus();
      var arbre = speech.match(regexArbre);
      console.log(arbre);
      if (arbre) {
        this.state.arbre = arbre[0];
      }
    } else if (regexComment.test(speech)) {
      this.comm.focus();
      let comm = speech.match(regexComm);
      comm = comm.input;
      const regex = /commentaire|commentaires|fin de commentaire/gi;
      if (comm.length > 0) {
        comm = comm.replace(regex, "");
        this.state.comm = comm;
      }
    }

    if (this.state.diametre.length > 0 && this.state.longeur.length > 0) {
      this.state.volume =
        ((Math.PI * Math.pow(parseFloat(this.state.diametre), 2)) / 4) *
        parseFloat(this.state.longeur);
    }
  }

  toggleSound() {
    this.setState({
      drap: !this.state.drap
    });
    if (this.state.drap) {
      this.props.startListening();
      M.toast({ html: "Mico activé", classes: "rounded" });
    } else {
      this.props.stopListening();
      M.toast({ html: "Mico desactivé", classes: "rounded" });
    }
  }

  render() {
    const { startListening, stopListening, transcript } = this.props;
    const speech = transcript.trim();

    return (
      <div>
        <div className="row">
          <a
            onClick={this.toggleSound}
            className={`btn-large  btn-floating treslarge ${
              this.state.drap ? "red" : "pulse"
            }`}
          >
            {this.state.drap ? (
              <i className="material-icons right">mic_off</i>
            ) : (
              <i className="material-icons right">mic</i>
            )}
          </a>

          {/* <Dicta recognition={{ lang: "fr-FR" }} /> */}

          <div className="input-field col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">filter_7</i>
              <input
                placeholder="Numéro du lot"
                id="nom"
                type="number"
                className="validate"
                value={this.state.lot}
                ref={input => {
                  this.lot = input;
                }}
              />
            </div>
          </div>
          <div className="input-field col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">filter_4</i>

              <input
                id="plaquette"
                placeholder="Numéro de Plaquette"
                value={this.state.plaquette}
                type="number"
                className="validate"
                ref={input => {
                  this.plaquette = input;
                }}
              />
            </div>
          </div>
          <div className="input-field col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">local_florist</i>

              <input
                id="autocomplete-input"
                placeholder="Essence de l'arbre"
                type="text"
                required
                className="validate"
                value={this.state.arbre}
                ref={input => {
                  this.arbre = input;
                }}
              />
            </div>
          </div>
          <div className="input-field col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">crop</i>
              <input
                id="longeur"
                type="number"
                placeholder="Longeur de l'arbre (cm.)"
                className="validate"
                value={this.state.longeur}
                ref={input => {
                  this.longeur = input;
                }}
              />
            </div>
          </div>
          <div className="input-field col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">crop_free</i>
              <input
                id="diametre"
                placeholder="Diamètre"
                type="number"
                className="validate"
                value={this.state.diametre}
                ref={input => {
                  this.diametre = input;
                }}
              />
            </div>
          </div>
          <div className="input-field col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">check</i>

              <input
                placeholder="Qualité"
                id="qualite"
                type="text"
                className="validate"
                value={this.state.qualite}
                ref={input => {
                  this.qualite = input;
                }}
              />
            </div>
          </div>
          <div className="input-field col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">filter_frames</i>
              <input
                id="volume"
                type="number"
                className="validate"
                placeholder="Volume"
                value={this.state.volume}
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                V = ((π d²) / 4) * L (HUBERT AFNOR)
              </span>
            </div>
          </div>

          <div className="input-field col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">chat</i>
              <textarea
                id="volume"
                className="materialize-textarea"
                placeholder="Votre commentaire"
                value={this.state.comm}
                ref={input => {
                  this.comm = input;
                }}
              />
            </div>
          </div>

          <div className="input-field col s12">
            <Link
              className="waves-effect waves-light btn btn-large"
              to="/resume"
            >
              <i className="material-icons right">save</i> Enregistrer ce grume
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Grume.propTypes = propTypes;

export default SpeechRecognition(options)(Grume);
