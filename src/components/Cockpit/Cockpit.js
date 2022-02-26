import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1x solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
    return (
        <div>
            <h1>Hi, Im {props.title}</h1>
            <p>Im learing React</p>
            <button
                style={style}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;