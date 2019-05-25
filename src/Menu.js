import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

export default class Menu extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);

    M.toast({
      html: "Votre configuration a bien été prise en compte",
      displayLength: 3000
    });
  }
  render() {
    return (
      <div className="row">
        <ul className="col s12">
          <li>
            <Link
              className="waves-effect waves-light btn btn-large  teal lighten-2"
              to="/grume"
            >
              CUBER ET LOTIR DES GRUMES AVEC UNE SEULE QUALITE PAR GRUME
            </Link>
          </li>
          <li>
            <Link
              className="waves-effect waves-light btn btn-large teal lighten-1"
              to="/cubage"
            >
              CUBER ET LOTIR DES GRUMES AVEC PLUSIEURS QUALITES PAR GRUME
            </Link>
          </li>
          <li>
            <Link
              className="waves-effect waves-light btn btn-large teal"
              to="/cubage"
            >
              CUBER DES GRUMES EMPILEES (DENOMBREMENT OU METHODE JAS)
            </Link>
          </li>
          <li>
            <Link
              className="waves-effect waves-light btn btn-large teal darken-1"
              to="/cubage"
            >
              STERER DES PILES DE BOIS
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
