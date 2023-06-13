let inputDirection={x:0,y:0}
const foodSound=new Audio("eatmusic.wav")
const gameOverSound=new Audio("failmusic.mp3")
const movesound=new Audio("move.wav")
const musicSound=new Audio("backgroundplay.mp3")
let speed=19
let score=0
let lastPaintTime=0
let snakeArray=[
    {x:13,y:15}]
food={x:6,y:7}

function main(ctime){
    window.requestAnimationFrame(main)
    console.log(ctime)
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine()
   

}

function iscollide(snake){
   //bump your snake
   for(let i=1;i<snakeArray.length;i++){
    if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
        return true
    }
    
   }
   if(snake[0].x>=18||snake[0].x<=0 && snake[0].y>=18||snake[0].y<=0){
    return true
   }
}

function gameEngine(){
    
    if(iscollide(snakeArray))
    gameOverSound.play();
    musicSound.pause();
    inputDirection={x:0,y:0}
   alert("GAME OVER!press anykey to play again.")
    snakeArray=[ {x:13,y:15}]
    musicSound.play();
    score=0;
}
//increment of snake after eating food
if(snakeArray[0].y===food.y && snakeArray[0].x===food.x){
    foodSound.play();
    snakeArray.unshift({x:snakeArray[0].x+inputDirection.x,y:snakeArray[0].y+inputDirection.y})
    let a= 2;
    let b= 16;
        food={x:Math.round(a + (b-a)*Math.random()),y:Math.round(a + (b-a)*Math.random())}
}

//moving snake
    for(let i=snakeArray.length-2;i>=0;i--){
      
        snakeArray[i+1]={...snakeArray[i]};
    }
    snakeArray[0].x +=inputDirection.x;
    snakeArray[0].y +=inputDirection.y;



    board.innerhtml=""
    snakeArray.forEach((e,index)=>{
        snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        /*snakeElement.classList.add('snake')*/
        if(index===0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement)

    })
    foodElement=document.createElement('div')
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement)

    
























window.requestAnimationFrame(main)
window.addEventListener('keydown',e=>{
    inputDirection={x:0,y:1}
    movesound.play()
    switch(e.key){
        case"ArrowUp":
        console.log("ArrowUp")
        inputDirection.x=0;
        inputDirection.y=-1;
        break;
        case"ArrowDown":
        console.log("ArrowDown")
        inputDirection.x=0;
        inputDirection.y=1;
        break;
        case"ArrowLeft":
        console.log("ArrowLeft")
        inputDirection.x=-1;
        inputDirection.y=0;
        break;
        case"ArrowRight":
        console.log("ArrowRight")
        inputDirection.x=1;
        inputDirection.y=0;
        break;
    }
})
