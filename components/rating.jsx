import Image from "next/image";
import { useState } from "react";
import Button from "./button";

const Rating = ({ onClick, onSubmit }) => {
  const [selected, setSelected] = useState(0);
  const [hoverSubmit, setHoverSubmit] = useState({
    backgroundColor: "rgb(249 115 22)",
    color: "white",
  });
  return (
    <div className="flex justify-center">
      <div className="w-96 h-96 bg-gray-800 rounded-3xl p-8">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
          <Image src={"/assets/images/icon-star.svg"} width={15} height={15} />
        </div>

        <div>
          <h1 className="text-white font-medium text-3xl mt-8">
            How did we do?
          </h1>
          <p className="text-gray-400 text-sm font-sans pt-3">
            {
              "Please let us know how we did with your support request. All feedback is appreciated to help us to improve our offering!"
            }
          </p>
        </div>

        <div className="flex flex-row space-x-6 my-7 justify-center">
          <Button
            number={1}
            selected={selected}
            onClick={onClick}
            onSelect={setSelected}
          />
          <Button
            number={2}
            selected={selected}
            onClick={onClick}
            onSelect={setSelected}
          />
          <Button
            number={3}
            selected={selected}
            onClick={onClick}
            onSelect={setSelected}
          />
          <Button
            number={4}
            selected={selected}
            onClick={onClick}
            onSelect={setSelected}
          />
          <Button
            number={5}
            selected={selected}
            onClick={onClick}
            onSelect={setSelected}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="flex flex-grow justify-center items-center text-white bg-orange-500 h-10 rounded-3xl"
            style={hoverSubmit}
            onClick={() => onSubmit(true)}
            onMouseEnter={() =>
              setHoverSubmit({
                backgroundColor: "rgb(243 244 246)",
                color: "rgb(249 115 22)",
              })
            }
            onMouseLeave={() =>
              setHoverSubmit({
                backgroundColor: "rgb(249 115 22)",
                color: "white",
              })
            }
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
