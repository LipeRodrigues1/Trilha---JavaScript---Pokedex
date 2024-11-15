const pokemonList = document.getElementById('pokemonList');
const loadButton = document.getElementById('loadMore');
const limit = 5
let offset = 0;
const maxRecords = 20;

function loadPokemonItens(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>`    
            <li class="pokemon ${pokemon.type}">
                <span class="number"># ${pokemon.number}</span>
                <span class="name"> ${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
    `).join('')
        pokemonList.innerHTML += newHtml
        
    })
}

loadPokemonItens(offset,limit)

loadMore.addEventListener('click', () => {
    offset += limit
    const qtdRecordsPage = offset + limit

    if (qtdRecordsPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset,newLimit)
        loadButton.parentElement.removeChild(loadButton)
    } else {
        loadPokemonItens(offset,limit)
    }

    
})


// const pokemonItenms = document.querySelectorAll('.pokemon');
// pokemonItenms.forEach((item) => {
//     item.addEventListener('click', () =>{
//         const pokemonId = item.getAttribute('data-id');
//         showPokemonDetails(pokemonId);
//     })
// })

// function showPokemonDetails(pokemonId) {
//     pokeApi.getPokemons(0,maxRecords).then((pokemons)=>{
//         const pokemon = pokemons.find((p) => p.number === parseInt(pokemonId));
//         if(pokemon){
//             const detailsContainer = document.getElementById('pokemonDetails');
//             detailsContainer.innerHTML = `
//             <div class="details">
//                 h2>${pokemon.name}</h2>
//                     <p>#${pokemon.number}</p>
//                     <ol class="types">
//                         ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                     </ol>
//                     <img src="${pokemon.photo}" alt="${pokemon.name}">
//                 </div>`;
//         }
//         detailsContainer.style.display = 'block';
//         console.log("Clique detectado em:", item.getAttribute('data-id'));
//     })
// }






