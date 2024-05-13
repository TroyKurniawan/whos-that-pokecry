import React from "react";

type ToggleSwitchProps = {
  callback: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleSwitch = ({ callback }: ToggleSwitchProps) => {
  //   const checkbox = document.getElementById("toggle") as HTMLInputElement;
  //   if (checkbox.checked) {
  //     alert("hi");
  //   }

  return (
    <div className="grid items-center">
      <label
        className="w-[var(--toggle-width)] h-[var(--toggle-height)]
        rounded-full inline-block cursor-pointer m-4"
      >
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
          className="w-[var(--toggle-width)] h-[var(--toggle-height)]
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
