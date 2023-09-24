<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Jogo da Velha</title>
</head>
<body>
    <h1>Jogo da Velha</h1>
    <!-- Mensagem inicial -->
    <p id="message"></p>

    <div class="board">
        <div class="cell" onclick="makeMove(0)"></div>
        <div class="cell" onclick="makeMove(1)"></div>
        <div class="cell" onclick="makeMove(2)"></div>
        <div class="cell" onclick="makeMove(3)"></div>
        <div class="cell" onclick="makeMove(4)"></div>
        <div class="cell" onclick="makeMove(5)"></div>
        <div class="cell" onclick="makeMove(6)"></div>
        <div class="cell" onclick="makeMove(7)"></div>
        <div class="cell" onclick="makeMove(8)"></div>
    </div>
    <button onclick="resetGame()">Reiniciar</button>
    <script src="script.js"></script>
    <div class="social-links">
        <p>Siga-me nas redes sociais:</p>
        <a href="https://www.linkedin.com/in/fabr%C3%ADcia-rafaella-de-souza/" target="_blank">
            <img src="./img/linkedin.png" alt="LinkedIn">
        </a>
        <a href="https://www.instagram.com/rafa_vitroda/" target="_blank">
            <img src="./img/instagram.png" alt="Instagram">
        </a>
    </div>
    

</body>
</html>
