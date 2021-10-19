let music = document.querySelector('#jazz')
music.volume = 0.3;

document.addEventListener('DOMContentLoaded', () => {

    let sector = document.querySelectorAll(".sector");

    sector.forEach((square) => {
        square.addEventListener('click',handleClick);
    })
})

function handleClick(event){

    let square = event.target;
    let pos = square.id;

    if (move(pos)) {
        setTimeout(() => {
            alert("O Jogo acabou - vencedor: jogador " + (playerTurn + 1))
        },10)
    };
    updateSectors();
}

function updateSectors(){

    let sector = document.querySelectorAll(".sector");

    sector.forEach((square) => {
        let pos = square.id;
        let mark = board[pos];

        if( mark != ''){
            square.innerHTML = `<div class ='${mark}'></div>`
        } else{
            square.innerHTML=''
        }
    })

}

function restart (){
    board = ['','','','','','','','','']
    playerTurn = 0;
    gameOver = false;
    updateSectors()
}