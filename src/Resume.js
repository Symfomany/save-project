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

export default class Resume extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <h3>Résumé</h3>

        <CSVLink class="btn btn-large cyan pulse" data={data} headers={headers}>
          <i class="material-icons right">cloud_download</i>
          Télécharger le csv
        </CSVLink>
      </div>
    );
  }
}
