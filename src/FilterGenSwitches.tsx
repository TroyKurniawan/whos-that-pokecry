import React from "react";
import ToggleSwitch from "./ToggleSwitch.js";

type FilterGenSwitchesProps = {
  filterGens: React.Dispatch<
    React.SetStateAction<
      {
        gen: number;
        state: boolean;
      }[]
    >
  >;
};

const FilterGenSwitches = ({ filterGens }: FilterGenSwitchesProps) => {
  let initialGenFilter = [
    { gen: 1, state: true },
    { gen: 2, state: true },
    { gen: 3, state: true },
    { gen: 4, state: true },
    { gen: 5, state: true },
    { gen: 6, state: true },
    { gen: 7, state: true },
    { gen: 8, state: true },
    { gen: 9, state: true },
  ];

  return;
};

export default FilterGenSwitches;

<div className="grid justify-center">
  {/* 1 */}
  <div key={"1"} className="grid justify-center">
    <button
      onMouseDown={(e) => {
        alert("bulbasaur");
      }}
      className="text-center items-center text-xl w-80 h-14 border-b hover:bg-gray-100 cursor-pointer flex"
    >
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }
        alt={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }
        className="size-10 ml-16 mr-4"
      ></img>
      Generation 1
    </button>
  </div>
</div>;
