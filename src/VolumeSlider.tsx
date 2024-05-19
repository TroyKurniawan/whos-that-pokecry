import { useState } from "react";

type VolumeProps = {
  setVolume: React.Dispatch<React.SetStateAction<number>>;
};

const VolumeSlider = ({ setVolume }: VolumeProps) => {
  // Sets amount of intervals within input slider
  const volumeIntervals = 20;

  // Used to keep track of volume sider's position
  const [volumeCurrent, setVolumeCurrent] = useState(volumeIntervals / 2);

  // Used to determine if volume slider is 0 (muted)
  const [volumeState, setVolumeState] = useState(true);

  // Volume handler
  const volumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const volume = Number(value) / volumeIntervals / 3.3;
    setVolumeCurrent(Number(value));
    setVolume(volume);

    //   If muted, show muted icon
    if (volume == 0) setVolumeState(false);
    else setVolumeState(true);

    console.log(volume);
  };

  return (
    <div className="w-40 h-8 flex justify-center items-center">
      {/* Volume On */}
      {volumeState && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 mr-2"
        >
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
          <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
        </svg>
      )}

      {/* Volume Off */}
      {!volumeState && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 mr-2"
        >
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
        </svg>
      )}

      <input
        type="range"
        min={0}
        max={volumeIntervals}
        value={volumeCurrent}
        className="w-20"
        onChange={(e) => volumeHandler(e)}
      />
    </div>
  );
};

export default VolumeSlider;
