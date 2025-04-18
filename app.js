console.log("welcome to Tic Tac Toe");
let bgm=new Audio("super-mario-bros-4293.mp3");
let gameoveraudio=new Audio("mixkit-video-game-win-2016.wav");
let sound=new Audio("mixkit-arcade-game-jump-coin-216.wav");
let turn="X";
let gameover=false;

//function to change the turn
function changeTurn(){
    return turn==="X"?"0":"X"
    
}

//function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2,6.5,6.5,0],
        [3,4,5,6.5,19.5,0],
        [6,7,8,6.5,32.5,0],
        [0,3,6,-6.5,19.5,90],
        [1,4,7,6.5,19.5,90],
        [2,5,8,19.5,19.5,90],
        [0,4,8,6.5,19.5,45],
        [2,4,6,6.5,19.5,-45]

    ];
    wins.forEach((element)=>{
        if((boxtext[element[0]].innerText===boxtext[element[1]].innerText) && (boxtext[element[1]].innerText===boxtext[element[2]].innerText) && (boxtext[element[0]].innerText!=""))
        {
            document.querySelector(".info").innerText=boxtext[element[0]].innerText+" Won";
        gameover=true;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
        document.querySelector(".line").style.transform=`translate(${element[3]}vw,${element[4]}vw) rotate(${element[5]}deg)`;
        document.querySelector(".line").style.width="26vw";
        document.querySelector(".line").style.height="5px"
        gameoveraudio.play();
        }
    })
}

//game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            sound.play();
            
            turn=changeTurn();
            
            checkWin();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
           
        }
    })
})

reset.addEventListener("click",()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    gameover=false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    document.querySelector(".line").style.width="0vw";
        document.querySelector(".line").style.height="0px";
       
})