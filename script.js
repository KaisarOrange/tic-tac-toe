
const startBtn = document.querySelector(".start");
const cell = document.querySelectorAll(".space");
const title = document.querySelector(".title");
gameState = "over";

const game = (() => {

let move = 9;
let turn='o';
let playerOneMove = [];  
let playerTwoMove = []; 


cell.forEach((btn,index) => btn.addEventListener('click', (e)=>{
    if(gameState === "start" && move >= 0 && e.target.textContent ===''){
        
   // let index = parseInt(e.target.id) ;
    if(turn === "o"){
        playerOneMove.push(index);
        winner(playerOneMove);
        e.target.textContent = "o";
        turn = 'x';
    }else{
        playerTwoMove.push(index);
        winner(playerTwoMove);
        e.target.textContent = "x";
        turn = 'o';
    }
    
    move = move -1;
    }
    console.log(move);      
}));

const winner = (playerMove) => {
    const winCondition = [[0,1,2], [3,4,5],[6,7,8],[0,4,8],[2,4,6],
    [0,3,6],[2,5,8],[3,6,9]];

    winCondition.forEach((item)=>{
     if( playerMove.includes(item[0])  &&  playerMove.includes(item[1]) &&  playerMove.includes(item[2])){
        title.textContent = "Selamat, pemain "+ turn +" menang!";
        gameState = "over";
     }
    })};
const cleanBoard = () =>{
    cell.forEach(btn => btn.textContent = '');
    title.textContent = "TIC-TAC-TOE!";
};

startBtn.addEventListener('click', ()=>{
    
    gameState = "start";
    turn = "o";
    move = 9;
    cleanBoard();
    
    playerOneMove = [];
    playerTwoMove = [];
});
return {winner, cleanBoard,move};
})(); 


