let listadeNumeroSorteado= [];
let numeroLimite= 10;
let numeroSecreto= gerarNumeroAleatorio();
let tentativas= 1;

function exibirTextoNaTela(tag, texto){
    let campo= document.querySelector(tag);
    campo.innerHTML= texto;
}
function exibirMensagemInicial(){
//Chamando a função para exibir o texto na tela
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Digite um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){//criando a função para verificar o chute do usuário
    let chute= document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas= `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor!');
    } else  {
        exibirTextoNaTela('p', 'O número secreto é maior!');
    } 
    tentativas++;
    limparCampo();
}
} 

function gerarNumeroAleatorio(){
   let numeroEscolhido=  parseInt(Math.random() * 10 + 1);
   let quantidadeDeElementosNaLista= listadeNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == 10){
        listadeNumeroSorteado= [];
    }

    if (listadeNumeroSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listadeNumeroSorteado.push(numeroEscolhido);
    console.log(listadeNumeroSorteado);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function ReiniciarJogo(){
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas= 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}