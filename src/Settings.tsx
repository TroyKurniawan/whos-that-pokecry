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
      <div className="grid justify-center content-center w-[28rem] h-[32rem] bg-white rounded-xl text-center p-4">
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
        <div className="pb-4 border-b">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        {/* Contents */}
        <h2 className="text-start font-bold text-lg my-2">
          Filter Generation:
        </h2>
        <div className="justify-center items-center">
          <ToggleSwitch
            callback={filterGen1}
            title={"Gen 1"}
            subtitle={""}
            init={true}
          />
          <ToggleSwitch
            callback={filterGen2}
            title={"Gen 2"}
            subtitle={""}
            init={true}
          />
          <ToggleSwitch
            callback={filterGen3}
            title={"Gen 3"}
            subtitle={""}
            init={true}
          />
          <ToggleSwitch
            callback={filterGen4}
            title={"Gen 4"}
            subtitle={""}
            init={true}
          />
          <ToggleSwitch
            callback={filterGen5}
            title={"Gen 5"}
            subtitle={""}
            init={true}
          />
          <ToggleSwitch
            callback={filterGen6}
            title={"Gen 6"}
            subtitle={""}
            init={true}
          />
          <ToggleSwitch
            callback={filterGen7}
            title={"Gen 7"}
            subtitle={""}
            init={true}
          />
          <ToggleSwitch
            callback={filterGen8}
            title={"Gen 8"}
            subtitle={""}
            init={true}
          />
          <ToggleSwitch
            callback={filterGen9}
            title={"Gen 9"}
            subtitle={""}
            init={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
