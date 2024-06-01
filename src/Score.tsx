import React from "react";

type ScoreProps = {
  streak: number;
  maxStreak: number;
  correct: boolean;
  incorrect: boolean;
};

const Score = ({ streak, maxStreak, correct, incorrect }: ScoreProps) => {
  return (
    <div
      className="w-80 md:w-96 h-14 m-2
      bg-white dark:bg-gray-800
       p-4 flex  rounded-xl justify-center items-center items text-md dark:text-white font-bold text-center shadow"
    >
      <div id="streak" className="w-1/2">
        Streak: {streak}
      </div>

      <div className="h-full w-px bg-gray-200 dark:bg-gray-700"></div>

      <div id="max" className="w-1/2">
        Max: {maxStreak}
      </div>

      {/* Green Ping */}
      {correct && (
        <div className="size-16 fixed bg-green-500 rounded-full animate-ping z-10" />
      )}
      {/* Red Ping */}
      {incorrect && (
        <div className="size-16 fixed bg-red-500 rounded-full animate-ping z-10" />
      )}
    </div>
  );
};

export default Score;
