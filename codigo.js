function selecionarVersao(element) {
    // Remove a classe de seleção de todas as versões
    const todasVersoes = document.querySelectorAll('.versao');
    todasVersoes.forEach(function(versao) {
        versao.classList.remove('versao-selecionada');
    });

    // Adiciona a classe de seleção ao elemento clicado
    element.classList.add('versao-selecionada');

    // Muda a imagem para a correspondente à versão selecionada
    const novaImagem = element.getAttribute('src');
    document.getElementById('versao-foto').src = novaImagem;
}