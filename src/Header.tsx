import VolumeSlider from "./VolumeSlider";

type HeaderProps = {
  setVolume: React.Dispatch<React.SetStateAction<number>>;
};

const Header = ({ setVolume }: HeaderProps) => {
  return (
    <header
      className="bg-white dark:bg-gray-800 text-black dark:text-white
    w-screen h-16 text-center flex justify-center fixed items-center z-10 shadow"
    >
      {/* Volume slider */}
      {/* <div className="w-64 grid justify-start">
        <VolumeSlider setVolume={setVolume} />
      </div> */}

      {/* Title */}
      <p className="text-xl md:text-3xl font-black italic">
        WHO'S THAT POKÉCRY?
      </p>

      {/* Empty Space */}
      {/* <div className="w-64" /> */}
    </header>
  );
};

export default Header;
