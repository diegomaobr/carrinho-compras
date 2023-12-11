let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar os valores do formulario, nome, qtd e valor
    let produto = document.getElementById('produto').value;
    //split funcao do java script que devolve um array para remover numero
    let nomeProduto = produto.split('-')[0];
    //split funcao, localiza o R$ e logo apos a posicao 1
    let valorUnitario = produto.split('R$')[1];
    let qtdProduto = document.getElementById('quantidade').value; //o value recupera o valor no html   
    //calcular o preco
    let preco = qtdProduto * valorUnitario;
    //adicionar o produto no carrinho
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${qtdProduto}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span></section>`;
    //atualizar o valor total da compra
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    //textcontent grava no html
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}