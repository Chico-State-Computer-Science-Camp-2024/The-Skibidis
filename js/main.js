let sprite;
let spriteW = 100;
let spriteH = 100;
let spriteY = 0;
let spriteX = 0;
let enemyX_1 = 200;
let enemyY_1 = 350;
let enemyX_2 = 600;
let enemyY_2 = 250;
let enemyX_3 = 1000;
let enemyY_3 = 100;
let enemyY_Speed1 = 8;
let enemyY_Speed2 = 9;
let enemyY_Speed3 = 10;
let gameState = 'playing';

let window_height = window.innerHeight;
let window_width = window.innerWidth;



function preload () {
    sprite  = loadImage("./images/skibidi.png");
    pic = loadImage("./images/speakerman.jpg");
    photo = loadImage("./images/tv.jpg");
    picture = loadImage("./images/camerman.jpg");
}
 
function setup () {
    createCanvas(window_width-30, window_height-195);
    noStroke();

}

function draw () {
    if(gameState === 'playing'){
    background("rgb(60, 74, 51)");
    image(sprite, spriteX, spriteY, spriteW, spriteH);
    rectMode(CENTER);
    image(pic, enemyX_1, enemyY_1, 100, 100);
    image(photo, enemyX_2, enemyY_2, 125, 125);
    image(picture, enemyX_3, enemyY_3, 150, 150);

    if(spriteX+spriteW > enemyX_1 + 100 && spriteX < enemyX_1+100 && spriteY+spriteH > enemyY_1 && spriteY < enemyY_1+100){
        spriteX = 0;
        spriteY = 0;
    }
    if(spriteX+spriteW > enemyX_2 + 125 && spriteX < enemyX_2+125 && spriteY+spriteH > enemyY_2 && spriteY < enemyY_2+125){
        spriteX = 0;
        spriteY = 0;
    }
    if(spriteX+spriteW > enemyX_3 + 150 && spriteX < enemyX_3+150 && spriteY+spriteH > enemyY_3 && spriteY < enemyY_2+150){
        spriteX = 0;
        spriteY = 0;
    }

    enemyY_1 += enemyY_Speed1;
    if (enemyY_1 > window_height-100 || enemyY_1 < 0) {
    enemyY_Speed1 = enemyY_Speed1 * -1;
    }

    enemyY_2 -= enemyY_Speed2;
    if (enemyY_2 > window_height-125 || enemyY_2 < 0) {
    enemyY_Speed2 = enemyY_Speed2 * -1;
    }
    enemyY_3 += enemyY_Speed3;
    if (enemyY_3 > window_height-150 || enemyY_3 < 0) {
    enemyY_Speed3 = enemyY_Speed3 * -1;
    }

    if (playerWins()) {
        gameState = 'win';
    }


}else if (gameState === 'win'){ 
    background(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('You Win', window_width/2, innerHeight/2);
}
}
function playerWins() {
    return spriteX >= 1200;
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
