
  let number = 0;      
  let number1 = 0; 
  let number2 = 0;       
  let cumputerScore = 0
  let cumputerScore1 = 0
  let cumputerScore2 = 0

 function playGame() {
      let result = '';
      let result1 = '';
      let result2 = '';
      let computerResult = '';
      let computerMove = playermove()
      const gamePlayer = "<img src='raised-fist.webp' alt='Test Image' class='emoji-width'>"

        if ( gamePlayer  === "<img src='raised-fist.webp' alt='Test Image' class='emoji-width'>"){
        if (computerMove === "<img src='1342-victory-hand.png' alt='Test Image' class='emoji-width'>"){
            result1 = 'You Won..';
            computerResult = 'Computer Lose..';
             
        }else if ( computerMove  === "<img src='270b.png' alt='Test Image' class='emoji-width'>"){
            result = 'You Lose' ;
            computerResult =  'Computer Won..';
        
        }else if (computerMove  === "<img src='raised-fist.webp' alt='Test Image' class='emoji-width'>") {
            result2 = 'You Ties' ;
            computerResult = 'Computer Ties..'
        }
        }
        
          document.getElementById("demo2").innerHTML =`${result} ${result1} ${result2}`
          document.getElementById("demo3").innerHTML = `${ computerResult}`
          document.getElementById("demo").innerHTML = ` YOU ${gamePlayer} `;
          document.getElementById("demo1").innerHTML = `${computerMove} COMPUTER`;
           
            if (result  ===  'You Lose'  ){
                number = number + 1;
            }else if (result1 === 'You Won..'){
                number1 = number1 + 1;
            }else if (result2 === 'You Ties'){
                number2 = number2 + 1;
            }
      
            if ( computerResult === 'Computer Won..'  ){
                  cumputerScore =  cumputerScore + 1;
            }else if ( computerResult === 'Computer Lose..'){
                  cumputerScore2 = cumputerScore2 + 1;
            }else if (computerResult === 'Computer Ties..'){
                  cumputerScore1 =  cumputerScore1 + 1;
            }    
            document.getElementById("demo4").innerHTML= `You: Won ${number1},  Losses: ${number}, Ties: ${number2} `
            document.getElementById("demo5").innerHTML= `Computer Win:${ cumputerScore}  Computer Lose:${ cumputerScore2}  Computer Ties:${ cumputerScore1}`
}

  function playGames() {
      let result = '';
      let result1 = '';
      let result2 = '';
      let computerResult = ''
      let computerMove = playermove()
      const gamePlayers = "<img src='270b.png' alt='Test Image' class='emoji-width'>"
        
        
        if  (gamePlayers ===  "<img src='270b.png' alt='Test Image' class='emoji-width'>"){
        if  (computerMove === "<img src='1342-victory-hand.png' alt='Test Image' class='emoji-width'>"){
            result = 'You Lose';
            computerResult =  'Computer Won..'; 
             
        }else if ( computerMove  === "<img src='270b.png' alt='Test Image' class='emoji-width'>"){
            result2 = 'You Ties'  ;
            computerResult = 'Computer Ties..' 
        
        }else if (computerMove  === "<img src='raised-fist.webp' alt='Test Image' class='emoji-width'>") {
            result1 = 'You Won..';
            computerResult = 'Computer Lose..';
        }
        }
        
          document.getElementById("demo2").innerHTML =`${result} ${result1} ${result2}`
          document.getElementById("demo3").innerHTML = `${ computerResult}`
          document.getElementById("demo").innerHTML = ` YOU ${gamePlayers} `;
          document.getElementById("demo1").innerHTML = `${computerMove} COMPUTER`;
           
            if (result  ===  'You Lose'  ){
                number = number + 1;
            }else if (result1 === 'You Won..'){
                number1 = number1 + 1;
            }else if (   result2 === 'You Ties'){
                number2 = number2 + 1;
            }
      
            if ( computerResult === 'Computer Won..'  ){
                  cumputerScore =  cumputerScore + 1;
            }else if ( computerResult === 'Computer Lose..'){
                  cumputerScore2 = cumputerScore2 + 1;
            }else if (computerResult === 'Computer Ties..'){
                  cumputerScore1 =  cumputerScore1 + 1;
            }    
            document.getElementById("demo4").innerHTML= `You: Won ${number1},  Losses: ${number}, Ties: ${number2} `
            document.getElementById("demo5").innerHTML= `Computer Win:${ cumputerScore}  Computer Lose:${ cumputerScore2}  Computer Ties:${ cumputerScore1}`
}

  function playGamees() { 
      let result = '';
      let result1 = '';
      let result2 = '';
      let computerResult = ''
      let computerMove = playermove()
      const gamePlayeres = "<img src='1342-victory-hand.png' alt='Test Image' class='emoji-width'>"
        
        if (gamePlayeres ===  "<img src='1342-victory-hand.png' alt='Test Image' class='emoji-width'>"){
        if  (computerMove === "<img src='1342-victory-hand.png' alt='Test Image' class='emoji-width'>"){
          result2 = 'You Ties';
            computerResult = 'Computer Ties..'; 
             
        }else if ( computerMove  === "<img src='270b.png' alt='Test Image' class='emoji-width'>"){
            result1 = 'You Won..';
            computerResult = 'Computer Lose..'
        
        }else if (computerMove  === "<img src='raised-fist.webp' alt='Test Image' class='emoji-width'>") {
            result = 'You Lose'
            computerResult = 'Computer Won..' 
        }
        }
        
          document.getElementById("demo2").innerHTML =`${result} ${result1} ${result2}`
          document.getElementById("demo3").innerHTML = `${ computerResult}`
          document.getElementById("demo").innerHTML = `YOU ${gamePlayeres} `;
          document.getElementById("demo1").innerHTML = `${computerMove} COMPUTER`;
          
           
            if (result  ===  'You Lose'  ){
                number = number + 1;
            }else if (result1 === 'You Won..'){
                number1 = number1 + 1;
            }else if (   result2 === 'You Ties'){
                number2 = number2 + 1;
            }
      
            if ( computerResult === 'Computer Won..'  ){
                  cumputerScore =  cumputerScore + 1;
            }else if ( computerResult === 'Computer Lose..'){
                  cumputerScore2 = cumputerScore2 + 1;
            }else if (computerResult === 'Computer Ties..'){
                  cumputerScore1 =  cumputerScore1 + 1;
            }    
            document.getElementById("demo4").innerHTML= `You: Won ${number1},  Losses: ${number}, Ties: ${number2} `
            document.getElementById("demo5").innerHTML= `Computer Win:${ cumputerScore}  Computer Lose:${ cumputerScore2}  Computer Ties:${ cumputerScore1}`
}


   function playermove() {
      let computerMove = ''
      const randomNumber = Math.random()       
        if (randomNumber >= 0 && randomNumber <= 1/3) {
                computerMove = "<img src='raised-fist.webp' alt='Test Image' class='emoji-width'>"
        }else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
                  computerMove = "<img src='270b.png' alt='Test Image' class='emoji-width'>";

          }else if (randomNumber >=2/3 && randomNumber <= 1 ) {
                      computerMove = "<img src='1342-victory-hand.png' alt='Test Image' class='emoji-width'>"
            }
    return computerMove
   }