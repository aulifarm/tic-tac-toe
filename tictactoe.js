let xGoesFirst = true;

const topLeft = document.getElementById("square_0").querySelector("p");
const topMiddle = document.getElementById("square_1").querySelector("p");
const topRight = document.getElementById("square_2").querySelector("p");
const centerLeft = document.getElementById("square_3").querySelector("p");
const centerMiddle = document.getElementById("square_4").querySelector("p");
const centerRight = document.getElementById("square_5").querySelector("p");
const bottomLeft = document.getElementById("square_6").querySelector("p");
const bottomMiddle = document.getElementById("square_7").querySelector("p");
const bottomRight = document.getElementById("square_8").querySelector("p");

const board = document.getElementById("gameboard");
const emptyP = board.querySelectorAll("p");
for (const item of emptyP) {
    item.addEventListener("click", addPlayerMark);
}

function addPlayerMark(e) {
    const boxTarget = e.target;

    if (boxTarget.innerText !== "") {
        return;
    }

    boxTarget.classList.remove("cross");
    boxTarget.classList.remove("circle");

    if (xGoesFirst) {
        boxTarget.innerText = "X";
        boxTarget.classList.add("cross");
        xGoesFirst = false;
    } else {
        boxTarget.innerText = "O";
        boxTarget.classList.add("circle");
        xGoesFirst = true;
    }

    setTimeout(checkWinner, 100);
}

function checkWinner() {
    const topLeftText = topLeft.innerText;
    const topMiddleText = topMiddle.innerText;
    const topRightText = topRight.innerText;
    const centerLeftText = centerLeft.innerText;
    const centerMiddleText = centerMiddle.innerText;
    const centerRightText = centerRight.innerText;
    const bottomLeftText = bottomLeft.innerText;
    const bottomMiddleText = bottomMiddle.innerText;
    const bottomRightText = bottomRight.innerText;

    //vertical left
    if (topLeftText === centerLeftText && centerLeftText === bottomLeftText && topLeftText === bottomLeftText && topLeftText !== "") {
        announceWinner(topLeftText);
        return;
    }

    //vertical center
    if (topMiddleText === centerMiddleText && centerMiddleText === bottomMiddleText && topMiddleText === bottomMiddleText && topMiddleText !== "") {
        announceWinner(topMiddleText);
        return;
    }

    //vertical right
    if (topRightText === centerRightText && centerRightText === bottomRightText && topRightText === bottomRightText && topRightText !== "") {
        announceWinner(topRightText);
        return;
    }

    //horiztonal top
    if (topLeftText === topMiddleText && topMiddleText === topRightText && topLeftText === topRightText && topLeftText !== "") {
        announceWinner(topLeftText);
        return;
    }

    //horiztonal middle
    if (centerLeftText === centerMiddleText && centerMiddleText === centerRightText && centerLeftText === centerRightText && centerLeftText !== "") {
        announceWinner(centerLeftText);
        return;
    }

    //horiztonal bottom
    if (bottomLeftText === bottomMiddleText && bottomMiddleText === bottomRightText && bottomLeftText === bottomRightText && bottomLeftText !== "") {
        announceWinner(bottomLeftText);
        return;
    }

    //diagonal left
    if (topLeftText === centerMiddleText && centerMiddleText === bottomRightText && topLeftText === bottomRightText && topLeftText !== "") {
        announceWinner(topLeftText);
        return;
    }

    //diagonal right
    if (topRightText === centerMiddleText && centerMiddleText === bottomLeftText && topRightText === bottomLeftText && topRightText !== "") {
        announceWinner(topRightText);
        return;
    }

    checkAllCompleted();
}

function checkAllCompleted() {
    const topLeftText = topLeft.innerText;
    const topMiddleText = topMiddle.innerText;
    const topRightText = topRight.innerText;
    const centerLeftText = centerLeft.innerText;
    const centerMiddleText = centerMiddle.innerText;
    const centerRightText = centerRight.innerText;
    const bottomLeftText = bottomLeft.innerText;
    const bottomMiddleText = bottomMiddle.innerText;
    const bottomRightText = bottomRight.innerText;

    if (topLeftText !== "" &&
        topMiddleText !== "" &&
        topRightText !== "" &&
        centerLeftText !== "" &&
        centerMiddleText !== "" &&
        centerRightText !== "" &&
        bottomLeftText !== "" &&
        bottomMiddleText !== "" &&
        bottomRightText !== "") {
        catsGame();
    }
}

const announceWinner = (player) => {
    alert(player + " has won!");
    resetGame();
}

const catsGame = () => {
    alert("CATS GAME!");
    resetGame();
}

function resetGame() {
    topLeft.innerText = "";
    topMiddle.innerText = "";
    topRight.innerText = "";
    centerLeft.innerText = "";
    centerMiddle.innerText = "";
    centerRight.innerText = "";
    bottomLeft.innerText = "";
    bottomMiddle.innerText = "";
    bottomRight.innerText = "";

    topLeft.classList.remove("cross");
    topMiddle.classList.remove("cross");
    topRight.classList.remove("cross");
    centerLeft.classList.remove("cross");
    centerMiddle.classList.remove("cross");
    centerRight.classList.remove("cross");
    bottomLeft.classList.remove("cross");
    bottomMiddle.classList.remove("cross");
    bottomRight.classList.remove("cross");

    topLeft.classList.remove("circle");
    topMiddle.classList.remove("circle");
    topRight.classList.remove("circle");
    centerLeft.classList.remove("circle");
    centerMiddle.classList.remove("circle");
    centerRight.classList.remove("circle");
    bottomLeft.classList.remove("circle");
    bottomMiddle.classList.remove("circle");
    bottomRight.classList.remove("circle");

    xGoesFirst = true;
}