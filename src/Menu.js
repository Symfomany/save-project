import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

export default class Menu extends React.Component {
  componentWillMount() {
    M.toast({
      html: "Votre configuration a bien été prise en compte",
      displayLength: 3000
    });
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link className="waves-effect waves-light btn" to="/grume">
              CUBER ET LOTIR DES GRUMES AVEC UNE SEULE QUALITE PAR GRUME
            </Link>
          </li>
          <li>
            <Link className="waves-effect waves-light btn" to="/cubage">
              CUBER ET LOTIR DES GRUMES AVEC PLUSIEURS QUALITES PAR GRUME
            </Link>
          </li>
          <li>
            <Link className="waves-effect waves-light btn" to="/cubage">
              CUBER DES GRUMES EMPILEES (DENOMBREMENT OU METHODE JAS)
            </Link>
          </li>
          <li>
            <Link className="waves-effect waves-light btn" to="/cubage">
              STERER DES PILES DE BOIS
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
