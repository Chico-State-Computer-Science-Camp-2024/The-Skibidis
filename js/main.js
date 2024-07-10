//orlando's
let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = "1250";
canvas.height = "580";
canvas.style.background = "green";

context.fillStyle = "gray";
context.fillRect(0, 500, 1500, 100);

/*const map = [[1, 2, 3],
             [4, 5 ,6], 
             [7, 8, 9]];
             ['*', 0, '#']

/*map[0][0] = 'X';
map[0][1] = 'O';
map[0][2] = 'X';

map[1][0] = 'O';
map[1][1] = 'X';
map[1][2] = 'O';

map[2][0] = 'X';
map[2][1] = 'O';
map[2][2] = 'X';

for(let row of map){
    const rowString = row.join(' ');
    console.log(rowString);
//}*/
//Angel's
const Instructions = document.getElementById("Instructions"); 
const moveAmount = 10; 
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp": 
                 y -= moveAmount;
                 break;
             case "ArrowDown": 
                 y += moveAmount;
                break;
            case "ArrowLeft": 
                 x -= moveAmount;
                 break;
             case "ArrowRight": 
                 x += moveAmount;
                 break;
        }
        
        Instructions.style.top = "${y}px";
        Instructions.style.left = "${x}px";
    }
});

document.addEventListener("keyup", event => {
    console.log("Key up = ${event.key}");
});
 

