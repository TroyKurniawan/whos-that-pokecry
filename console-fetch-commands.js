fetch('https://pokeapi.co/api/v2/pokemon/877')
  .then(res => res.json())
  .then(console.log)


  fetch('https://pokeapi.co/api/v2/pokemon-form/718/')
  .then(res => res.json())
  .then(console.log)

  fetch('https://pokeapi.co/api/v2/item/poke-ball/sprites')
  .then(res => res.json())
  .then(console.log)