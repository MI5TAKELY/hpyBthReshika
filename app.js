let buttons=document.querySelectorAll('button');
let win=document.querySelector('h2');
let yourPick=document.querySelector('.yourPick');
let computerPick=document.querySelector('.computerPick');
let img=document.querySelector('.imag');

var audio = new Audio("audio_file.mp3");

buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        let randNum=Math.floor(Math.random()*3);
        console.log(index);
        console.log(randNum);
        if(index!=randNum){
            checkWInner(button,index,randNum);
        }
        else{
            win.style.color="purple";
            win.innerText="It Seems to be a Draw match";
            win.classList.remove("hide");
            displayPick(index,randNum);
        }
    });
});


function checkWInner(button,index,randNum){
    let result;
    if(button==buttons[0]){
        result=randNum==2? true:false;
    }
    else if(button==buttons[1]){
        result=randNum==0?true:false;
    }
    else{
        result=randNum==1?true:false;
    }
    showWinner(result,index,randNum);
};

function showWinner(result,index,randNum){
    if(result==true){
        win.style.color="green";
        win.innerText="Congratulation!! You Win";
        audio.play();
        win.classList.remove("hide");
        displayPick(index,randNum);
    }
    else{
        win.style.color="red";
        win.innerText="Oops!! You lose , Try again";
        audio.pause();
        win.classList.remove("hide");
        displayPick(index,randNum);
    }
}


function displayPick(index,randNum){
    if(index==0){
        yourPick.innerText="rock";
        yourPick.classList.remove("hide");
    }
    else if(index==1){
        yourPick.innerText="paper";
        yourPick.classList.remove("hide");
    }
    else{
        yourPick.innerText="scissor";
        yourPick.classList.remove("hide");
    }


    if(randNum==0){
        computerPick.innerText="rock";
        computerPick.classList.remove("hide");
    }
    else if(randNum==1){
        computerPick.innerText="paper";
        computerPick.classList.remove("hide");
    }
    else{
        computerPick.innerText="scissor";
        computerPick.classList.remove("hide");
    }
}
