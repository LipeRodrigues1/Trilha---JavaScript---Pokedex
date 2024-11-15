//Tentativa de Fazer a parte clicavel//







//const detailsContainer = document.getElementById('pokemonDetails');
//const detailsContent = document.getElementById('detailsContent');
// const closeButton = document.getElementById('closeButton');

// function showPokemonDetails(pokemonId) {
//     
//     pokeApi.getPokemons(0, maxRecords).then((pokemons) => {
//         const pokemon = pokemons.find((p) => p.number === parseInt(pokemonId));

//         if (pokemon) {
//             
//             detailsContent.innerHTML = `
//                 <h2>${pokemon.name}</h2>
//                 <p>#${pokemon.number}</p>
//                 <ol class="types">
//                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                 </ol>
//                 <img src="${pokemon.photo}" alt="${pokemon.name}" style="width: 100%;">
//             `;

//             
//             detailsContainer.classList.remove('hidden');
//             detailsContainer.classList.add('visible');
//             console.log("Detalhes do Pokémon carregados:", pokemon);
//         }
//     });
// }

// function closeSidebar() {
//     detailsContainer.classList.remove('visible');
//     detailsContainer.classList.add('hidden');
// }


// closeButton.addEventListener('click', closeSidebar);
