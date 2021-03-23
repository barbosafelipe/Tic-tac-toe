let jogWin = false;
let fechar = false;
let player = " ";
let PxCont = 0;
let PoCont = 0;
let DrCont = 0;


let cont = 0;
let game = ["0","1","2",
            "3", "4","5",
            "6", "7","8"];

//Todos as ids dos tabuleiro
let td = [];
for(let i=0; i<=8; i++){
    td[i]= document.getElementById(`t${i}`);   
}
//escrita pelo tabuleiro
function main(a){  
    
    if(cont %2 == 0 ){
        let Pjoga  = a;
        Pjoga.innerHTML = "<td>X</td>";
        cont++;   
        GameX(a);       
         }       
        else{           
           let P2joga  = a;
           P2joga.innerHTML = "<td>O</td>";
            cont++ ;
            GameO(a);    
    }
    if(fechar == true){
        ReiniciarGame();
       }
    Ganhador(); 
    

   
   
  
}
//recebe a entrada do mouse e manda pra validaçao
function jogada(clicked_id){
    let Pjogada = document.getElementById(clicked_id);
    let valor = Pjogada.innerHTML;
    ValidadorJogada(Pjogada,valor);    
}

//Confere se não tem jogadas repetidas
function ValidadorJogada(a,b){
    if(b == 'X' || b == 'O'){
        if(cont >=9  ){
            ReiniciarGame();
        }           
    }else{
   
    main(a);    
    }  
}

//reinicia o jogo
function ReiniciarGame(){
    player = " ";
    cont = 0;
    game = ["0", "1","2",
            "3", "4","5",
            "6", "7","8"];
            fechar = false;
            LimpaRisco();
    for(let i=0; i<=8; i++){
        td[i].innerHTML = '';       
    }
}

function GameX(a){
    
    for(let i=0; i<=8; i++){
        if(a == td[i]){
            game[i] = 'X';
   
        }
    }
    console.log(game)
}
function GameO(a){
    for(let i=0; i<=8; i++){
        if(a == td[i]){
            game[i] = 'O';
            
        }
    }
}
//A logica do joguinho
function Logica(a){
        
        
     if( game[0] == game[1] && game[2] == game[0])
    {
      player = game[0];
      Risco(0,1,2);
      return  true;
    }
    else if( game[3] == game[4] && game[5] == game[3]){
        player = game[3];
        Risco(3,4,5);
        return  true;
    }
  
    else if( game[6] == game[7] && game[8] == game[6]){
        player = game[6];
        Risco(6,7,8);
        return true;
    }
    else if( game[0] == game[3] && game[6] == game[0]){
        player = game[0];
        Risco(0,3,6);
        return true;
    }
    else if( game[1] == game[4] && game[7] == game[1]){
        player = game[1];
        Risco(1,4,7);
        return  true;
    }
    else if( game[2] == game[5] && game[8] == game[2]){
        player = game[2];
        Risco(2,5,8);
        return true;
    }
    else if( game[0] == game[4] && game[8] == game[0]){
        player = game[0];
        Risco(0,4,8);
        return true;
    }
    else if( game[2] == game[4] && game[6] == game[2]){
        player = game[2];
        Risco(2,4,6);
        return  true;
    }
    
}


function Risco(a, b, c){
    document.getElementById(`t${a}`).style.backgroundColor = '#7f7f7fa9';
    document.getElementById(`t${b}`).style.backgroundColor = '#7f7f7fa9';
    document.getElementById(`t${c}`).style.backgroundColor = '#7f7f7fa9';
   

}

function LimpaRisco(){
    for(let i=0; i<=8; i++){
        document.getElementById(`t${i}`).style.backgroundColor = '';
    }
}


function Ganhador(){
    if(fechar == false){

    if(Logica(jogWin) == true){
        if(player == 'X'){
            PxCont++;
            document.getElementById('PlayerX').innerHTML = `Player X <br>(${PxCont})`;
            fechar = true;
            
            
        }
        else if(player == 'O'){
            PoCont++;
            document.getElementById('PlayerO').innerHTML = `Player O <br>(${PoCont})`;
            fechar = true;
        }

    } 
    if(cont > 8){
        DrCont++;
        document.getElementById('Dplayer').innerHTML = `Draw <br>(${DrCont})`;
        fechar = true;
    }       
    }
}
function zerar(){
     PxCont = 0;
     PoCont = 0;
     DrCont = 0;
     document.getElementById('PlayerX').innerHTML = `Player X <br>(${PxCont})`;
     document.getElementById('PlayerO').innerHTML = `Player O <br>(${PoCont})`;
     document.getElementById('Dplayer').innerHTML = `Draw <br>(${DrCont})`;
    ReiniciarGame();
     

}