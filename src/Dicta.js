"use strict";
import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

// this.recognition = new webkitSpeechRecognition();
// this.recognition.continuous = true;
// this.recognition.interimResults = true;
// this.recognition.lang = "en-US";
// this.recognition.onresult = event => {
//   // do something with event.results
// };

// var grammar =
//   "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";

// const recognition = new SpeechSynthesisUtterance();
// recognition.continous = true;
// recognition.autostart = true;
// // recognition.interimResults = true;
// recognition.lang = "fr-FR";
// // recognition.maxAlternatives = 1;
// // speechSynthesis.speak(recognition);
// speechSynthesis.speak(recognition);

// // SpeechSynthesisUtterance.recognition();
// // var speechRecognitionList = new SpeechGrammarList();
// // speechRecognitionList.addFromString(grammar, 1);
// // recognition.grammars = speechRecognitionList;

// const ok = () => {
//   recognition.start();
//   console.log("Ready to receive a color command.");
// };

// recognition.onresult = event => {
//   var res = event.results[0][0].transcript;
//   console.log(res);
// };

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};
SpeechRecognition.lang = "fr-FR";

const options = {
  autoStart: false,
  //   continuous: true,
  //   interimResults: true,
  //   maxAlternatives: 1,
  recognition: {
    lang: "fr-FR"
  }
};

const Dicta = ({
  transcript,
  resetTranscript,
  startListening,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  console.log(transcript);

  //   setTimeout(() => stopListening(), 3000);

  return (
    <div>
      <button onClick={resetTranscript}>Reset</button>
      <button onClick={startListening}>Go!</button>

      <span>{transcript}</span>
    </div>
  );
};

Dicta.propTypes = propTypes;

export default SpeechRecognition(options)(Dicta);
