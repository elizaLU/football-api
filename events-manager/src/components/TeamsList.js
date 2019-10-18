import React from "react";
import { Link } from "react-router-dom";

export default function TeamsList(props) {
  console.log("PROPS", props);
  // console.log(props.dogBreeds); 

  return (
    <div>
      <ul>
        {props.teams === null
          ? "Loading..."
          : props.teams.map(team => (
            <li key={team}>
              <Link to={`/team/${team}`}>{team}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}