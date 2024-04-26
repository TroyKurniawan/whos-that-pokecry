import { useState, useEffect } from "react";

type SearchResultContainerProps = {
  input: string;
};

const SearchResultContainer = ({ input }: SearchResultContainerProps) => {
  const container = (document.getElementById("search") as HTMLInputElement)!;

  if (input === "") {
    container.classList.add("hidden");
  } else {
    container.classList.remove("hidden");
  }

  return (
    <div
      id="search"
      className="hidden absolute m-4 bottom-16 p-4 w-96 h-96 bg-white justify-center content-center rounded-xl"
    >
      <ul>{input}</ul>
    </div>
  );
};

export default SearchResultContainer;
