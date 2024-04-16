type SearchResultContainerProps = {
  input: string;
};

const SearchResultContainer = ({ input }: SearchResultContainerProps) => {
  if (input === "") {
  }

  return (
    <div className="hidden absolute m-4 bottom-16 p-4 w-96 h-96 bg-white grid justify-center content-center rounded-xl">
      <ul>hello</ul>
    </div>
  );
};

export default SearchResultContainer;
