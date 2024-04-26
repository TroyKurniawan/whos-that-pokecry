import { useState, useEffect } from "react";

type SearchResultContainerProps = {
  input: string;
};

const SearchResultContainer = ({ input }: SearchResultContainerProps) => {
  // If empty, do not display results
  if (input === "") {
    return null;
  }
  // If user types any input, display results
  else {
    return (
      <div
        id="search"
        className="absolute m-4 bottom-16 p-4 w-96 h-96 bg-white justify-center content-center rounded-xl"
      >
        <ul>{input}</ul>
      </div>
    );
  }
};

export default SearchResultContainer;
