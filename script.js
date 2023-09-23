let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

// Solicita os nomes dos jogadores
const playerXName = prompt("Nome do Jogador X:");
const playerOName = prompt("Nome do Jogador O:");

// Exibe uma mensagem de saudação
const messageElement = document.getElementById('message');
messageElement.textContent = `Bem-vindos, ${playerXName} (X) e ${playerOName} (O)! O jogo vai começar.`;


// Chame esta função no início para exibir a mensagem inicial
updatePlayerMessage();

// Resto do código permanece o mesmo




function makeMove(index) {
    if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        const cell = document.getElementsByClassName('cell')[index];
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase());
        cell.style.backgroundColor = ''; // Remover a cor de fundo cinza
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner(); // Verificar se há um vencedor após cada jogada
    }
}

function checkWinner() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            const winnerName = gameBoard[a] === 'X' ? playerXName : playerOName;
            document.getElementById('message').textContent = `Parabéns, ${winnerName} venceu!`;
            return true;
        }
    }

    if (!gameBoard.includes('')) {
        document.getElementById('message').textContent = 'Empate! O jogo acabou.';
        return true;
    }

    return false;
}




// Resto do código permanece o mesmo

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = '';
        cell.classList.remove('winner'); // Remover a classe "winner" das células
    }
}
