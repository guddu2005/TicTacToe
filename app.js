const boxes = document.querySelectorAll('.box');
let current = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let index = [0,0,0,0,0,0,0,0,0];
boxes.forEach((box, idx) => {
    function initialize(){
        if (index[idx] === 0) { 
            if (current) {
                box.innerText = 'O';
                current = false;
                index[idx] = 1; 
                box.style.color = 'white'; 
                box.style.fontSize = '48px';
                box.style.textAlign = 'center';

            } else {
                box.innerText = 'X';
                current = true;
                index[idx] = 1; 
                box.style.color = 'white'; 
                box.style.fontSize = '48px';
                box.style.textAlign = 'center';
            }
            
            checkWinner();
        }
    }

    box.addEventListener( 'click' , initialize);
});
const winner = document.createElement('p');
const win = document.getElementById('win');
win.appendChild(winner);
win.addEventListener( 'click' , restart);
let game = true;
if( game){
    win.style.display ="none"; 
}

 
const checkWinner = () =>{
     for ( let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1val !== "" && pos2val !== "" && pos3Val !== "" ){
            if( pos1val == pos2val&&pos1val == pos3Val ){
                if(pos1val === 'X'){
                    // alert('Winner is X');
                    game = false;
                    win.style.display= "block";
                    winner.innerText = `Winner is ${pos1val}`;
                }else{
                    // alert('Winner is O')
                    game = false;
                    win.style.display= "block";
                    winner.innerText = `Winner is ${pos1val}`;
                }
            }
        }
     }
}

function restart(){
   boxes.forEach( box =>{
    box.innerText ="";
   })
   index = [0,0,0,0,0,0,0,0,0];
   current = true;
   game = true;
   win.style.display = 'none';
   winner.innerText = ""; 
}
restart();

