const Footer = () => {
  return (
    <footer className="w-screen h-24 text-center grid content-center">
      <p className="text-[0.5rem] md:text-xs m-4 dark:text-gray-500">
        Built with{" "}
        <a
          href="https://react.dev"
          rel="noreferrer"
          target="_blank"
          className="font-bold hover:text-red-500"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org"
          rel="noreferrer"
          target="_blank"
          className="font-bold hover:text-red-500"
        >
          Typescript
        </a>
        , and{" "}
        <a
          href="https://tailwindcss.com"
          rel="noreferrer"
          target="_blank"
          className="font-bold hover:text-red-500"
        >
          Tailwind CSS
        </a>
        .
        <br />
        Pokémon data by{" "}
        <a
          href="https://pokeapi.co"
          rel="noreferrer"
          target="_blank"
          className="font-bold hover:text-red-500"
        >
          PokéAPI
        </a>{" "}
        and{" "}
        <a
          href="https://play.pokemonshowdown.com/audio/cries/"
          rel="noreferrer"
          target="_blank"
          className="font-bold hover:text-red-500"
        >
          Pokémon Showdown
        </a>
        . Icons by{" "}
        <a
          href="https://heroicons.com"
          rel="noreferrer"
          target="_blank"
          className="font-bold hover:text-red-500"
        >
          Heroicons
        </a>
        .
        <br />
        ©️ 2024{" "}
        <a
          href="https://github.com/TroyKurniawan"
          rel="noreferrer"
          target="_blank"
          className="font-bold hover:text-red-500"
        >
          Troy Kurniawan
        </a>
      </p>
    </footer>
  );
};

export default Footer;
