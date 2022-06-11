import {React, useState } from "react";
import './Base.css';

const Base = ({ title, info }) => {
  const [showText, setShowText] = useState(false);
  const openContentHandler = () => {
    setShowText(!showText);
  }
  return (
    <div className="detail">
      <p className="title">{title}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor" onClick={openContentHandler}>
        <path fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd" />
      </svg>
      {showText && <div className="hidden-box">
        <p>{info}</p>
      </div>}
    </div>
  )
}

export default Base;