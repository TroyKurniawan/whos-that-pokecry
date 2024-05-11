import React from "react";
import Game from "./Game";

const MainMenu = () => {
  return (
    <div className="h-3/4 grid justify-center content-center">
      {/* Game Itself */}
      <Game />

      {/* Practice and Settings Buttons */}
      <div className="flex justify-between">
        <button className="w-1/2 p-2 m-4 border-2 border-gray-500 text-gray-500 rounded-xl text-lg hover:border-gray-600 hover:text-gray-600 active:border-gray-700 active:text-gray-700 flex content-center justify-center items-center hover:stroke-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#6b7280"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
            <path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
            <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
          </svg>
          Practice
        </button>

        <button className="w-1/2 p-2 m-4 border-2 border-gray-500 text-gray-500 rounded-xl  text-lg hover:border-gray-600 hover:text-gray-600 active:border-gray-700 active:text-gray-700 flex content-center justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#6b7280"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          </svg>
          Settings
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
