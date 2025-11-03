let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector(".reset");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#newGameBtn")

let turn0 = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgCont.classList.add("hide");
  count = 0;
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const gameDraw = () => {
    msgCont.classList.remove("hide");
    msg.innerText = "Game Draw!!"
    disableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      //turn 0
      box.innerText = "0";
      turn0 = false;
    } else {
        //turn X
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (!isWinner && count === 9) {
        gameDraw();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;

    if (post1Val != "" && post2Val != "" && post3Val != "") {
      if (post1Val === post2Val && post2Val === post3Val) {
        showWinner(post1Val);
        return true;
      }
    }
  }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
};

const newGame = () => {
  turn0 = true;
  enableBoxes();
  msgCont.classList.add("hide");
  count = 0;
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);