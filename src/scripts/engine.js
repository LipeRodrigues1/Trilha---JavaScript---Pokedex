const pokemonList = document.getElementById('pokemonList');
const loadButton = document.getElementById('loadMore');
const limit = 5
let offset = 0;
const maxRecords = 11;

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









