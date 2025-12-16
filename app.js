let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector("#resetBtn");
let newgamebtn = document.querySelector("#New-btn");   
let Msgcontainer = document.querySelector(".Msg-Container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0; // ✅ reset move count
    enableBoxes();
    Msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO){
            box.innerText ="O";
            box.style.color = "red";
            turnO = false;
        }
        else{
            box.innerText="X";
            box.style.color = "blue";
            turnO = true;
        }

        box.disabled = true;
        count++;
        
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {   // ✅ use isWinner instead of winner
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = "😐 Game is a Draw";
    Msgcontainer.classList.remove("hide");
    disableBoxes();   // ✅ corrected function name
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.style.pointerEvents = "auto";
        box.innerText = "";
    }
};

const showWinner = (winner) => {
   msg.innerText = `🎉 Congratulations, Winner is ${winner}`;
   Msgcontainer.classList.remove("hide");
   disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;   // ✅ winner found
            }
        }
    }
    return false;   // ✅ no winner yet
};

newgamebtn.addEventListener("click", resetGame);   
resetBtn.addEventListener("click", resetGame);
