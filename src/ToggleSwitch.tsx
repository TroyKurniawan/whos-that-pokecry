import React, { useState } from "react";
import { iOSCheck } from "./App";

type ToggleSwitchProps = {
  callback: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  subtitle: string;
  init: boolean;
  icon: string;
  enable: boolean;
};

const ToggleSwitch = ({
  callback,
  title,
  subtitle,
  init,
  icon,
  enable,
}: ToggleSwitchProps) => {
  // Handles the initial state of the switch
  const [initCheck, setInitCheck] = useState(init);

  return (
    // <div className="grid justify-center" id="toggleswitch">
    <div
      className={
        enable ? "grid justify-center" : "grid justify-center opacity-50"
      }
    >
      {/* Label = Clickable Area */}
      <label
        className="w-64 md:w-80 p-2 place-content-between flex cursor-pointer items-center
      hover:bg-gray-200 dark:hover:bg-gray-900"
      >
        <img src={icon} alt="toggle switch icon" className="size-7" />

        {/* Title/Subtitle */}
        <div className="text-start w-32 md:w-48">
          <h2 className="text-sm md:text-base font-bold">{title}</h2>
          <h3 className="text-[0.6rem] md:text-xs">{subtitle}</h3>
        </div>

        {/* Hidden Checkbox (Only available for non-iOS devices) */}
        {enable && (
          <input
            id="toggle"
            type="checkbox"
            className="hidden peer"
            checked={initCheck}
            onChange={(e) => {
              // Toggle appearance of switch
              setInitCheck(!initCheck);
              // Invoke callback function
              callback((prevLatestCry) => !prevLatestCry);
            }}
          ></input>
        )}

        {/* Toggle Switch Itself */}
        <div
          className="w-[var(--toggle-width)] h-[var(--toggle-height)] ml-4
          relative rounded-full bg-gray-300 dark:bg-gray-500 peer-checked:bg-green-500
          transition ease-out duration-100
          after:absolute after:top-0 after:left-0 after:h-[var(--toggle-height)] after:w-[var(--toggle-height)]
          after:bg-gray-100 after:shadow-md after:rounded-full peer-checked:after:translate-x-[--toggle-height]
          after:transition after:ease-out after:duration-100"
        ></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
