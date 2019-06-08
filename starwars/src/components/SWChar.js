import React from "react";

const SWChar = props => {
  return (
    <li>
      <h2>{props.character.name}</h2>
      <p><strong>Year of Birth: </strong>{props.character.birth_year}</p>
      <p><strong>Gender: </strong>{props.character.gender}</p>
      <p><strong>Height: </strong>{props.character.height}</p>
    </li>
  );
};

export default SWChar;
