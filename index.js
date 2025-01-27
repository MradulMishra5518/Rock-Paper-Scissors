let pMove;
let cMove;
let cScore=0;
let pScore=0;
let rock=document.querySelector('#rock');
let paper=document.querySelector('#paper');
let scissor=document.querySelector('#scissor');
let ps=document.querySelector('#player-score');
let cs=document.querySelector('#comp-score');
const result=document.getElementById('res');
// console.log(rock,paper,scissor);
// function r(){
//     pMove=1;
//     cMove=Math.floor(Math.random()*3)+1;
//     res;
// }
// function p(){
//     pMove=2;
//     cMove=Math.floor(Math.random()*3)+1;
//     res;
// }
// function s(){
//     pMove=3;
//     cMove=Math.floor(Math.random()*3)+1;
//     res;
// }
const res = (pMove,cMove) => {
    if (pMove === cMove) {
        result.innerText = 'It\'s a Draw';
        result.style.backgroundColor='#060270'
        // console.log('draw');
    } else if ((cMove - (pMove % 3)) === 1) {
        cScore++;
        cs.innerHTML = `Comp : ${cScore}`;
        result.innerText = 'Computer Wins';
        result.style.backgroundColor='red';
        // console.log('comp');
    } else {
        pScore++;
        ps.innerHTML = `Player : ${pScore}`;
        result.innerText = 'Player Wins';
        result.style.backgroundColor='green';
        // console.log('player');
    }
}

rock.addEventListener('click', () => {
    pMove=1;
    cMove=Math.floor(Math.random()*3)+1;
    res(pMove,cMove);
});
paper.addEventListener('click',()=>{
    pMove=2;
    cMove=Math.floor(Math.random()*3)+1;
    res(pMove,cMove);
});
scissor.addEventListener('click',()=>{
    pMove=3;
    cMove=Math.floor(Math.random()*3)+1;
    res(pMove,cMove);
});

