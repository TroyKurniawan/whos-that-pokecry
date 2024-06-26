type MainMenuProps = {
  setWindow: React.Dispatch<React.SetStateAction<boolean>>[];
};

const MainMenu = ({ setWindow }: MainMenuProps) => {
  // Display/hide game window
  const toggleGame = () => {
    setWindow[1]((prevPractice) => !prevPractice);
    setWindow[0]((prevMainmenu) => !prevMainmenu);
  };
  // Display/hide practice window
  const togglePractice = () => {
    setWindow[2]((prevPractice) => !prevPractice);
    setWindow[0]((prevMainmenu) => !prevMainmenu);
  };
  // Display/hide settings window
  const toggleSettings = () => {
    setWindow[3]((prevSettings) => !prevSettings);
    setWindow[0]((prevMainmenu) => !prevMainmenu);
  };

  // ================================================

  return (
    <div
      className="w-[20rem] h-[26rem]
      md:w-[24rem] md:h-[30rem]
    bg-white dark:bg-gray-800
    grid justify-center content-center justify-items-center rounded-xl m-4 shadow animate-bump"
    >
      {/* Start */}
      <button
        className="size-64 p-4 m-4 bg-green-600 rounded-xl text-white font-bold text-4xl grid justify-center items-center
        hover:bg-green-700 active:bg-green-800
        transition ease-out duration-100"
        onClick={toggleGame}
      >
        Start
      </button>

      {/* Practice and Settings Buttons */}
      <div className="flex justify-between w-64 m-4">
        <button
          className="w-32 p-2 border rounded-xl text-lg
          border-gray-500 text-gray-500
          hover:bg-gray-500 hover:text-white active:bg-gray-600 active:border-gray-600 active:text-white
          dark:border-gray-200 dark:text-gray-200
          dark:hover:border-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:active:bg-gray-400 dark:active:border-gray-400 dark:active:text-gray-800
          transition ease-out duration-100
          flex content-center justify-center items-center"
          onClick={togglePractice}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
          Practice
        </button>

        <div className="w-2"></div>

        <button
          className="w-32 p-2 border rounded-xl text-lg
          border-gray-500 text-gray-500
          hover:bg-gray-500 hover:text-white active:bg-gray-600 active:border-gray-600 active:text-white
          dark:border-gray-200 dark:text-gray-200
          dark:hover:border-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:active:bg-gray-400 dark:active:border-gray-400 dark:active:text-gray-800
          transition ease-out duration-100
          flex content-center justify-center items-center"
          onClick={toggleSettings}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          Settings
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
