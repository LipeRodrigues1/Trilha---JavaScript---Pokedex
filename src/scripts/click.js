function mostrarConteudo(pokemonList) {
    // Esconde todos os conteúdos
    var conteudos = document.querySelectorAll('pokemons');
    conteudos.forEach(function(conteudo) {
        conteudo.style.display = 'none';
    });

    // Exibe o conteúdo correspondente ao ID clicado
    var conteudoSelecionado = document.getElementById(pokemonList);
    if (conteudoSelecionado) {
        conteudoSelecionado.style.display = 'block';
    }
}