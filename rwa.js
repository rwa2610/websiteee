var currentIndex = 0;
var currentPiece = 'KING';
var images = ["pics/kingdark.png", "pics/queencolour.png", "pics/bishopcolour.png", "pics/knightcolour.png", "pics/rookcolour.png", "pics/pawncolour.png"];
var blackImages = ["pics/kingcolour.png", "pics/queendark.png", "pics/bishopdark.png", "pics/knightdark.png", "pics/rookdark.png", "pics/pawndark.png"];
var descriptionsMain = [
    "The king can move in any direction, one square at a time. A king cannot move to a square that is under attack by the opponent. A player loses the match when the king is placed into checkmate, which would lead to an unavoidable capture on the opponent’s next turn.",
    "The queen moves in continuous diagonal and straight lines. Forward, backward and side-to-side.",
    "The bishop can move any number of squares diagonally matching its color of squares. Players begin the game with one bishop that can move on each color.",
    "Knights are the only pieces that jump off the board. Unlike other pieces, they are not blocked if there are pieces between them and their destination square. To make it easier to remember how a knight moves, think of an L. Two spaces in a direction forward, backward or side-to-side, and one space at a right turn.",
    "The rook, sometimes called the castle, can move any number of squares horizontally along its current row (rank) or column (file).",
    "Pawns move one square forward in a straight line. If a pawn has not yet been moved from the beginning, it may be moved two squares forward as a single move. Both squares must be empty. The only time a pawn may move diagonally (left/right) is when capturing an opponent’s piece. If a pawn reaches the opposite side of the board, it is promoted to a higher piece (except king). There is no limit to how many pawns can be promoted."
];

var chessboardIndex = 0;
var chessboardImages = ["pics/S.PNG","pics/w.png", "pics/S1.png", "pics/S2.png", "pics/S3.png", "pics/S4.png", "pics/S6.png", "pics/S7.png"];


var buttonTexts = ["SETUP",            
"Place the board where the bottom right corner is white for both players",
"Add the pawns to the board. They are placed on the second row.",
"Add the rooks to the board. They are placed in the corners.",
"Add the knights to the board. They are placed next to the bishops.",
"Add the bishops to the board. They are placed next to the queens.",
"Add the queens to the board. They are placed on their matching color square.",
"Finally, add the king to the board. It is placed on the remaining square(opposite colour).The board is now set up and ready for play."];

function showNextStep() {
var nextButton = document.querySelector('.next-button');
chessboardIndex = (chessboardIndex + 1) % buttonTexts.length;

nextButton.textContent = buttonTexts[chessboardIndex];

if (document.querySelector('main2').style.display !== 'none' && chessboardIndex < chessboardImages.length) {
var chessboardImageElement = document.getElementById('main-image-2');
var descriptionElement = document.getElementById('image-description');

chessboardImageElement.src = chessboardImages[chessboardIndex];

descriptionElement.textContent = chessboardDescriptionsMain2[chessboardIndex];
}
}




function showCheckInfo() {
    var winInfoElement = document.getElementById('win-info');
    winInfoElement.textContent = "A king is in check when an opponent's piece is in a position that can attack the king. A player must move their king out of check, block the check, or capture the attacking piece. A player cannot move their king into check.";

    var mainTextElement3 = document.getElementById('main-text-3');
    mainTextElement3.textContent = "CHECK";
    hideButtonsAndShowBodyText(showBackButton);
}

function showCheckmateInfo() {
    var winInfoElement = document.getElementById('win-info');
    winInfoElement.textContent = "The king is in a position to be captured ('in check') and there is no way to escape capture. The game ends.";
    var mainTextElement3 = document.getElementById('main-text-3');
    mainTextElement3.textContent = "CHECKMATE";
    hideButtonsAndShowBodyText(showBackButton);
}

function showStalemateInfo() {
    var winInfoElement = document.getElementById('win-info');
    winInfoElement.textContent = "The player whose turn it is to move has no legal moves and is not in check. The game ends in a draw.";
    var mainTextElement3 = document.getElementById('main-text-3');
    mainTextElement3.textContent = "STALEMATE";
    hideButtonsAndShowBodyText(showBackButton);
}

function hideButtonsAndShowBodyText(showBackButtonCallback) {
    var winButtons = document.querySelector('.win-buttons');
    var bodyText = document.getElementById('body-text');

    var backButton = showBackButtonCallback();
    bodyText.innerHTML = ''; 
    bodyText.appendChild(backButton);

    winButtons.style.display = 'none';
    bodyText.style.display = 'block';
    bodyText.classList.add('body-text-visible');
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent();
    updatePieceType();
    updateTitle();  
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent();
    updatePieceType();
    updateTitle();  
}

function updateTitle() {
    var mainTextElement = document.getElementById('main-text');
    document.title = "CHESS - " + mainTextElement.textContent.toUpperCase();
}

function updatePieceType() {
    switch (currentPiece) {
        case 'KING':
            currentPiece = 'QUEEN';
            break;
        case 'QUEEN':
            currentPiece = 'BISHOP';
            break;
        case 'BISHOP':
            currentPiece = 'KNIGHT';
            break;
        case 'KNIGHT':
            currentPiece = 'ROOK';
            break;
        case 'ROOK':
            currentPiece = 'PAWN';
            break;
        case 'PAWN':
            currentPiece = 'KING';
            break;
        default:
            break;
    }

    var mainTextElement = document.getElementById('main-text');
    mainTextElement.textContent = currentPiece;
}

function showBackButton() {
    var backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.classList.add('back-button');
    backButton.addEventListener('click', function () {
        document.querySelector('.win-buttons').style.display = 'block';
        document.getElementById('body-text').style.display = 'none';
        document.getElementById('body-text').classList.remove('body-text-visible');

        var winInfoElement = document.getElementById('win-info');
        winInfoElement.textContent = '';

        var mainTextElement3 = document.getElementById('main-text-3');
        mainTextElement3.textContent = '';
    });

    return backButton;
}

function updateContent() {
    var mainImageElement = document.getElementById('main-image');
    var descriptionElement = document.getElementById('image-description');

    mainImageElement.src = images[currentIndex];
    descriptionElement.textContent = descriptionsMain[currentIndex];
}

function updateChessboardImage() {
    var chessboardImageElement = document.getElementById('main-image-2');
    var descriptionElement = document.getElementById('image-description');

    chessboardImageElement.src = chessboardImages[chessboardIndex];

    descriptionElement.textContent = chessboardDescriptionsMain2[chessboardIndex];
}

function toggleBackgroundColor() {
    var buttonElement = document.querySelector('.color-toggle');
    var isBlackMode = buttonElement.classList.contains('clicked');

    var mainTextElement = document.getElementById('main-text');
    mainTextElement.textContent = currentPiece;
    mainTextElement.style.color = isBlackMode ? 'rgb(25, 110, 99)' : 'rgb(25, 110, 99)';

    buttonElement.textContent = isBlackMode ? 'Opponent' : 'Opponent';
    buttonElement.classList.toggle('clicked');

    var arrowButtons = document.querySelectorAll('.nav-button');
    arrowButtons.forEach(function (button) {
        button.style.backgroundColor = isBlackMode ? 'rgb(25, 110, 99)' : 'rgb(25, 110, 99)';
        button.style.color = isBlackMode ? 'rgb(231, 255, 233)' : 'rgb(231, 255, 233)'; 
    });

    var mainImageElement = document.getElementById('main-image');
    mainImageElement.src = isBlackMode ? blackImages[currentIndex] : images[currentIndex];

    var navButtons = document.querySelectorAll('.nav-link');
    navButtons.forEach(function (button) {
        button.classList.remove('clicked');
    });

    var winInfoElement = document.getElementById('win-info');
    var bodyTextElement = document.getElementById('body-text');
    var mainTextElement3 = document.getElementById('main-text-3');

    var textColor = isBlackMode ? 'rgb(58, 58, 58)' : 'rgb(164, 164, 164)';

    winInfoElement.style.color = textColor;
    bodyTextElement.style.color = textColor;
    mainTextElement3.style.color = textColor;
    function redirectToHomePage() {
window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function () {
var learnButton = document.getElementById('learnButton');
var kingSection = document.getElementById('main2');

learnButton.addEventListener('click', function () {
    window.scrollTo({
        top: kingSection.offsetTop,
        behavior: 'smooth'
    });
});
});}
