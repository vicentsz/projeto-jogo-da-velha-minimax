import Board from './classes/Board.js';
import Player from './classes/Player.js';





const casas = document.getElementsByTagName('input');
const b_reiniciar = document.getElementById('reiniciar');
const label_jogador = document.getElementById('jogador');
const label_indica = document.getElementById('indicador');
const label_winner = document.getElementById('winner');


const fundo_verde = '#40F99B'
const jogada_cor = '#bc5e00'
const cor_branca = '#ffffff';
const cor_azul = '#262730'

var eu = '';
var ia = '';


var jogador = '_';
var vencedor = '_';
var finish;
var board = new Board();
var player = new Player(-1);
var melhor_posicao = 0;



board.state.forEach((cell, index) => {
	casas[index].addEventListener('click', (event) => {

		if ((event.target.value == '_') && (vitoria() != false)) {
			event.target.value = jogador.toUpperCase();
			event.target.style.color = jogada_cor;

			board.insert(jogador, index)
			trocarJogador();
			if (ia == 'x') {
				melhor_posicao = player.getBestMove(board, true);
			} else {
				melhor_posicao = player.getBestMove(board, false);
			}
			if (melhor_posicao != 0 || vitoria() != false) {
				casas[melhor_posicao].value = jogador.toUpperCase();
				casas[melhor_posicao].innerText = jogador.toUpperCase();
				casas[melhor_posicao].style.color = jogada_cor;
				board.insert(jogador, melhor_posicao);
			}

			vencedor = vitoria();
			trocarJogador();

		}
	});
})


b_reiniciar.addEventListener('click', (event) => {
	for (var i = 0; i < 9; i++) {
		casas[i].value = '_';
		casas[i].style.color = 'white';
		casas[i].style.backgroundColor = 'white';
	}
	indicador.innerText = 'Jogador atual: ';
	label_winner.innerText = '';
	vencedor = '_';
	history.go(0);
	sortearJogador();
});


var sortearJogador = function () {
	if (Math.floor(Math.random() * 2) == 0) {
		jogador = "o";
		eu = jogador;
		ia = 'x';
		label_jogador.innerText = "O";
		label_jogador.style.color = cor_branca;
		label_indica.style.color = cor_branca;
	} else {
		jogador = "x";
		eu = jogador;
		ia = 'o';
		label_jogador.innerText = "X";
		label_jogador.style.color = cor_azul;
		label_indica.style.color = cor_azul;
	}
}

sortearJogador();


var trocarJogador = function () {
	if (jogador == 'x') {
		jogador = 'o';
		label_jogador.innerText = 'O';
		label_jogador.style.color = cor_branca;
		indicador.style.color = cor_branca;

	} else {
		jogador = 'x';
		label_jogador.innerText = 'X';
		label_jogador.style.color = cor_azul;
		indicador.style.color = cor_azul;
	}
}

var empate = function () {
	var contagem = 0;
	for (var i = 0; i < 9; i++) {
		if (casas[i].value != '_') {
			contagem++;
		}
	}
	if (contagem == 9) {
		label_winner.innerText = "Deu empate!";
		return true;
	}
	return false;

}


var vitoria = function () {
	if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != '_') {
		casas[0].style.backgroundColor = fundo_verde;
		casas[1].style.backgroundColor = fundo_verde;
		casas[2].style.backgroundColor = fundo_verde;

		label_winner.innerText = 'Parabéns ' + casas[0].value + '!';
		return casas[0].value;

	} else if ((casas[3].value == casas[4].value) && (casas[4].value == casas[5].value) && casas[3].value != '_') {
		casas[3].style.backgroundColor = fundo_verde;
		casas[4].style.backgroundColor = fundo_verde;
		casas[5].style.backgroundColor = fundo_verde;

		label_winner.innerText = 'Parabéns ' + casas[3].value + '!';
		return casas[3].value;

	} else if ((casas[6].value == casas[7].value) && (casas[7].value == casas[8].value) && casas[6].value != '_') {
		casas[6].style.backgroundColor = fundo_verde;
		casas[7].style.backgroundColor = fundo_verde;
		casas[8].style.backgroundColor = fundo_verde;

		label_winner.innerText = 'Parabéns ' + casas[6].value + '!';
		return casas[6].value;

	} else if ((casas[0].value == casas[3].value) && (casas[3].value == casas[6].value) && casas[0].value != '_') {
		casas[0].style.backgroundColor = fundo_verde;
		casas[3].style.backgroundColor = fundo_verde;
		casas[6].style.backgroundColor = fundo_verde;

		label_winner.innerText = 'Parabéns ' + casas[0].value + '!';
		return casas[0].value;

	} else if ((casas[1].value == casas[4].value) && (casas[4].value == casas[7].value) && casas[1].value != '_') {
		casas[1].style.backgroundColor = fundo_verde;
		casas[4].style.backgroundColor = fundo_verde;
		casas[7].style.backgroundColor = fundo_verde;

		label_winner.innerText = 'Parabéns ' + casas[1].value + '!';
		return casas[1].value;

	} else if ((casas[2].value == casas[5].value) & (casas[5].value == casas[8].value) && casas[2].value != '_') {
		casas[2].style.backgroundColor = fundo_verde;
		casas[5].style.backgroundColor = fundo_verde;
		casas[8].style.backgroundColor = fundo_verde;

		label_winner.innerText = 'Parabéns ' + casas[2].value + '!';
		return casas[2].value;

	} else if ((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && casas[0].value != '_') {
		casas[0].style.backgroundColor = fundo_verde;
		casas[4].style.backgroundColor = fundo_verde;
		casas[8].style.backgroundColor = fundo_verde;

		label_winner.innerText = 'Parabéns ' + casas[0].value + '!';
		return casas[0].value;

	} else if ((casas[2].value == casas[4].value) && (casas[4].value == casas[6].value) && casas[2].value != '_') {
		casas[2].style.backgroundColor = fundo_verde;
		casas[4].style.backgroundColor = fundo_verde;
		casas[6].style.backgroundColor = fundo_verde;

		label_winner.innerText = 'Parabéns ' + casas[2].value + '!';
		return casas[2].value;
	}

	if (empate()) {
		return false;
	}

	return '_';
}