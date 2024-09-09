// src/Card.js
import React from 'react';

const Card = ({ title, content, children, ...props }) => {
  return (
    <div className={`bg-slate-100 p-6 rounded-lg shadow-sm border cursor-pointer ${props.className}`} onClick={props.onClick}>
        { children }
    </div>
  );
};

export default Card;