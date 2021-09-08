import React from 'react';
import './styleComponent/Square.css';

const Square = (props) => {
    return (
        <button className="square" onClick={props.onClick}>{props.value}</button>
    );
}

export default Square;
