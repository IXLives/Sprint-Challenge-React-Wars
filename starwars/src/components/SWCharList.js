import React from "react";
import SWChar from "./SWChar";

const SWCharList = props => {
  return (
    <div>
      {props.characters.map(char => {
        return <SWChar character={char} />;
      })}
    </div>
  );
};

export default SWCharList;
