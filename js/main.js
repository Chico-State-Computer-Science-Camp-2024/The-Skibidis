// //orlando's
// let canvas = document.getElementById("canvas");

// let context = canvas.getContext("2d");

// var window_height = window.innerHeight;
// var window_width = window.innerWidth;

// canvas.width = "windowWidth";
// canvas.height = "580";
// canvas.style.background = "green";

// context.fillStyle = "gray";
// context.fillRect(0, 500, 1500, 100);

// /*const map = [[1, 2, 3],
//              [4, 5 ,6], 
//              [7, 8, 9]];
//              ['*', 0, '#']

// /*map[0][0] = 'X';
// map[0][1] = 'O';
// map[0][2] = 'X';

// map[1][0] = 'O';
// map[1][1] = 'X';
// map[1][2] = 'O';

// map[2][0] = 'X';
// map[2][1] = 'O';
// map[2][2] = 'X';

// for(let row of map){
//     const rowString = row.join(' ');
//     console.log(rowString);
// //}*/
//Angel's


let sprite;
let spriteW = 100;
let spriteH = 100;
let spriteY = 0;
let spriteX = 0;
let enemyX_1 = 200;
let enemyY_1 = 350;
let distance;

let window_height = window.innerHeight;
let window_width = window.innerWidth;

let spriteY = 0;
let spriteX = 0;

function preload () {
    sprite  = loadImage("./images/skibidi.png");
}
 
function setup () {
    createCanvas(window_width-30, window_height-195);
    noStroke();

}

function draw () {
    // distance = spriteX - enemyX_1;
    background("green");
    image(sprite, spriteX, spriteY, spriteW, spriteH);
    rectMode(CENTER);
    rect(enemyX_1, enemyY_1, 100, 100);
    if(spriteX+spriteW > enemyX_1-50 && spriteX < enemyX_1+50 & spriteY+spriteH > enemyY_1-50 && spriteY < enemyY_1+50){
        spriteX = 0;
        spriteY = 0;
    }
    // if (distance < 100){ 
    //     spriteX = 0
    //     spriteY = 0
    // }
}


function keyPressed () {
    if(keyCode === DOWN_ARROW){
        spriteY += Math.floor(window.innerHeight/7);
    }
    if(keyCode === UP_ARROW) {
        spriteY -=  Math.floor(window.innerHeight/7);
    }
    if(keyCode === RIGHT_ARROW) {
        spriteX +=  Math.floor(window.innerWidth/12);
    }   
    if(keyCode === LEFT_ARROW) {
        spriteX -=  Math.floor(window.innerWidth/12);

    }
    
}


