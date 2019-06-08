import React from 'react';
import DogItem from './dogItem';

const DogList = props => {
    return (
        <div className = 'dogList'>
            <DogItem breeds={Array.from(props)} />
            
        </div>
      );
}

export default DogList;