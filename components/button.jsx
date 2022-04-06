import { useState } from "react";

const Button = ({ number, styleSelected = null, onClick, onSelect }) => {
  const [hover, setHover] = useState({
    backgroundColor: "rgba(75,85,99,1)",
    color: "rgb(156 163 175)",
  });

  return (
    <button
      className="w-10 h-10 rounded-full bg-gray-600 text-gray-400"
      style={!styleSelected ? hover : styleSelected}
      onClick={() => {
        onSelect(number);
        onClick(number);
      }}
      onMouseEnter={() => {
        setHover({
          backgroundColor: "rgba(107,114,128,1)",
          color: "white",
        });
      }}
      onMouseLeave={() => {
        setHover({
          backgroundColor: "rgba(75,85,99,1)",
          color: "rgb(156 163 175)",
        });
      }}
    >
      {number}
    </button>
  );
};

export default Button;
