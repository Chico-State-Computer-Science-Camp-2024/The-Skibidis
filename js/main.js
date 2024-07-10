//const variableName = document.getElementById("variableName"); 
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
        
        //variableName.style.top = "${y}px";
        //variableName.style.left = "${x}px";
    }
});

document.addEventListener("keyup", event => {
    console.log("Key up = ${event.key}");
});
 