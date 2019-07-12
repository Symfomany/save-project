import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import TextField from "@material-ui/core/TextField";
import Logo from "./logo.png";

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
  interimResults: false,
  //   maxAlternatives: 1,
  recognition: {
    lang: "fr-FR"
  }
};

class Grume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comm: ""
    };
    this.toggleSound = this.toggleSound.bind(this);
    this.changeComm = this.changeComm.bind(this);
  }

  go = () => {
    console.log(this.state);
    localStorage.setItem("grume", JSON.stringify(this.state));
    this.props.history.push("/resume");
  };

  changeComm(event) {
    this.setState({ comm: event.target.value });
  }

  componentDidUpdate() {
    const { startListening, stopListening, transcript } = this.props;
    const speech = transcript.trim();
    this.state.comm = speech;
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
          <img
            style={{ width: 300, float: "left" }}
            src={Logo}
            className="logo responsive-img center-block"
          />
          <img
            style={{ width: 219, float: "left" }}
            src="http://www.so-buzz.fr/wp-content/uploads/2016/10/ibm-watson.jpg"
          />

          <p>
            <a
              onClick={this.toggleSound}
              className={`btn-large blue lighten-1  btn-floating treslarge ${
                this.state.drap ? "red" : "pulse"
              }`}
            >
              {this.state.drap ? (
                <i className="material-icons right">mic_off</i>
              ) : (
                <i className="material-icons right">mic</i>
              )}
            </a>
          </p>
          {/* <Dicta recognition={{ lang: "fr-FR" }} /> */}

          <div className="input-field col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">chat</i>
              <textarea
                style={{ height: 150, fontSize: "2rem" }}
                id="volume"
                className="materialize-textarea"
                placeholder="Votre commentaire"
                multiline
                rowsMax="4"
                onChange={this.changeComm}
                value={this.state.comm}
                ref={input => {
                  this.comm = input;
                }}
              />
            </div>
          </div>

          <div className="input-field col s12">
            <button
              className="waves-effect waves-light btn btn-large blue lighten-1"
              onClick={this.go}
            >
              <i className="material-icons right">save</i> Analyser cette
              requête
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Grume.propTypes = propTypes;

export default SpeechRecognition(options)(Grume);
