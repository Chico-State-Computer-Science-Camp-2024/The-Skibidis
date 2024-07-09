let frog;
let car;
let log;

function preload (){
    img = loadImage('./images/skibidi.png');
}
function setup(){
    createCanvas(500, 500);
    xPos = 0;
    yPos = 0;
}
function draw(){
    line(4, 4, 4, 1000);
}














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
}