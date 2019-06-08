import React from "react";
import SWChar from "./SWChar";

import './StarWars.css';

const SWCharList = props => {
  return (
    <div className = 'charList'>
      {props.characters.map(char => {
        return <SWChar character={char} />;
      })}
    </div>
  );
};

export default SWCharList;
