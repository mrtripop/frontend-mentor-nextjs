import { useState } from "react";

const Button = ({ number, selected, onClick, onSelect }) => {
  const [hover, setHover] = useState({
    backgroundColor: "rgba(75,85,99,1)",
    color: "rgb(156 163 175)",
  });
  return (
    <button
      className="w-10 h-10 rounded-full bg-gray-600 text-gray-400"
      style={hover}
      onClick={() => {
        setHover({
          backgroundColor: "rgb(249 115 22)",
          color: "white",
        });
        onSelect(number);
        onClick(number);
      }}
      onMouseEnter={() => {
        if (selected !== number) {
          setHover({
            backgroundColor: "rgba(107,114,128,1)",
            color: "white",
          });
        } else {
          setHover({
            backgroundColor: "rgb(249 115 22)",
            color: "white",
          });
        }
      }}
      onMouseLeave={() => {
        if (selected !== number) {
          setHover({
            backgroundColor: "rgba(75,85,99,1)",
            color: "rgb(156 163 175)",
          });
        } else {
          setHover({
            backgroundColor: "rgb(249 115 22)",
            color: "white",
          });
        }
      }}
    >
      {number}
    </button>
  );
};

export default Button;
