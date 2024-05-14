import React from "react";

type ToggleSwitchProps = {
  callback: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  subtitle: string;
};

const ToggleSwitch = ({ callback, title, subtitle }: ToggleSwitchProps) => {
  return (
    <div>
      {/* Label = Clickable Area */}
      <label className="w-80 p-2 place-content-between flex cursor-pointer m-2 hover:bg-gray-200 items-center">
        {/* Title/Subtitle */}
        <div className="text-start">
          <h2 className="font-bold">{title}</h2>
          <h3 className="text-xs">{subtitle}</h3>
        </div>

        {/* Hidden Checkbox */}
        <input
          id="toggle"
          type="checkbox"
          className="hidden peer"
          onChange={(e) => {
            console.log("Flip");
            callback((prevLatestCry) => !prevLatestCry);
          }}
        ></input>

        {/* Toggle Switch Itself */}
        <div
          className="w-[var(--toggle-width)] h-[var(--toggle-height)] ml-4 mr-2
          relative rounded-full bg-gray-300 peer-checked:bg-green-500
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
