import React from 'react';
import './Title.css';

const Title = ({ text, subtitle }) => {
  return (
    <div className="title-container">
      <h1 className="title">{text}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default Title;
