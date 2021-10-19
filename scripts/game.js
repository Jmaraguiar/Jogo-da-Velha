// iniciando variáveis
let board = ['','','','','','','','','']
let playerTurn = 0;
let gameOver = false;

let mark = ['o','x']




function move(pos){

    if(gameOver){
        return;
    }

    if(board[pos] == ''){

        board[pos] = mark[playerTurn]

        gameOver = winner();

        if(gameOver == false){
            if(playerTurn == 0){
                playerTurn = 1;
            }
            else{
                playerTurn = 0;
            }
        }
    }

    return gameOver;
}

function winner(){

    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]

    for(i=0 ; i < winStates.length ; i++){
        let seq = winStates[i]

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] &&
           board[pos1] == board[pos3] &&
           board[pos1] != ''){

                return true;
                
            }

    }

    return false;
}