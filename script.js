let but = document.querySelectorAll(".game");
let reset = document.querySelector("#hy");
let newgames = document.querySelector("#newgame");
let msgcon = document.querySelector(".msg");
let count = 0;
let para = document.querySelector("#msg1");

let turno = true;
const  win=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[0,3,6],[1,4,7],[2,5,8]];   

but.forEach((game) =>{
    game.addEventListener("click",() => {
       if (turno === true){
        game.innerText = "O";
        turno = false;
       }
       else{
        game.innerText = "X";
        turno = true;
       }
       game.disabled = true;
       count++;
       if(count === 9){
        draw();
       }
      let iswin = wiinner();
    });
});



const showwinner =(winner) =>{
para.innerText = `congratulations winner is ${winner} `;
msgcon.classList.remove("hide");
disable();
}



const wiinner = () =>{
    for(let is of win){
        
      let posf1 = but[is[0]].innerText;
       let posf2 = but[is[1]].innerText;
       let posf3 = but[is[2]].innerText;

       if(posf1 !="" && posf2 !="" && posf3!=""){
         if(posf1 === posf2 && posf2 === posf3 && posf3 === posf1){
            console.log("winner");
            showwinner(posf1);
         }
       }
     
    }
}


const resetgame = () =>{
    turno=true;
    enable();
    msgcon.classList.add("hide");

};

const disable = () =>{
    for(let game of but){
        game.disabled = true;
    }
};
const enable = () =>{
    for( let game of but){
        game.disabled = false;
       count=0;
        game.innerText = "";
    }
};

const draw = () =>{
    para.innerText = `its a Draw`;
    msgcon.classList.remove("hide");
    count=0;
}
newgames.addEventListener("click",resetgame);
reset .addEventListener("click",resetgame);