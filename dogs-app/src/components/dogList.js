import React from "react";
import DogItem from "./dogItem";

const DogList = props => {
  return (
    <div className="dogList">
      {console.log(props)}
      {Array.from(props).map(breed => {
        return <DogItem breeds={breed} />;
      })}
    </div>
  );
};

export default DogList;
