let numeroSecretoNaLista = [];
let origemDoNumero = 20;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do god of war');
    exibirTextoNaTela('p', 'kratos esta no modo serio, escolha um numero de 1 a 20 o mais rapido possivel');
}
exibirMensagemInicial()


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acerto miseravi');
        exibirTextoNaTela('p', 'ja tomou o suco de laranja');
        let mensagemTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagem = `ja tomou o suco de laranja com ${tentativas} ${mensagemTentativa}`;
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'esse é grande demais ');
        } else {
            exibirTextoNaTela('p', 'numero muito pequeno');
        }
    }   tentativas++;
        limparCampo();    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * origemDoNumero + 1);
    let rebobinarNumeros = numeroSecretoNaLista.length;

    if (rebobinarNumeros == origemDoNumero) {
        numeroSecretoNaLista = [];
    }
    if (numeroSecretoNaLista.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numeroSecretoNaLista.push(numeroEscolhido);
        console.log(numeroSecretoNaLista);
        return numeroEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}