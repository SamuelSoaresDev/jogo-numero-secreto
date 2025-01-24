let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let jogadas = 4;

reiniciarJogo();

function nivel() {
  var dificuldade = prompt(
    "Escolha a dificuldade do jogo\nDigite o número referente à dificuldade: \n1 - Fácil\n2 - Médio\n3 - Difícil"
  );
  if (dificuldade == 1) {
    numeroLimite = 10;
    jogadas = 5;
    alert(' Escolheu Facil\n Você tem 5 jogadas para descobrir o numero secreto. ')
    exibirMensagemInicial();

  } if (dificuldade == 2) {
    numeroLimite = 50;
    jogadas = 8;
    alert(' Escolheu Normal\nVocê tem 8 jogadas para descobrir o numero secreto. ')
    exibirMensagemInicial();

  } if (dificuldade == 3) {
    numeroLimite = 100;
    jogadas = 10;
    alert(' Escolheu Dificil\nVocê tem 10 jogadas para descobrir o numero secreto. ')
    exibirMensagemInicial();

  }
}
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;

}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numeroLimite);

}
exibirMensagemInicial();


function verificarChute() {

  let chute = document.getElementById('numero').value;

  if (chute == numeroSecreto) {


    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('chutar').setAttribute('disabled', 'true');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', '0 número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;

    if (tentativas > jogadas) {
      exibirTextoNaTela('h1', 'Game Over');
      exibirTextoNaTela('p', 'Você Atingiu seu limete de jogadas');
      document.getElementById('reiniciar').removeAttribute('disabled');
      document.getElementById('chutar').setAttribute('disabled', 'true');
      limparCampo();
    }
    limparCampo();

  }

}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
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
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
  document.getElementById('chutar').removeAttribute('disabled');
  nivel();
}

