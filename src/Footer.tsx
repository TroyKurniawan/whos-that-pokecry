const Footer = () => {
  return (
    <footer className="w-screen h-36 text-center grid content-end">
      <p className="text-xs m-4">
        Built with{" "}
        <a
          href="https://react.dev"
          target="_blank"
          className="font-bold hover:text-red-600"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          className="font-bold hover:text-red-600"
        >
          Typescript
        </a>
        , and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          className="font-bold hover:text-red-600"
        >
          Tailwind
        </a>
        .
        <br />
        Deployed with{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          className="font-bold hover:text-red-600"
        >
          Vercel
        </a>
        . Pokémon data API by{" "}
        <a
          href="https://pokeapi.co"
          target="_blank"
          className="font-bold hover:text-red-600"
        >
          PokéAPI
        </a>
        . Icons by{" "}
        <a
          href="https://heroicons.com"
          target="_blank"
          className="font-bold hover:text-red-600"
        >
          Heroicons
        </a>
        <br />
        ©️ 2024{" "}
        <a
          href="https://github.com/TroyKurniawan"
          target="_blank"
          className="font-bold hover:text-red-600"
        >
          Troy Kurniawan
        </a>
      </p>
    </footer>
  );
};

export default Footer;
