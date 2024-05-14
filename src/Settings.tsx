import { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";

type SettingsProps = {
  closeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  filterGen1: React.Dispatch<React.SetStateAction<boolean>>;
  filterGen2: React.Dispatch<React.SetStateAction<boolean>>;
  filterGen3: React.Dispatch<React.SetStateAction<boolean>>;
  filterGen4: React.Dispatch<React.SetStateAction<boolean>>;
  filterGen5: React.Dispatch<React.SetStateAction<boolean>>;
  filterGen6: React.Dispatch<React.SetStateAction<boolean>>;
  filterGen7: React.Dispatch<React.SetStateAction<boolean>>;
  filterGen8: React.Dispatch<React.SetStateAction<boolean>>;
  filterGen9: React.Dispatch<React.SetStateAction<boolean>>;
};

const Settings = ({
  closeSettings,
  filterGen1,
  filterGen2,
  filterGen3,
  filterGen4,
  filterGen5,
  filterGen6,
  filterGen7,
  filterGen8,
  filterGen9,
}: SettingsProps) => {
  return (
    // Dim background
    <div className="fixed size-full bg-black bg-opacity-50 grid justify-center content-center z-10">
      {/* Container */}
      <div className="grid justify-center content-center w-[28rem] h-[48rem] bg-white rounded-xl text-center p-4">
        {/* X button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 absolute stroke-gray-500 hover:stroke-gray-600 cursor-pointer justify-self-end grid"
          onClick={(e) => closeSettings(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        {/* Header */}
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        {/* Contents */}
        {/* <div className="grid"></div>
        <h2>Filter Generation:</h2>
        <div className="inline-flex justify-center items-center">
          <p>1</p>
          <ToggleSwitch callback={filterGen1} />
        </div>
        <div className="inline-flex justify-center items-center">
          <p>2</p>
          <ToggleSwitch callback={filterGen1} />
        </div>
        <div className="inline-flex justify-center items-center">
          <p>3</p>
          <ToggleSwitch callback={filterGen1} />
        </div>
        <div className="inline-flex justify-center items-center">
          <p>4</p>
          <ToggleSwitch callback={filterGen1} />
        </div>
        <div className="inline-flex justify-center items-center">
          <p>5</p>
          <ToggleSwitch callback={filterGen1} />
        </div>
        <div className="inline-flex justify-center items-center">
          <p>6</p>
          <ToggleSwitch callback={filterGen1} />
        </div>
        <div className="inline-flex justify-center items-center">
          <p>7</p>
          <ToggleSwitch callback={filterGen1} />
        </div>
        <div className="inline-flex justify-center items-center">
          <p>8</p>
          <ToggleSwitch callback={filterGen1} />
        </div>
        <div className="inline-flex justify-center items-center">
          <p>9</p>
          <ToggleSwitch callback={filterGen1} />
        </div>
        <div className="inline-flex justify-center items-center">
          <p>1</p>
          <ToggleSwitch callback={filterGen1} />
        </div> */}
      </div>
    </div>
  );
};

export default Settings;
