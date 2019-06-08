import React from "react";

const SWChar = props => {
  return (
    <li>
      <h2>{props.character.name}</h2>
      <p>{props.character.birth_year}</p>
      <p>{props.character.gender}</p>
      <p>{props.character.height}</p>
    </li>
  );
};

export default SWChar;
