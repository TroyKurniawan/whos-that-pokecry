import React from "react";

type ScoreProps = {
  streak: number;
  maxStreak: number;
  correct: boolean;
  incorrect: boolean;
};

const Score = ({ streak, maxStreak, correct, incorrect }: ScoreProps) => {
  return (
    <div className="w-96 h-14 m-4 p-4 flex bg-white rounded-xl justify-center items-center items text-md text-black font-bold text-center">
      <div className="w-1/2">Streak: {streak}</div>
      <div className="h-full w-px bg-gray-200"></div>
      <div className="w-1/2">Max: {maxStreak}</div>

      {/* Green Ping */}
      {correct && (
        <div className="size-16 fixed bg-green-500 rounded-full animate-ping" />
      )}
      {/* Red Ping */}
      {incorrect && (
        <div className="size-16 fixed bg-red-500 rounded-full animate-ping" />
      )}
    </div>
  );
};

export default Score;
