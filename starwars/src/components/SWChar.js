import React from "react";

const SWChar = props => {
  return (
    <li>
      <h2>{props.character.name}</h2>
      <p>Year of Birth: {props.character.birth_year}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Height: {props.character.height}</p>
    </li>
  );
};

export default SWChar;
