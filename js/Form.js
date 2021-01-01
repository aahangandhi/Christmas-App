var qCheck;

class Form {

  constructor() {
    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.whatisyourname = createElement('h2');
    this.tellingScore = createElement('h2');
    this.tellingAboutUpdates = createElement('h2');
    this.madeby = createElement('h2');
    this.instruction = createElement('h2');
    //this.reset = createButton('Reset');
    this.startQuiz = createButton('Start Quiz');

    this.qu1 = createElement('h2');
    this.qu1o1 = createButton('Guinea Pigs');
    this.qu1o2 = createButton('Reindeer');
    this.qu1o3 = createButton('Deer');
    this.qu1o4 = createButton('Swans');

    this.qu2 = createElement('h2');
    this.qu2o1 = createButton('12');
    this.qu2o2 = createButton('14');
    this.qu2o3 = createButton('24');
    this.qu2o4 = createButton('50');

    this.qu3 = createElement('h2');
    this.qu3o1 = createButton('Rudolph');
    this.qu3o2 = createButton('Dancer');
    this.qu3o3 = createButton('Blizten');
    this.qu3o4 = createButton('Donna');

    this.qu4 = createElement('h2');
    this.qu4o1 = createButton('Santa');
    this.qu4o2 = createButton('My Mum');
    this.qu4o3 = createButton('Jesus');
    this.qu4o4 = createButton('Rudolph');

    this.qu5 = createElement('h2');
    this.qu5o1 = createButton('Myrrh');
    this.qu5o2 = createButton('Wool');
    this.qu5o3 = createButton('Money');
    this.qu5o4 = createButton('Credit cards');

    this.qu6 = createElement('h2');
    this.qu6o1 = createButton('Fish and Chips');
    this.qu6o2 = createButton('Roast Turkey');
    this.qu6o3 = createButton('Roast Chicken');
    this.qu6o4 = createButton('Roast Beef');

    this.qu7 = createElement('h2');
    this.qu7o1 = createButton('Parrot');
    this.qu7o2 = createButton('Elf');
    this.qu7o3 = createButton('Star');
    this.qu7o4 = createButton('Witch');

    this.qu8 = createElement('h2');
    this.qu8o1 = createButton('In a bush');
    this.qu8o2 = createButton('In a manger');
    this.qu8o3 = createButton('In a bed');
    this.qu8o4 = createButton('On a chair');

    this.qu9 = createElement('h2');
    this.qu9o1 = createButton('Grinch');
    this.qu9o2 = createButton('Elves');
    this.qu9o3 = createButton('Cats');
    this.qu9o4 = createButton('Children');
    
    this.qu10 = createElement('h2');
    this.qu10o1 = createButton('Chocolate');
    this.qu10o2 = createButton('A Mince Pie');
    this.qu10o3 = createButton('McDonalds');
    this.qu10o4 = createButton('Carrot');
    
    this.qu11 = createElement('h2');
    this.qu11o1 = createButton('Holy');
    this.qu11o2 = createButton('Silent');
    this.qu11o3 = createButton('Dark');
    this.qu11o4 = createButton('Quiet');

    this.qu12 = createElement('h2');
    this.qu12o1 = createButton('Ireland');
    this.qu12o2 = createButton('USA');
    this.qu12o3 = createButton('Switzerland');
    this.qu12o4 = createButton('Germany');
    
    this.qu13 = createElement('h2');
    this.qu13o1 = createButton('1780');
    this.qu13o2 = createButton('1843');
    this.qu13o3 = createButton('1906');
    this.qu13o4 = createButton('1930');

    this.qu14 = createElement('h2');
    this.qu14o1 = createButton('South Pole');
    this.qu14o2 = createButton('North Pole');
    this.qu14o3 = createButton('Neverland');
    this.qu14o4 = createButton('My House');
    
    this.qu15 = createElement('h2');
    this.qu15o1 = createButton('Bubbles');
    this.qu15o2 = createButton('Balloons');
    this.qu15o3 = createButton('Burps');
    this.qu15o4 = createButton('Baubles');

    this.qu16 = createElement('h2');
    this.qu16o1 = createButton('The Christmas Fairy');
    this.qu16o2 = createButton('Father Christmas or Santa Claus');
    this.qu16o3 = createButton('The Three Kings');
    this.qu16o4 = createButton('Elves');

    this.qu17 = createElement('h2');
    this.qu17o1 = createButton('Italy');
    this.qu17o2 = createButton('Portugal');
    this.qu17o3 = createButton('Spain');
    this.qu17o4 = createButton('Germany');
    
    this.qu18 = createElement('h2');
    this.qu18o1 = createButton('24th December');
    this.qu18o2 = createButton('25th December');
    this.qu18o3 = createButton('26th December');
    this.qu18o4 = createButton('27th December');

    this.qu19 = createElement('h2');
    this.qu19o1 = createButton('Chris + Tmas');
    this.qu19o2 = createButton('Christ + Mas');
    this.qu19o3 = createButton('Christm + As');
    this.qu19o4 = createButton('It is a single word only');

    this.qu20 = createElement('h2');
    this.qu20o1 = createButton('31th December');
    this.qu20o2 = createButton('1st January');
    this.qu20o3 = createButton('2nd January');
    this.qu20o4 = createButton('29th February');

    this.qu21 = createElement('h2');
    this.qu21o1 = createButton('Auld Lang Syne');
    this.qu21o2 = createButton('Jingle Bells');
    this.qu21o3 = createButton('O Holy Night');
    this.qu21o4 = createButton('Santa Claus is coming to town');
    
    this.qu22 = createElement('h2');
    this.qu22o1 = createButton('Swimming in cold water');
    this.qu22o2 = createButton('New Year Day Parade');
    this.qu22o3 = createButton('Spending time with friends and family');
    this.qu22o4 = createButton('Eating 12 grapes');

    this.qu23 = createElement('h2');
    this.qu23o1 = createButton('20th March or 21st March');
    this.qu23o2 = createButton('28th February');
    this.qu23o3 = createButton('Between 21st January and 20th February');
    this.qu23o4 = createButton('1st January');
    
    this.qu24 = createElement('h2');
    this.qu24o1 = createButton('Teshuva');
    this.qu24o2 = createButton('Tisheri');
    this.qu24o3 = createButton('Rosh Hashanah');
    this.qu24o4 = createButton('Rosh Hanasahi');
 
    this.qu25 = createElement('h2');
    this.qu25o1 = createButton('1550');
    this.qu25o2 = createButton('1582');
    this.qu25o3 = createButton('1600');
    this.qu25o4 = createButton('1650');

  }

  getState(){
    var qCheckRef  = database.ref('qCheck');
    gameStateRef.on("value",function(data){
       qCheck = data.val();
    })

  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.instruction.hide();
    this.startQuiz.hide();
    //this.qu1.hide();
  }

  display(){
    this.title.html("The Christmas Quiz");
    this.title.position(displayWidth/2-72 , 0);
    this.title.style('color',rgb(0,0,254))
    this.title.style('font-size',26)

    this.whatisyourname.html("Please type your name here:");
    this.whatisyourname.position(430,327);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2, displayHeight/2 - 10);
    this.button.style('width', '100px');
    this.button.style('height', '30px');
    this.button.style('background', 'yellow');

    this.button.mousePressed(()=>{
      this.whatisyourname.hide();
      this.input.hide();
      this.button.hide();
     name = this.input.value();
      this.greeting.html("Merry Christmas " + name + " and a Happy New Year");
      this.greeting.position(displayWidth/2 - 180, displayHeight/4);

      

      this.qu1.html("Q.1. Which animal pulls Santa's sleigh out of the following:");
      this.qu2.html("Q.2. How many days are there on an advent calender?");
      this.qu3.html("Q.3. What is the name of the reindeer with the famous red nose?");
      this.qu4.html("Q.4. Christmas celebrates the birthday of whom?");
      this.qu5.html("Q.5. In the nativity play, the kings bring gold, frankincense and _______");
      this.qu6.html("Q.6. What do most people eat for Christmas Lunch in the UK?");
      this.qu7.html("Q.7. What do people usually put at the top of their tree?");
      this.qu8.html("Q.8. Where did the baby Jesus sleep?");
      this.qu9.html("Q.9. What are Santa's helpers called?");
      this.qu10.html("Q.10. What should you leave out for Santa on Christmas Eve?");
      this.qu11.html("Q.11. In the song 'Silent Night' what is the missing word? Silent Night, _______ Night");
      this.qu12.html("Q.12. Where do Christmas Trees come from originally?");
      this.qu13.html("Q.13. When were the first Christmas cards sent in England?");
      this.qu14.html("Q.14. Where does Santa live?");
      this.qu15.html("Q.15. What are the round things called which we hang on trees?");
      this.qu16.html("Q.16. Who delivers Christmas presents to children in the United Kingdom?");
      this.qu17.html("Q.17. Where are the Christmas presents brought by a witch?");
      this.qu18.html("Q.18. Which day is 'Boxing Day'?");
      this.qu19.html("Q.19. What are the two words in which the word 'Christmas' can be divided into?");
      this.qu20.html("Q.20. When is New Year's Eve?");
      this.qu21.html("Q.21. Which song is associated with New Year's Eve?");
      this.qu22.html("Q.22. What is the Spanish New Year tradition?");
      this.qu23.html("Q.23. When does the Chinese new year start?");
      this.qu24.html("Q.24. What is the Jewish New Year called?");
      this.qu25.html("Q.25. When it was decided that New Year starts on 1st January?");
      

      this.startQuiz.position(displayWidth/2, displayHeight/2 + 70);
      this.startQuiz.style('width', '120px');
      this.startQuiz.style('height', '30px');
      this.startQuiz.style('background', 'yellow');

    //  this.startQuiz.style('width', '150px');
      //this.startQuiz.style('height', '50px');

    this.instruction.html("The instructions of the game are as follows - As Christmas comes on 25th December every year, this quiz will also be having 25 questions. All the questions will be related to Christmas or New Year only.  Their is no time limit and so let's see how much you know about Christmas and New Year. The result will be displayed after attending all questions. You cannot skip any question. To start the quiz click on the 'Start Quiz' button below.");
    this.instruction.position(5,displayHeight/4 + 50);


    });

    this.startQuiz.mousePressed(()=>{
      qCheck = 1;
     
      if(qCheck === 1){
        this.greeting.hide();
        this.instruction.hide();
        this.startQuiz.hide();
  
        this.qu1.position(10,80);

        this.qu1o1.position(417,208.5);
        this.qu1o1.style('width', '150px');
        this.qu1o1.style('height', '50px');
        this.qu1o1.style('background', 'lightblue');
        this.qu1o1.style('color', rgb(240,0,0));
        this.qu1o1.style('font-size', '17.5px');
        this.qu1o3.position(417,625.5);
        this.qu1o3.style('width', '150px');
        this.qu1o3.style('height', '50px');
        this.qu1o3.style('background', 'lightblue');
        this.qu1o3.style('color', rgb(240,0,0));
        this.qu1o3.style('font-size', '17.5px');
        this.qu1o2.position(1137,208.5);
        this.qu1o2.style('width', '150px');
        this.qu1o2.style('height', '50px');
        this.qu1o2.style('background', 'lightblue');
        this.qu1o2.style('color', rgb(240,0,0));
        this.qu1o2.style('font-size', '17.5px');
        this.qu1o4.position(1137,625.5);
        this.qu1o4.style('width', '150px');
        this.qu1o4.style('height', '50px');
        this.qu1o4.style('background', 'lightblue');   
        this.qu1o4.style('color', rgb(240,0,0));
        this.qu1o4.style('font-size', '17.5px');
      }

      if(qCheck === 2){
  
        this.qu2.position(10,80);
          this.qu2o1.position(417,208.5);
          this.qu2o3.position(417,625.5);
          this.qu2o2.position(1137,208.5);
          this.qu2o4.position(1137,625.5);  
          
      this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
      }

      if(qCheck === 3){
  
        this.qu3.position(10,80);
          this.qu3o1.position(417,208.5);
          this.qu3o3.position(417,625.5);
          this.qu3o2.position(1137,208.5);
          this.qu3o4.position(1137,625.5);  
          
      this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
      }

      if(qCheck === 4){
  
        this.qu4.position(10,80);
          this.qu4o1.position(417,208.5);
          this.qu4o3.position(417,625.5);
          this.qu4o2.position(1137,208.5);
          this.qu4o4.position(1137,625.5);  
          
      this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
      }

      if(qCheck === 5){
  
        this.qu5.position(10,80);
          this.qu5o1.position(417,208.5);
          this.qu5o3.position(417,625.5);
          this.qu5o2.position(1137,208.5);
          this.qu5o4.position(1137,625.5);  
          
      this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
      }

      if(qCheck === 6){
  
        this.qu6.position(10,80);
          this.qu6o1.position(417,208.5);
          this.qu6o3.position(417,625.5);
          this.qu6o2.position(1137,208.5);
          this.qu6o4.position(1137,625.5);  
          
      this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
      }

      if(qCheck === 7){
  
        this.qu7.position(10,80);
          this.qu7o1.position(417,208.5);
          this.qu7o3.position(417,625.5);
          this.qu7o2.position(1137,208.5);
          this.qu7o4.position(1137,625.5);  
          
      this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
      }

      if(qCheck === 8){
  
        this.qu8.position(10,80);
          this.qu8o1.position(417,208.5);
          this.qu8o3.position(417,625.5);
          this.qu8o2.position(1137,208.5);
          this.qu8o4.position(1137,625.5);  
          
      this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
      }

      if(qCheck === 9){
  
        this.qu9.position(10,80);
          this.qu9o1.position(417,208.5);
          this.qu9o3.position(417,625.5);
          this.qu9o2.position(1137,208.5);
          this.qu9o4.position(1137,625.5);  
          
      this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
      }

      if(qCheck === 10){
  
        this.qu10.position(10,80);
          this.qu10o1.position(417,208.5);
          this.qu10o3.position(417,625.5);
          this.qu10o2.position(1137,208.5);
          this.qu10o4.position(1137,625.5);  
          
      this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
      }

      if(qCheck === 11){
  
        this.qu11.position(10,80);
          this.qu11o1.position(417,208.5);
          this.qu11o3.position(417,625.5);
          this.qu11o2.position(1137,208.5);
          this.qu11o4.position(1137,625.5);  
          
      this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
      }

      if(qCheck === 12){
  
        this.qu12.position(10,80);
          this.qu12o1.position(417,208.5);
          this.qu12o3.position(417,625.5);
          this.qu12o2.position(1137,208.5);
          this.qu12o4.position(1137,625.5);  
          
      this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
      }

      if(qCheck === 13){
  
        this.qu13.position(10,80);
          this.qu13o1.position(417,208.5);
          this.qu13o3.position(417,625.5);
          this.qu13o2.position(1137,208.5);
          this.qu13o4.position(1137,625.5);  
          
      this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
      }

      if(qCheck === 14){
  
        this.qu14.position(10,80);
          this.qu14o1.position(417,208.5);
          this.qu14o3.position(417,625.5);
          this.qu14o2.position(1137,208.5);
          this.qu14o4.position(1137,625.5);  
          
      this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
      }

      if(qCheck === 15){
  
        this.qu15.position(10,80);
          this.qu15o1.position(417,208.5);
          this.qu15o3.position(417,625.5);
          this.qu15o2.position(1137,208.5);
          this.qu15o4.position(1137,625.5);  
          
      this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
      }

      if(qCheck === 16){
  
        this.qu16.position(10,80);
          this.qu16o1.position(417,208.5);
          this.qu16o3.position(417,625.5);
          this.qu16o2.position(1137,208.5);
          this.qu16o4.position(1137,625.5);  
          
      this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
      }

      if(qCheck === 17){
  
        this.qu17.position(10,80);
          this.qu17o1.position(417,208.5);
          this.qu17o3.position(417,625.5);
          this.qu17o2.position(1137,208.5);
          this.qu17o4.position(1137,625.5);  
          
      this.qu16.hide();
      this.qu16o1.hide();
      this.qu16o2.hide();
      this.qu16o3.hide();
      this.qu16o4.hide();
      }

      if(qCheck === 18){
  
        this.qu18.position(10,80);
          this.qu18o1.position(417,208.5);
          this.qu18o3.position(417,625.5);
          this.qu18o2.position(1137,208.5);
          this.qu18o4.position(1137,625.5);  
          
      this.qu17.hide();
      this.qu17o1.hide();
      this.qu17o2.hide();
      this.qu17o3.hide();
      this.qu17o4.hide();
      }

      if(qCheck === 19){
  
        this.qu19.position(10,80);
          this.qu19o1.position(417,208.5);
          this.qu19o3.position(417,625.5);
          this.qu19o2.position(1137,208.5);
          this.qu19o4.position(1137,625.5);  
          
      this.qu18.hide();
      this.qu18o1.hide();
      this.qu18o2.hide();
      this.qu18o3.hide();
      this.qu18o4.hide();
      }

      if(qCheck === 20){
  
        this.qu20.position(10,80);
          this.qu20o1.position(417,208.5);
          this.qu20o3.position(417,625.5);
          this.qu20o2.position(1137,208.5);
          this.qu20o4.position(1137,625.5);  
          
      this.qu19.hide();
      this.qu19o1.hide();
      this.qu19o2.hide();
      this.qu19o3.hide();
      this.qu19o4.hide();
      }

      if(qCheck === 21){
  
        this.qu21.position(10,80);
          this.qu21o1.position(417,208.5);
          this.qu21o3.position(417,625.5);
          this.qu21o2.position(1137,208.5);
          this.qu21o4.position(1137,625.5);  
          
      this.qu20.hide();
      this.qu20o1.hide();
      this.qu20o2.hide();
      this.qu20o3.hide();
      this.qu20o4.hide();
      }

      if(qCheck === 22){
  
        this.qu22.position(10,80);
          this.qu22o1.position(417,208.5);
          this.qu22o3.position(417,625.5);
          this.qu22o2.position(1137,208.5);
          this.qu22o4.position(1137,625.5);  
          
      this.qu21.hide();
      this.qu21o1.hide();
      this.qu21o2.hide();
      this.qu21o3.hide();
      this.qu21o4.hide();
      }

      if(qCheck === 23){
  
        this.qu23.position(10,80);
          this.qu23o1.position(417,208.5);
          this.qu23o3.position(417,625.5);
          this.qu23o2.position(1137,208.5);
          this.qu23o4.position(1137,625.5);  
          
      this.qu22.hide();
      this.qu22o1.hide();
      this.qu22o2.hide();
      this.qu22o3.hide();
      this.qu22o4.hide();
      }

      if(qCheck === 24){
  
        this.qu24.position(10,80);
          this.qu24o1.position(417,208.5);
          this.qu24o3.position(417,625.5);
          this.qu24o2.position(1137,208.5);
          this.qu24o4.position(1137,625.5);  
          
      this.qu23.hide();
      this.qu23o1.hide();
      this.qu23o2.hide();
      this.qu23o3.hide();
      this.qu23o4.hide();
      }

      if(qCheck === 25){
  
        this.qu25.position(10,80);
          this.qu25o1.position(417,208.5);
          this.qu25o3.position(417,625.5);
          this.qu25o2.position(1137,208.5);
          this.qu25o4.position(1137,625.5);  
          
      this.qu24.hide();
      this.qu24o1.hide();
      this.qu24o2.hide();
      this.qu24o3.hide();
      this.qu24o4.hide();
      }

    }); 

// ======================================
//                  qu1
// ======================================

this.qu1o1.mousePressed(()=>{
  qCheck = 2;
  q1 = "wrong";
  

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  this.qu2o3.position(417,625.5);
  this.qu2o3.style('width', '150px');
  this.qu2o3.style('height', '50px');
  this.qu2o3.style('background', 'lightblue');
  this.qu2o3.style('color', rgb(240,0,0));
  this.qu2o3.style('font-size', '17.5px');
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
  this.qu2o4.position(1137,625.5);
  this.qu2o4.style('width', '150px');
  this.qu2o4.style('height', '50px');
  this.qu2o4.style('background', 'lightblue');   
  this.qu2o4.style('color', rgb(240,0,0));
  this.qu2o4.style('font-size', '17.5px');

    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
}); 

this.qu1o2.mousePressed(()=>{
  qCheck = 2;
  q1 = "right";
  score += 1;

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  this.qu2o3.position(417,625.5);
  this.qu2o3.style('width', '150px');
  this.qu2o3.style('height', '50px');
  this.qu2o3.style('background', 'lightblue');
  this.qu2o3.style('color', rgb(240,0,0));
  this.qu2o3.style('font-size', '17.5px');
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
  this.qu2o4.position(1137,625.5);
  this.qu2o4.style('width', '150px');
  this.qu2o4.style('height', '50px');
  this.qu2o4.style('background', 'lightblue');   
  this.qu2o4.style('color', rgb(240,0,0));
  this.qu2o4.style('font-size', '17.5px');

    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
}); 

this.qu1o3.mousePressed(()=>{
  qCheck = 2;
  q1 = "wrong";
  

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  this.qu2o3.position(417,625.5);
  this.qu2o3.style('width', '150px');
  this.qu2o3.style('height', '50px');
  this.qu2o3.style('background', 'lightblue');
  this.qu2o3.style('color', rgb(240,0,0));
  this.qu2o3.style('font-size', '17.5px');
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
  this.qu2o4.position(1137,625.5);
  this.qu2o4.style('width', '150px');
  this.qu2o4.style('height', '50px');
  this.qu2o4.style('background', 'lightblue');   
  this.qu2o4.style('color', rgb(240,0,0));
  this.qu2o4.style('font-size', '17.5px');

    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
}); 

this.qu1o4.mousePressed(()=>{
  qCheck = 2;
  q1 = "wrong";
  

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  this.qu2o3.position(417,625.5);
  this.qu2o3.style('width', '150px');
  this.qu2o3.style('height', '50px');
  this.qu2o3.style('background', 'lightblue');
  this.qu2o3.style('color', rgb(240,0,0));
  this.qu2o3.style('font-size', '17.5px');
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
  this.qu2o4.position(1137,625.5);
  this.qu2o4.style('width', '150px');
  this.qu2o4.style('height', '50px');
  this.qu2o4.style('background', 'lightblue');   
  this.qu2o4.style('color', rgb(240,0,0));
  this.qu2o4.style('font-size', '17.5px');

    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
}); 


// ======================================
//                  qu2
// ======================================

this.qu2o1.mousePressed(()=>{
  qCheck = 3;
  q2 = "wrong";
  

  this.qu3.position(10,80);
  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
  this.qu3o3.position(417,625.5);
  this.qu3o3.style('width', '150px');
  this.qu3o3.style('height', '50px');
  this.qu3o3.style('background', 'lightblue');
  this.qu3o3.style('color', rgb(240,0,0));
  this.qu3o3.style('font-size', '17.5px');
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
  this.qu3o4.position(1137,625.5);
  this.qu3o4.style('width', '150px');
  this.qu3o4.style('height', '50px');
  this.qu3o4.style('background', 'lightblue');   
  this.qu3o4.style('color', rgb(240,0,0));
  this.qu3o4.style('font-size', '17.5px');

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
}); 

this.qu2o2.mousePressed(()=>{
  qCheck = 3;
  q2 = "wrong";
  

  this.qu3.position(10,80);
  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
  this.qu3o3.position(417,625.5);
  this.qu3o3.style('width', '150px');
  this.qu3o3.style('height', '50px');
  this.qu3o3.style('background', 'lightblue');
  this.qu3o3.style('color', rgb(240,0,0));
  this.qu3o3.style('font-size', '17.5px');
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
  this.qu3o4.position(1137,625.5);
  this.qu3o4.style('width', '150px');
  this.qu3o4.style('height', '50px');
  this.qu3o4.style('background', 'lightblue');   
  this.qu3o4.style('color', rgb(240,0,0));
  this.qu3o4.style('font-size', '17.5px');

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
}); 

this.qu2o3.mousePressed(()=>{
  qCheck = 3;
  q2 = "right";
  score += 1;

  this.qu3.position(10,80);
  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
  this.qu3o3.position(417,625.5);
  this.qu3o3.style('width', '150px');
  this.qu3o3.style('height', '50px');
  this.qu3o3.style('background', 'lightblue');
  this.qu3o3.style('color', rgb(240,0,0));
  this.qu3o3.style('font-size', '17.5px');
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
  this.qu3o4.position(1137,625.5);
  this.qu3o4.style('width', '150px');
  this.qu3o4.style('height', '50px');
  this.qu3o4.style('background', 'lightblue');   
  this.qu3o4.style('color', rgb(240,0,0));
  this.qu3o4.style('font-size', '17.5px');

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
}); 

this.qu2o4.mousePressed(()=>{
  qCheck = 3;
  q2 = "wrong";
  

  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
  this.qu3o3.position(417,625.5);
  this.qu3o3.style('width', '150px');
  this.qu3o3.style('height', '50px');
  this.qu3o3.style('background', 'lightblue');
  this.qu3o3.style('color', rgb(240,0,0));
  this.qu3o3.style('font-size', '17.5px');
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
  this.qu3o4.position(1137,625.5);
  this.qu3o4.style('width', '150px');
  this.qu3o4.style('height', '50px');
  this.qu3o4.style('background', 'lightblue');   
  this.qu3o4.style('color', rgb(240,0,0));
  this.qu3o4.style('font-size', '17.5px');

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
}); 

// ======================================
//                  qu3
// ======================================

this.qu3o1.mousePressed(()=>{
  qCheck = 4;
  q3 = "right";
  score += 1;

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
  this.qu4o3.position(417,625.5);
  this.qu4o3.style('width', '150px');
  this.qu4o3.style('height', '50px');
  this.qu4o3.style('background', 'lightblue');
  this.qu4o3.style('color', rgb(240,0,0));
  this.qu4o3.style('font-size', '17.5px');
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
  this.qu4o4.position(1137,625.5);
  this.qu4o4.style('width', '150px');
  this.qu4o4.style('height', '50px');
  this.qu4o4.style('background', 'lightblue');   
  this.qu4o4.style('color', rgb(240,0,0));
  this.qu4o4.style('font-size', '17.5px');

    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
}); 

this.qu3o2.mousePressed(()=>{
  qCheck = 4;
  q3 = "wrong";
  

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
  this.qu4o3.position(417,625.5);
  this.qu4o3.style('width', '150px');
  this.qu4o3.style('height', '50px');
  this.qu4o3.style('background', 'lightblue');
  this.qu4o3.style('color', rgb(240,0,0));
  this.qu4o3.style('font-size', '17.5px');
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
  this.qu4o4.position(1137,625.5);
  this.qu4o4.style('width', '150px');
  this.qu4o4.style('height', '50px');
  this.qu4o4.style('background', 'lightblue');   
  this.qu4o4.style('color', rgb(240,0,0));
  this.qu4o4.style('font-size', '17.5px');

    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
}); 

this.qu3o3.mousePressed(()=>{
  qCheck = 4;
  q3 = "wrong";
  

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
  this.qu4o3.position(417,625.5);
  this.qu4o3.style('width', '150px');
  this.qu4o3.style('height', '50px');
  this.qu4o3.style('background', 'lightblue');
  this.qu4o3.style('color', rgb(240,0,0));
  this.qu4o3.style('font-size', '17.5px');
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
  this.qu4o4.position(1137,625.5);
  this.qu4o4.style('width', '150px');
  this.qu4o4.style('height', '50px');
  this.qu4o4.style('background', 'lightblue');   
  this.qu4o4.style('color', rgb(240,0,0));
  this.qu4o4.style('font-size', '17.5px');

    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
}); 

this.qu3o4.mousePressed(()=>{
  qCheck = 4;
  q3 = "wrong";
  

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
  this.qu4o3.position(417,625.5);
  this.qu4o3.style('width', '150px');
  this.qu4o3.style('height', '50px');
  this.qu4o3.style('background', 'lightblue');
  this.qu4o3.style('color', rgb(240,0,0));
  this.qu4o3.style('font-size', '17.5px');
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
  this.qu4o4.position(1137,625.5);
  this.qu4o4.style('width', '150px');
  this.qu4o4.style('height', '50px');
  this.qu4o4.style('background', 'lightblue');   
  this.qu4o4.style('color', rgb(240,0,0));
  this.qu4o4.style('font-size', '17.5px');

    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
}); 

// ======================================
//                  qu4
// ======================================

this.qu4o1.mousePressed(()=>{
  qCheck = 5;
  q4 = "wrong";
  

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

this.qu4o2.mousePressed(()=>{
  qCheck = 5;
  q4 = "wrong";
  

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

this.qu4o3.mousePressed(()=>{
  qCheck = 5;
  q4 = "right";
  score += 1;

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

this.qu4o4.mousePressed(()=>{
  qCheck = 5;
  q4 = "wrong";
  

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

// ======================================
//                  qu5
// ======================================

this.qu5o1.mousePressed(()=>{
  qCheck = 6;
  q5 = "right";
  score += 1;

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

this.qu5o2.mousePressed(()=>{
  qCheck = 6;
  q5 = "wrong";
  

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

this.qu5o3.mousePressed(()=>{
  qCheck = 6;
  q5 = "wrong";
  

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

this.qu5o4.mousePressed(()=>{
  qCheck = 6;
  q5 = "wrong";
  

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

// ======================================
//                  qu6
// ======================================

this.qu6o1.mousePressed(()=>{
  qCheck = 7;
  q6 = "wrong";
  

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 

this.qu6o2.mousePressed(()=>{
  qCheck = 7;
  q6 = "right";
  score += 1;

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 


this.qu6o3.mousePressed(()=>{
  qCheck = 7;
  q6 = "wrong";
  

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 

this.qu6o4.mousePressed(()=>{
  qCheck = 7;
  q6 = "wrong";
  

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 

// ======================================
//                  qu7
// ======================================

this.qu7o1.mousePressed(()=>{
  qCheck = 8;
  q7 = "wrong";
  

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

this.qu7o2.mousePressed(()=>{
  qCheck = 8;
  q7 = "wrong";
  

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

this.qu7o3.mousePressed(()=>{
  qCheck = 8;
  q7 = "right";
  score += 1;

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

this.qu7o4.mousePressed(()=>{
  qCheck = 8;
  q7 = "wrong";
  

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

// ======================================
//                  qu8
// ======================================

this.qu8o1.mousePressed(()=>{
  qCheck = 9;
  q8 = "wrong";
  

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

this.qu8o2.mousePressed(()=>{
  qCheck = 9;
  q8 = "right";
  score += 1;

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

this.qu8o3.mousePressed(()=>{
  qCheck = 9;
  q8 = "wrong";
  

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

this.qu8o4.mousePressed(()=>{
  qCheck = 9;
  q8 = "wrong";
  

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

// ======================================
//                  qu9
// ======================================

this.qu9o1.mousePressed(()=>{
  qCheck = 10;
  q9 = "wrong";
  

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

this.qu9o2.mousePressed(()=>{
  qCheck = 10;
  q9 = "right";
  score += 1;

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

this.qu9o3.mousePressed(()=>{
  qCheck = 10;
  q9 = "wrong";
  

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

this.qu9o4.mousePressed(()=>{
  qCheck = 10;
  q9 = "wrong";
  

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

// ======================================
//                  qu10
// ======================================

this.qu10o1.mousePressed(()=>{
  qCheck = 11;
  q10 = "wrong";
  

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

this.qu10o2.mousePressed(()=>{
  qCheck = 11;
  q10 = "right";
  score += 1;

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

this.qu10o3.mousePressed(()=>{
  qCheck = 11;
  q10 = "wrong";
  

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

this.qu10o4.mousePressed(()=>{
  qCheck = 11;
  q10 = "wrong";
  

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

// ======================================
//                  qu11
// ======================================

this.qu11o1.mousePressed(()=>{
  qCheck = 12;
  q11 = "right";
  score += 1;

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

this.qu11o2.mousePressed(()=>{
  qCheck = 12;
  q11 = "wrong";
  

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

this.qu11o3.mousePressed(()=>{
  qCheck = 12;
  q11 = "wrong";
  

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

this.qu11o4.mousePressed(()=>{
  qCheck = 12;
  q11 = "wrong";
  

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

// ======================================
//                  qu12
// ======================================

this.qu12o1.mousePressed(()=>{
  qCheck = 13;
  q12 = "wrong";
  

  this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

this.qu12o2.mousePressed(()=>{
  qCheck = 13;
  q12 = "wrong";
  

  this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

this.qu12o3.mousePressed(()=>{
  qCheck = 13;
  q12 = "wrong";
  

  this.qu13.position(10,80);
    this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

this.qu12o4.mousePressed(()=>{
  qCheck = 13;
  q12 = "right";
  score += 1;

  this.qu13.position(10,80);
  this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

// ======================================
//                  qu13
// ======================================

this.qu13o1.mousePressed(()=>{
  qCheck = 14;
  q13 = "wrong";
  

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

this.qu13o2.mousePressed(()=>{
  qCheck = 14;
  q13 = "right";
  score += 1;

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

this.qu13o3.mousePressed(()=>{
  qCheck = 14;
  q13 = "wrong";
  

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

this.qu13o4.mousePressed(()=>{
  qCheck = 14;
  q13 = "wrong";
  

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

// ======================================
//                  qu14
// ======================================

this.qu14o1.mousePressed(()=>{
  qCheck = 15;
  q14 = "wrong";
  

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

this.qu14o2.mousePressed(()=>{
  qCheck = 15;
  q14 = "right";
  score += 1;

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

this.qu14o3.mousePressed(()=>{
  qCheck = 15;
  q14 = "wrong";
  

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

this.qu14o4.mousePressed(()=>{
  qCheck = 15;
  q14 = "wrong";
  

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

// ======================================
//                  qu15
// ======================================

this.qu15o1.mousePressed(()=>{
  qCheck = 16;
  q15 = "wrong";
  

  this.qu16.position(10,80);
  this.qu16o1.position(417,208.5);
  this.qu16o1.style('width', '150px');
  this.qu16o1.style('height', '50px');
  this.qu16o1.style('background', 'lightblue');
  this.qu16o1.style('color', rgb(240,0,0));
  this.qu16o1.style('font-size', '17.5px');
  this.qu16o3.position(417,625.5);
  this.qu16o3.style('width', '150px');
  this.qu16o3.style('height', '50px');
  this.qu16o3.style('background', 'lightblue');
  this.qu16o3.style('color', rgb(240,0,0));
  this.qu16o3.style('font-size', '17.5px');
  this.qu16o2.position(1137,208.5);
  this.qu16o2.style('width', '150px');
  this.qu16o2.style('height', '50px');
  this.qu16o2.style('background', 'lightblue');
  this.qu16o2.style('color', rgb(240,0,0));
  this.qu16o2.style('font-size', '15px');
  this.qu16o4.position(1137,625.5);
  this.qu16o4.style('width', '150px');
  this.qu16o4.style('height', '50px');
  this.qu16o4.style('background', 'lightblue');   
  this.qu16o4.style('color', rgb(240,0,0));
  this.qu16o4.style('font-size', '17.5px');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

this.qu15o2.mousePressed(()=>{
  qCheck = 16;
  q15 = "wrong";
  

  this.qu16.position(10,80);
  this.qu16o1.position(417,208.5);
  this.qu16o1.style('width', '150px');
  this.qu16o1.style('height', '50px');
  this.qu16o1.style('background', 'lightblue');
  this.qu16o1.style('color', rgb(240,0,0));
  this.qu16o1.style('font-size', '17.5px');
  this.qu16o3.position(417,625.5);
  this.qu16o3.style('width', '150px');
  this.qu16o3.style('height', '50px');
  this.qu16o3.style('background', 'lightblue');
  this.qu16o3.style('color', rgb(240,0,0));
  this.qu16o3.style('font-size', '17.5px');
  this.qu16o2.position(1137,208.5);
  this.qu16o2.style('width', '150px');
  this.qu16o2.style('height', '50px');
  this.qu16o2.style('background', 'lightblue');
  this.qu16o2.style('color', rgb(240,0,0));
  this.qu16o2.style('font-size', '15px');
  this.qu16o4.position(1137,625.5);
  this.qu16o4.style('width', '150px');
  this.qu16o4.style('height', '50px');
  this.qu16o4.style('background', 'lightblue');   
  this.qu16o4.style('color', rgb(240,0,0));
  this.qu16o4.style('font-size', '17.5px');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

this.qu15o3.mousePressed(()=>{
  qCheck = 16;
  q15 = "wrong";
  

  this.qu16.position(10,80);
  this.qu16o1.position(417,208.5);
  this.qu16o1.style('width', '150px');
  this.qu16o1.style('height', '50px');
  this.qu16o1.style('background', 'lightblue');
  this.qu16o1.style('color', rgb(240,0,0));
  this.qu16o1.style('font-size', '17.5px');
  this.qu16o3.position(417,625.5);
  this.qu16o3.style('width', '150px');
  this.qu16o3.style('height', '50px');
  this.qu16o3.style('background', 'lightblue');
  this.qu16o3.style('color', rgb(240,0,0));
  this.qu16o3.style('font-size', '17.5px');
  this.qu16o2.position(1137,208.5);
  this.qu16o2.style('width', '150px');
  this.qu16o2.style('height', '50px');
  this.qu16o2.style('background', 'lightblue');
  this.qu16o2.style('color', rgb(240,0,0));
  this.qu16o2.style('font-size', '15px');
  this.qu16o4.position(1137,625.5);
  this.qu16o4.style('width', '150px');
  this.qu16o4.style('height', '50px');
  this.qu16o4.style('background', 'lightblue');   
  this.qu16o4.style('color', rgb(240,0,0));
  this.qu16o4.style('font-size', '17.5px');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

this.qu15o4.mousePressed(()=>{
  qCheck = 16;
  q15 = "right";
  score += 1;

  this.qu16.position(10,80);
  this.qu16o1.position(417,208.5);
  this.qu16o1.style('width', '150px');
  this.qu16o1.style('height', '50px');
  this.qu16o1.style('background', 'lightblue');
  this.qu16o1.style('color', rgb(240,0,0));
  this.qu16o1.style('font-size', '17.5px');
  this.qu16o3.position(417,625.5);
  this.qu16o3.style('width', '150px');
  this.qu16o3.style('height', '50px');
  this.qu16o3.style('background', 'lightblue');
  this.qu16o3.style('color', rgb(240,0,0));
  this.qu16o3.style('font-size', '17.5px');
  this.qu16o2.position(1137,208.5);
  this.qu16o2.style('width', '150px');
  this.qu16o2.style('height', '50px');
  this.qu16o2.style('background', 'lightblue');
  this.qu16o2.style('color', rgb(240,0,0));
  this.qu16o2.style('font-size', '15px');
  this.qu16o4.position(1137,625.5);
  this.qu16o4.style('width', '150px');
  this.qu16o4.style('height', '50px');
  this.qu16o4.style('background', 'lightblue');   
  this.qu16o4.style('color', rgb(240,0,0));
  this.qu16o4.style('font-size', '17.5px');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

// ======================================
//                  qu16
// ======================================

this.qu16o1.mousePressed(()=>{
  qCheck = 17;
  q16 = "wrong";
  

  this.qu17.position(10,80);
  this.qu17o1.position(417,208.5);
  this.qu17o1.style('width', '150px');
  this.qu17o1.style('height', '50px');
  this.qu17o1.style('background', 'lightblue');
  this.qu17o1.style('color', rgb(240,0,0));
  this.qu17o1.style('font-size', '17.5px');
  this.qu17o3.position(417,625.5);
  this.qu17o3.style('width', '150px');
  this.qu17o3.style('height', '50px');
  this.qu17o3.style('background', 'lightblue');
  this.qu17o3.style('color', rgb(240,0,0));
  this.qu17o3.style('font-size', '17.5px');
  this.qu17o2.position(1137,208.5);
  this.qu17o2.style('width', '150px');
  this.qu17o2.style('height', '50px');
  this.qu17o2.style('background', 'lightblue');
  this.qu17o2.style('color', rgb(240,0,0));
  this.qu17o2.style('font-size', '17.5px');
  this.qu17o4.position(1137,625.5);
  this.qu17o4.style('width', '150px');
  this.qu17o4.style('height', '50px');
  this.qu17o4.style('background', 'lightblue');   
  this.qu17o4.style('color', rgb(240,0,0));
  this.qu17o4.style('font-size', '17.5px');

    this.qu16.hide();
      this.qu16o1.hide();
      this.qu16o2.hide();
      this.qu16o3.hide();
      this.qu16o4.hide();
});

this.qu16o2.mousePressed(()=>{
  qCheck = 17;
  q16 = "right";
  score += 1;

  this.qu17.position(10,80);
  this.qu17o1.position(417,208.5);
  this.qu17o1.style('width', '150px');
  this.qu17o1.style('height', '50px');
  this.qu17o1.style('background', 'lightblue');
  this.qu17o1.style('color', rgb(240,0,0));
  this.qu17o1.style('font-size', '17.5px');
  this.qu17o3.position(417,625.5);
  this.qu17o3.style('width', '150px');
  this.qu17o3.style('height', '50px');
  this.qu17o3.style('background', 'lightblue');
  this.qu17o3.style('color', rgb(240,0,0));
  this.qu17o3.style('font-size', '17.5px');
  this.qu17o2.position(1137,208.5);
  this.qu17o2.style('width', '150px');
  this.qu17o2.style('height', '50px');
  this.qu17o2.style('background', 'lightblue');
  this.qu17o2.style('color', rgb(240,0,0));
  this.qu17o2.style('font-size', '17.5px');
  this.qu17o4.position(1137,625.5);
  this.qu17o4.style('width', '150px');
  this.qu17o4.style('height', '50px');
  this.qu17o4.style('background', 'lightblue');   
  this.qu17o4.style('color', rgb(240,0,0));
  this.qu17o4.style('font-size', '17.5px');

    this.qu16.hide();
      this.qu16o1.hide();
      this.qu16o2.hide();
      this.qu16o3.hide();
      this.qu16o4.hide();
});

this.qu16o3.mousePressed(()=>{
  qCheck = 17;
  q16 = "wrong";
  

  this.qu17.position(10,80);
  this.qu17o1.position(417,208.5);
  this.qu17o1.style('width', '150px');
  this.qu17o1.style('height', '50px');
  this.qu17o1.style('background', 'lightblue');
  this.qu17o1.style('color', rgb(240,0,0));
  this.qu17o1.style('font-size', '17.5px');
  this.qu17o3.position(417,625.5);
  this.qu17o3.style('width', '150px');
  this.qu17o3.style('height', '50px');
  this.qu17o3.style('background', 'lightblue');
  this.qu17o3.style('color', rgb(240,0,0));
  this.qu17o3.style('font-size', '17.5px');
  this.qu17o2.position(1137,208.5);
  this.qu17o2.style('width', '150px');
  this.qu17o2.style('height', '50px');
  this.qu17o2.style('background', 'lightblue');
  this.qu17o2.style('color', rgb(240,0,0));
  this.qu17o2.style('font-size', '17.5px');
  this.qu17o4.position(1137,625.5);
  this.qu17o4.style('width', '150px');
  this.qu17o4.style('height', '50px');
  this.qu17o4.style('background', 'lightblue');   
  this.qu17o4.style('color', rgb(240,0,0));
  this.qu17o4.style('font-size', '17.5px');

    this.qu16.hide();
      this.qu16o1.hide();
      this.qu16o2.hide();
      this.qu16o3.hide();
      this.qu16o4.hide();
});

this.qu16o4.mousePressed(()=>{
  qCheck = 17;
  q16 = "wrong";
  

  this.qu17.position(10,80);
  this.qu17o1.position(417,208.5);
  this.qu17o1.style('width', '150px');
  this.qu17o1.style('height', '50px');
  this.qu17o1.style('background', 'lightblue');
  this.qu17o1.style('color', rgb(240,0,0));
  this.qu17o1.style('font-size', '17.5px');
  this.qu17o3.position(417,625.5);
  this.qu17o3.style('width', '150px');
  this.qu17o3.style('height', '50px');
  this.qu17o3.style('background', 'lightblue');
  this.qu17o3.style('color', rgb(240,0,0));
  this.qu17o3.style('font-size', '17.5px');
  this.qu17o2.position(1137,208.5);
  this.qu17o2.style('width', '150px');
  this.qu17o2.style('height', '50px');
  this.qu17o2.style('background', 'lightblue');
  this.qu17o2.style('color', rgb(240,0,0));
  this.qu17o2.style('font-size', '17.5px');
  this.qu17o4.position(1137,625.5);
  this.qu17o4.style('width', '150px');
  this.qu17o4.style('height', '50px');
  this.qu17o4.style('background', 'lightblue');   
  this.qu17o4.style('color', rgb(240,0,0));
  this.qu17o4.style('font-size', '17.5px');

    this.qu16.hide();
      this.qu16o1.hide();
      this.qu16o2.hide();
      this.qu16o3.hide();
      this.qu16o4.hide();
});

// ======================================
//                  qu17
// ======================================

this.qu17o1.mousePressed(()=>{
  qCheck = 18;
  q17 = "right";
  score += 1;

  this.qu18.position(10,80);
  this.qu18o1.position(417,208.5);
  this.qu18o1.style('width', '150px');
  this.qu18o1.style('height', '50px');
  this.qu18o1.style('background', 'lightblue');
  this.qu18o1.style('color', rgb(240,0,0));
  this.qu18o1.style('font-size', '17.5px');
  this.qu18o3.position(417,625.5);
  this.qu18o3.style('width', '150px');
  this.qu18o3.style('height', '50px');
  this.qu18o3.style('background', 'lightblue');
  this.qu18o3.style('color', rgb(240,0,0));
  this.qu18o3.style('font-size', '17.5px');
  this.qu18o2.position(1137,208.5);
  this.qu18o2.style('width', '150px');
  this.qu18o2.style('height', '50px');
  this.qu18o2.style('background', 'lightblue');
  this.qu18o2.style('color', rgb(240,0,0));
  this.qu18o2.style('font-size', '17.5px');
  this.qu18o4.position(1137,625.5);
  this.qu18o4.style('width', '150px');
  this.qu18o4.style('height', '50px');
  this.qu18o4.style('background', 'lightblue');   
  this.qu18o4.style('color', rgb(240,0,0));
  this.qu18o4.style('font-size', '17.5px');

    this.qu17.hide();
      this.qu17o1.hide();
      this.qu17o2.hide();
      this.qu17o3.hide();
      this.qu17o4.hide();
});

this.qu17o2.mousePressed(()=>{
  qCheck = 18;
  q17 = "wrong";
  

  this.qu18.position(10,80);
  this.qu18o1.position(417,208.5);
  this.qu18o1.style('width', '150px');
  this.qu18o1.style('height', '50px');
  this.qu18o1.style('background', 'lightblue');
  this.qu18o1.style('color', rgb(240,0,0));
  this.qu18o1.style('font-size', '17.5px');
  this.qu18o3.position(417,625.5);
  this.qu18o3.style('width', '150px');
  this.qu18o3.style('height', '50px');
  this.qu18o3.style('background', 'lightblue');
  this.qu18o3.style('color', rgb(240,0,0));
  this.qu18o3.style('font-size', '17.5px');
  this.qu18o2.position(1137,208.5);
  this.qu18o2.style('width', '150px');
  this.qu18o2.style('height', '50px');
  this.qu18o2.style('background', 'lightblue');
  this.qu18o2.style('color', rgb(240,0,0));
  this.qu18o2.style('font-size', '17.5px');
  this.qu18o4.position(1137,625.5);
  this.qu18o4.style('width', '150px');
  this.qu18o4.style('height', '50px');
  this.qu18o4.style('background', 'lightblue');   
  this.qu18o4.style('color', rgb(240,0,0));
  this.qu18o4.style('font-size', '17.5px');

    this.qu17.hide();
      this.qu17o1.hide();
      this.qu17o2.hide();
      this.qu17o3.hide();
      this.qu17o4.hide();
});

this.qu17o3.mousePressed(()=>{
  qCheck = 18;
  q17 = "wrong";
  

  this.qu18.position(10,80);
  this.qu18o1.position(417,208.5);
  this.qu18o1.style('width', '150px');
  this.qu18o1.style('height', '50px');
  this.qu18o1.style('background', 'lightblue');
  this.qu18o1.style('color', rgb(240,0,0));
  this.qu18o1.style('font-size', '17.5px');
  this.qu18o3.position(417,625.5);
  this.qu18o3.style('width', '150px');
  this.qu18o3.style('height', '50px');
  this.qu18o3.style('background', 'lightblue');
  this.qu18o3.style('color', rgb(240,0,0));
  this.qu18o3.style('font-size', '17.5px');
  this.qu18o2.position(1137,208.5);
  this.qu18o2.style('width', '150px');
  this.qu18o2.style('height', '50px');
  this.qu18o2.style('background', 'lightblue');
  this.qu18o2.style('color', rgb(240,0,0));
  this.qu18o2.style('font-size', '17.5px');
  this.qu18o4.position(1137,625.5);
  this.qu18o4.style('width', '150px');
  this.qu18o4.style('height', '50px');
  this.qu18o4.style('background', 'lightblue');   
  this.qu18o4.style('color', rgb(240,0,0));
  this.qu18o4.style('font-size', '17.5px');

    this.qu17.hide();
      this.qu17o1.hide();
      this.qu17o2.hide();
      this.qu17o3.hide();
      this.qu17o4.hide();
});

this.qu17o4.mousePressed(()=>{
  qCheck = 18;
  q17 = "wrong";
  

  this.qu18.position(10,80);
  this.qu18o1.position(417,208.5);
  this.qu18o1.style('width', '150px');
  this.qu18o1.style('height', '50px');
  this.qu18o1.style('background', 'lightblue');
  this.qu18o1.style('color', rgb(240,0,0));
  this.qu18o1.style('font-size', '17.5px');
  this.qu18o3.position(417,625.5);
  this.qu18o3.style('width', '150px');
  this.qu18o3.style('height', '50px');
  this.qu18o3.style('background', 'lightblue');
  this.qu18o3.style('color', rgb(240,0,0));
  this.qu18o3.style('font-size', '17.5px');
  this.qu18o2.position(1137,208.5);
  this.qu18o2.style('width', '150px');
  this.qu18o2.style('height', '50px');
  this.qu18o2.style('background', 'lightblue');
  this.qu18o2.style('color', rgb(240,0,0));
  this.qu18o2.style('font-size', '17.5px');
  this.qu18o4.position(1137,625.5);
  this.qu18o4.style('width', '150px');
  this.qu18o4.style('height', '50px');
  this.qu18o4.style('background', 'lightblue');   
  this.qu18o4.style('color', rgb(240,0,0));
  this.qu18o4.style('font-size', '17.5px');

    this.qu17.hide();
      this.qu17o1.hide();
      this.qu17o2.hide();
      this.qu17o3.hide();
      this.qu17o4.hide();
});

// ======================================
//                  qu18
// ======================================

this.qu18o1.mousePressed(()=>{
  qCheck = 19;
  q18 = "wrong";
  

  this.qu19.position(10,80);
  this.qu19o1.position(417,208.5);
  this.qu19o1.style('width', '150px');
  this.qu19o1.style('height', '50px');
  this.qu19o1.style('background', 'lightblue');
  this.qu19o1.style('color', rgb(240,0,0));
  this.qu19o1.style('font-size', '17.5px');
  this.qu19o3.position(417,625.5);
  this.qu19o3.style('width', '150px');
  this.qu19o3.style('height', '50px');
  this.qu19o3.style('background', 'lightblue');
  this.qu19o3.style('color', rgb(240,0,0));
  this.qu19o3.style('font-size', '17.5px');
  this.qu19o2.position(1137,208.5);
  this.qu19o2.style('width', '150px');
  this.qu19o2.style('height', '50px');
  this.qu19o2.style('background', 'lightblue');
  this.qu19o2.style('color', rgb(240,0,0));
  this.qu19o2.style('font-size', '17.5px');
  this.qu19o4.position(1137,625.5);
  this.qu19o4.style('width', '150px');
  this.qu19o4.style('height', '50px');
  this.qu19o4.style('background', 'lightblue');   
  this.qu19o4.style('color', rgb(240,0,0));
  this.qu19o4.style('font-size', '17.5px');

    this.qu18.hide();
      this.qu18o1.hide();
      this.qu18o2.hide();
      this.qu18o3.hide();
      this.qu18o4.hide();
});

this.qu18o2.mousePressed(()=>{
  qCheck = 19;
  q18 = "wrong";
  

  this.qu19.position(10,80);
  this.qu19o1.position(417,208.5);
  this.qu19o1.style('width', '150px');
  this.qu19o1.style('height', '50px');
  this.qu19o1.style('background', 'lightblue');
  this.qu19o1.style('color', rgb(240,0,0));
  this.qu19o1.style('font-size', '17.5px');
  this.qu19o3.position(417,625.5);
  this.qu19o3.style('width', '150px');
  this.qu19o3.style('height', '50px');
  this.qu19o3.style('background', 'lightblue');
  this.qu19o3.style('color', rgb(240,0,0));
  this.qu19o3.style('font-size', '17.5px');
  this.qu19o2.position(1137,208.5);
  this.qu19o2.style('width', '150px');
  this.qu19o2.style('height', '50px');
  this.qu19o2.style('background', 'lightblue');
  this.qu19o2.style('color', rgb(240,0,0));
  this.qu19o2.style('font-size', '17.5px');
  this.qu19o4.position(1137,625.5);
  this.qu19o4.style('width', '150px');
  this.qu19o4.style('height', '50px');
  this.qu19o4.style('background', 'lightblue');   
  this.qu19o4.style('color', rgb(240,0,0));
  this.qu19o4.style('font-size', '17.5px');

    this.qu18.hide();
      this.qu18o1.hide();
      this.qu18o2.hide();
      this.qu18o3.hide();
      this.qu18o4.hide();
});

this.qu18o3.mousePressed(()=>{
  qCheck = 19;
  q18 = "right";
  score += 1;

  this.qu19.position(10,80);
  this.qu19o1.position(417,208.5);
  this.qu19o1.style('width', '150px');
  this.qu19o1.style('height', '50px');
  this.qu19o1.style('background', 'lightblue');
  this.qu19o1.style('color', rgb(240,0,0));
  this.qu19o1.style('font-size', '17.5px');
  this.qu19o3.position(417,625.5);
  this.qu19o3.style('width', '150px');
  this.qu19o3.style('height', '50px');
  this.qu19o3.style('background', 'lightblue');
  this.qu19o3.style('color', rgb(240,0,0));
  this.qu19o3.style('font-size', '17.5px');
  this.qu19o2.position(1137,208.5);
  this.qu19o2.style('width', '150px');
  this.qu19o2.style('height', '50px');
  this.qu19o2.style('background', 'lightblue');
  this.qu19o2.style('color', rgb(240,0,0));
  this.qu19o2.style('font-size', '17.5px');
  this.qu19o4.position(1137,625.5);
  this.qu19o4.style('width', '150px');
  this.qu19o4.style('height', '50px');
  this.qu19o4.style('background', 'lightblue');   
  this.qu19o4.style('color', rgb(240,0,0));
  this.qu19o4.style('font-size', '17.5px');

    this.qu18.hide();
      this.qu18o1.hide();
      this.qu18o2.hide();
      this.qu18o3.hide();
      this.qu18o4.hide();
});

this.qu18o4.mousePressed(()=>{
  qCheck = 19;
  q18 = "wrong";
  

  this.qu19.position(10,80);
  this.qu19o1.position(417,208.5);
  this.qu19o1.style('width', '150px');
  this.qu19o1.style('height', '50px');
  this.qu19o1.style('background', 'lightblue');
  this.qu19o1.style('color', rgb(240,0,0));
  this.qu19o1.style('font-size', '17.5px');
  this.qu19o3.position(417,625.5);
  this.qu19o3.style('width', '150px');
  this.qu19o3.style('height', '50px');
  this.qu19o3.style('background', 'lightblue');
  this.qu19o3.style('color', rgb(240,0,0));
  this.qu19o3.style('font-size', '17.5px');
  this.qu19o2.position(1137,208.5);
  this.qu19o2.style('width', '150px');
  this.qu19o2.style('height', '50px');
  this.qu19o2.style('background', 'lightblue');
  this.qu19o2.style('color', rgb(240,0,0));
  this.qu19o2.style('font-size', '17.5px');
  this.qu19o4.position(1137,625.5);
  this.qu19o4.style('width', '150px');
  this.qu19o4.style('height', '50px');
  this.qu19o4.style('background', 'lightblue');   
  this.qu19o4.style('color', rgb(240,0,0));
  this.qu19o4.style('font-size', '17.5px');

    this.qu18.hide();
      this.qu18o1.hide();
      this.qu18o2.hide();
      this.qu18o3.hide();
      this.qu18o4.hide();
});


// ======================================
//                  qu19
// ======================================

this.qu19o1.mousePressed(()=>{
  qCheck = 20;
  q19 = "wrong";
  

  this.qu20.position(10,80);
  this.qu20o1.position(417,208.5);
  this.qu20o1.style('width', '150px');
  this.qu20o1.style('height', '50px');
  this.qu20o1.style('background', 'lightblue');
  this.qu20o1.style('color', rgb(240,0,0));
  this.qu20o1.style('font-size', '17.5px');
  this.qu20o3.position(417,625.5);
  this.qu20o3.style('width', '150px');
  this.qu20o3.style('height', '50px');
  this.qu20o3.style('background', 'lightblue');
  this.qu20o3.style('color', rgb(240,0,0));
  this.qu20o3.style('font-size', '17.5px');
  this.qu20o2.position(1137,208.5);
  this.qu20o2.style('width', '150px');
  this.qu20o2.style('height', '50px');
  this.qu20o2.style('background', 'lightblue');
  this.qu20o2.style('color', rgb(240,0,0));
  this.qu20o2.style('font-size', '17.5px');
  this.qu20o4.position(1137,625.5);
  this.qu20o4.style('width', '150px');
  this.qu20o4.style('height', '50px');
  this.qu20o4.style('background', 'lightblue');   
  this.qu20o4.style('color', rgb(240,0,0));
  this.qu20o4.style('font-size', '17.5px');

    this.qu19.hide();
      this.qu19o1.hide();
      this.qu19o2.hide();
      this.qu19o3.hide();
      this.qu19o4.hide();
});

this.qu19o2.mousePressed(()=>{
  qCheck = 20;
  q19 = "right";
  score += 1;

  this.qu20.position(10,80);
  this.qu20o1.position(417,208.5);
  this.qu20o1.style('width', '150px');
  this.qu20o1.style('height', '50px');
  this.qu20o1.style('background', 'lightblue');
  this.qu20o1.style('color', rgb(240,0,0));
  this.qu20o1.style('font-size', '17.5px');
  this.qu20o3.position(417,625.5);
  this.qu20o3.style('width', '150px');
  this.qu20o3.style('height', '50px');
  this.qu20o3.style('background', 'lightblue');
  this.qu20o3.style('color', rgb(240,0,0));
  this.qu20o3.style('font-size', '17.5px');
  this.qu20o2.position(1137,208.5);
  this.qu20o2.style('width', '150px');
  this.qu20o2.style('height', '50px');
  this.qu20o2.style('background', 'lightblue');
  this.qu20o2.style('color', rgb(240,0,0));
  this.qu20o2.style('font-size', '17.5px');
  this.qu20o4.position(1137,625.5);
  this.qu20o4.style('width', '150px');
  this.qu20o4.style('height', '50px');
  this.qu20o4.style('background', 'lightblue');   
  this.qu20o4.style('color', rgb(240,0,0));
  this.qu20o4.style('font-size', '17.5px');

    this.qu19.hide();
      this.qu19o1.hide();
      this.qu19o2.hide();
      this.qu19o3.hide();
      this.qu19o4.hide();
});

this.qu19o3.mousePressed(()=>{
  qCheck = 20;
  q19 = "wrong";
  

  this.qu20.position(10,80);
  this.qu20o1.position(417,208.5);
  this.qu20o1.style('width', '150px');
  this.qu20o1.style('height', '50px');
  this.qu20o1.style('background', 'lightblue');
  this.qu20o1.style('color', rgb(240,0,0));
  this.qu20o1.style('font-size', '17.5px');
  this.qu20o3.position(417,625.5);
  this.qu20o3.style('width', '150px');
  this.qu20o3.style('height', '50px');
  this.qu20o3.style('background', 'lightblue');
  this.qu20o3.style('color', rgb(240,0,0));
  this.qu20o3.style('font-size', '17.5px');
  this.qu20o2.position(1137,208.5);
  this.qu20o2.style('width', '150px');
  this.qu20o2.style('height', '50px');
  this.qu20o2.style('background', 'lightblue');
  this.qu20o2.style('color', rgb(240,0,0));
  this.qu20o2.style('font-size', '17.5px');
  this.qu20o4.position(1137,625.5);
  this.qu20o4.style('width', '150px');
  this.qu20o4.style('height', '50px');
  this.qu20o4.style('background', 'lightblue');   
  this.qu20o4.style('color', rgb(240,0,0));
  this.qu20o4.style('font-size', '17.5px');

    this.qu19.hide();
      this.qu19o1.hide();
      this.qu19o2.hide();
      this.qu19o3.hide();
      this.qu19o4.hide();
});

this.qu19o4.mousePressed(()=>{
  qCheck = 20;
  q19 = "wrong";
  

  this.qu20.position(10,80);
  this.qu20o1.position(417,208.5);
  this.qu20o1.style('width', '150px');
  this.qu20o1.style('height', '50px');
  this.qu20o1.style('background', 'lightblue');
  this.qu20o1.style('color', rgb(240,0,0));
  this.qu20o1.style('font-size', '17.5px');
  this.qu20o3.position(417,625.5);
  this.qu20o3.style('width', '150px');
  this.qu20o3.style('height', '50px');
  this.qu20o3.style('background', 'lightblue');
  this.qu20o3.style('color', rgb(240,0,0));
  this.qu20o3.style('font-size', '17.5px');
  this.qu20o2.position(1137,208.5);
  this.qu20o2.style('width', '150px');
  this.qu20o2.style('height', '50px');
  this.qu20o2.style('background', 'lightblue');
  this.qu20o2.style('color', rgb(240,0,0));
  this.qu20o2.style('font-size', '17.5px');
  this.qu20o4.position(1137,625.5);
  this.qu20o4.style('width', '150px');
  this.qu20o4.style('height', '50px');
  this.qu20o4.style('background', 'lightblue');   
  this.qu20o4.style('color', rgb(240,0,0));
  this.qu20o4.style('font-size', '17.5px');

    this.qu19.hide();
      this.qu19o1.hide();
      this.qu19o2.hide();
      this.qu19o3.hide();
      this.qu19o4.hide();
});

// ======================================
//                  qu20
// ======================================

this.qu20o1.mousePressed(()=>{
  qCheck = 21;
  q20 = "right";
  score += 1;

  this.qu21.position(10,80);
  this.qu21o1.position(417,208.5);
  this.qu21o1.style('width', '150px');
  this.qu21o1.style('height', '50px');
  this.qu21o1.style('background', 'lightblue');
  this.qu21o1.style('color', rgb(240,0,0));
  this.qu21o1.style('font-size', '17.5px');
  this.qu21o3.position(417,625.5);
  this.qu21o3.style('width', '150px');
  this.qu21o3.style('height', '50px');
  this.qu21o3.style('background', 'lightblue');
  this.qu21o3.style('color', rgb(240,0,0));
  this.qu21o3.style('font-size', '17.5px');
  this.qu21o2.position(1137,208.5);
  this.qu21o2.style('width', '150px');
  this.qu21o2.style('height', '50px');
  this.qu21o2.style('background', 'lightblue');
  this.qu21o2.style('color', rgb(240,0,0));
  this.qu21o2.style('font-size', '17.5px');
  this.qu21o4.position(1137,625.5);
  this.qu21o4.style('width', '150px');
  this.qu21o4.style('height', '50px');
  this.qu21o4.style('background', 'lightblue');   
  this.qu21o4.style('color', rgb(240,0,0));
  this.qu21o4.style('font-size', '17.5px');

    this.qu20.hide();
      this.qu20o1.hide();
      this.qu20o2.hide();
      this.qu20o3.hide();
      this.qu20o4.hide();
});

this.qu20o2.mousePressed(()=>{
  qCheck = 21;
  q20 = "wrong";
  

  this.qu21.position(10,80);
  this.qu21o1.position(417,208.5);
  this.qu21o1.style('width', '150px');
  this.qu21o1.style('height', '50px');
  this.qu21o1.style('background', 'lightblue');
  this.qu21o1.style('color', rgb(240,0,0));
  this.qu21o1.style('font-size', '17.5px');
  this.qu21o3.position(417,625.5);
  this.qu21o3.style('width', '150px');
  this.qu21o3.style('height', '50px');
  this.qu21o3.style('background', 'lightblue');
  this.qu21o3.style('color', rgb(240,0,0));
  this.qu21o3.style('font-size', '17.5px');
  this.qu21o2.position(1137,208.5);
  this.qu21o2.style('width', '150px');
  this.qu21o2.style('height', '50px');
  this.qu21o2.style('background', 'lightblue');
  this.qu21o2.style('color', rgb(240,0,0));
  this.qu21o2.style('font-size', '17.5px');
  this.qu21o4.position(1137,625.5);
  this.qu21o4.style('width', '150px');
  this.qu21o4.style('height', '50px');
  this.qu21o4.style('background', 'lightblue');   
  this.qu21o4.style('color', rgb(240,0,0));
  this.qu21o4.style('font-size', '17.5px');

    this.qu20.hide();
      this.qu20o1.hide();
      this.qu20o2.hide();
      this.qu20o3.hide();
      this.qu20o4.hide();
});

this.qu20o3.mousePressed(()=>{
  qCheck = 21;
  q20 = "wrong";
  

  this.qu21.position(10,80);
  this.qu21o1.position(417,208.5);
  this.qu21o1.style('width', '150px');
  this.qu21o1.style('height', '50px');
  this.qu21o1.style('background', 'lightblue');
  this.qu21o1.style('color', rgb(240,0,0));
  this.qu21o1.style('font-size', '17.5px');
  this.qu21o3.position(417,625.5);
  this.qu21o3.style('width', '150px');
  this.qu21o3.style('height', '50px');
  this.qu21o3.style('background', 'lightblue');
  this.qu21o3.style('color', rgb(240,0,0));
  this.qu21o3.style('font-size', '17.5px');
  this.qu21o2.position(1137,208.5);
  this.qu21o2.style('width', '150px');
  this.qu21o2.style('height', '50px');
  this.qu21o2.style('background', 'lightblue');
  this.qu21o2.style('color', rgb(240,0,0));
  this.qu21o2.style('font-size', '17.5px');
  this.qu21o4.position(1137,625.5);
  this.qu21o4.style('width', '150px');
  this.qu21o4.style('height', '50px');
  this.qu21o4.style('background', 'lightblue');   
  this.qu21o4.style('color', rgb(240,0,0));
  this.qu21o4.style('font-size', '17.5px');

    this.qu20.hide();
      this.qu20o1.hide();
      this.qu20o2.hide();
      this.qu20o3.hide();
      this.qu20o4.hide();
});

this.qu20o4.mousePressed(()=>{
  qCheck = 21;
  q20 = "wrong";
  

  this.qu21.position(10,80);
  this.qu21o1.position(417,208.5);
  this.qu21o1.style('width', '150px');
  this.qu21o1.style('height', '50px');
  this.qu21o1.style('background', 'lightblue');
  this.qu21o1.style('color', rgb(240,0,0));
  this.qu21o1.style('font-size', '17.5px');
  this.qu21o3.position(417,625.5);
  this.qu21o3.style('width', '150px');
  this.qu21o3.style('height', '50px');
  this.qu21o3.style('background', 'lightblue');
  this.qu21o3.style('color', rgb(240,0,0));
  this.qu21o3.style('font-size', '17.5px');
  this.qu21o2.position(1137,208.5);
  this.qu21o2.style('width', '150px');
  this.qu21o2.style('height', '50px');
  this.qu21o2.style('background', 'lightblue');
  this.qu21o2.style('color', rgb(240,0,0));
  this.qu21o2.style('font-size', '17.5px');
  this.qu21o4.position(1137,625.5);
  this.qu21o4.style('width', '150px');
  this.qu21o4.style('height', '50px');
  this.qu21o4.style('background', 'lightblue');   
  this.qu21o4.style('color', rgb(240,0,0));
  this.qu21o4.style('font-size', '17.5px');

    this.qu20.hide();
      this.qu20o1.hide();
      this.qu20o2.hide();
      this.qu20o3.hide();
      this.qu20o4.hide();
});

// ======================================
//                  qu21
// ======================================

this.qu21o1.mousePressed(()=>{
  qCheck = 22;
  q21 = "right";
  score += 1;

  this.qu22.position(10,80);
  this.qu22o1.position(417,208.5);
  this.qu22o1.style('width', '150px');
  this.qu22o1.style('height', '50px');
  this.qu22o1.style('background', 'lightblue');
  this.qu22o1.style('color', rgb(240,0,0));
  this.qu22o1.style('font-size', '17.5px');
  this.qu22o3.position(417,625.5);
  this.qu22o3.style('width', '150px');
  this.qu22o3.style('height', '50px');
  this.qu22o3.style('background', 'lightblue');
  this.qu22o3.style('color', rgb(240,0,0));
  this.qu22o3.style('font-size', '15px');
  this.qu22o2.position(1137,208.5);
  this.qu22o2.style('width', '150px');
  this.qu22o2.style('height', '50px');
  this.qu22o2.style('background', 'lightblue');
  this.qu22o2.style('color', rgb(240,0,0));
  this.qu22o2.style('font-size', '17.5px');
  this.qu22o4.position(1137,625.5);
  this.qu22o4.style('width', '150px');
  this.qu22o4.style('height', '50px');
  this.qu22o4.style('background', 'lightblue');   
  this.qu22o4.style('color', rgb(240,0,0));
  this.qu22o4.style('font-size', '17.5px');

    this.qu21.hide();
      this.qu21o1.hide();
      this.qu21o2.hide();
      this.qu21o3.hide();
      this.qu21o4.hide();
});

this.qu21o2.mousePressed(()=>{
  qCheck = 22;
  q21 = "wrong";
  

  this.qu22.position(10,80);
  this.qu22o1.position(417,208.5);
  this.qu22o1.style('width', '150px');
  this.qu22o1.style('height', '50px');
  this.qu22o1.style('background', 'lightblue');
  this.qu22o1.style('color', rgb(240,0,0));
  this.qu22o1.style('font-size', '17.5px');
  this.qu22o3.position(417,625.5);
  this.qu22o3.style('width', '150px');
  this.qu22o3.style('height', '50px');
  this.qu22o3.style('background', 'lightblue');
  this.qu22o3.style('color', rgb(240,0,0));
  this.qu22o3.style('font-size', '15px');
  this.qu22o2.position(1137,208.5);
  this.qu22o2.style('width', '150px');
  this.qu22o2.style('height', '50px');
  this.qu22o2.style('background', 'lightblue');
  this.qu22o2.style('color', rgb(240,0,0));
  this.qu22o2.style('font-size', '17.5px');
  this.qu22o4.position(1137,625.5);
  this.qu22o4.style('width', '150px');
  this.qu22o4.style('height', '50px');
  this.qu22o4.style('background', 'lightblue');   
  this.qu22o4.style('color', rgb(240,0,0));
  this.qu22o4.style('font-size', '17.5px');

    this.qu21.hide();
      this.qu21o1.hide();
      this.qu21o2.hide();
      this.qu21o3.hide();
      this.qu21o4.hide();
});

this.qu21o3.mousePressed(()=>{
  qCheck = 22;
  q21 = "wrong";
  

  this.qu22.position(10,80);
  this.qu22o1.position(417,208.5);
  this.qu22o1.style('width', '150px');
  this.qu22o1.style('height', '50px');
  this.qu22o1.style('background', 'lightblue');
  this.qu22o1.style('color', rgb(240,0,0));
  this.qu22o1.style('font-size', '17.5px');
  this.qu22o3.position(417,625.5);
  this.qu22o3.style('width', '150px');
  this.qu22o3.style('height', '50px');
  this.qu22o3.style('background', 'lightblue');
  this.qu22o3.style('color', rgb(240,0,0));
  this.qu22o3.style('font-size', '15px');
  this.qu22o2.position(1137,208.5);
  this.qu22o2.style('width', '150px');
  this.qu22o2.style('height', '50px');
  this.qu22o2.style('background', 'lightblue');
  this.qu22o2.style('color', rgb(240,0,0));
  this.qu22o2.style('font-size', '17.5px');
  this.qu22o4.position(1137,625.5);
  this.qu22o4.style('width', '150px');
  this.qu22o4.style('height', '50px');
  this.qu22o4.style('background', 'lightblue');   
  this.qu22o4.style('color', rgb(240,0,0));
  this.qu22o4.style('font-size', '17.5px');

    this.qu21.hide();
      this.qu21o1.hide();
      this.qu21o2.hide();
      this.qu21o3.hide();
      this.qu21o4.hide();
});

this.qu21o4.mousePressed(()=>{
  qCheck = 22;
  q21 = "wrong";
  

  this.qu22.position(10,80);
  this.qu22o1.position(417,208.5);
  this.qu22o1.style('width', '150px');
  this.qu22o1.style('height', '50px');
  this.qu22o1.style('background', 'lightblue');
  this.qu22o1.style('color', rgb(240,0,0));
  this.qu22o1.style('font-size', '17.5px');
  this.qu22o3.position(417,625.5);
  this.qu22o3.style('width', '150px');
  this.qu22o3.style('height', '50px');
  this.qu22o3.style('background', 'lightblue');
  this.qu22o3.style('color', rgb(240,0,0));
  this.qu22o3.style('font-size', '15px');
  this.qu22o2.position(1137,208.5);
  this.qu22o2.style('width', '150px');
  this.qu22o2.style('height', '50px');
  this.qu22o2.style('background', 'lightblue');
  this.qu22o2.style('color', rgb(240,0,0));
  this.qu22o2.style('font-size', '17.5px');
  this.qu22o4.position(1137,625.5);
  this.qu22o4.style('width', '150px');
  this.qu22o4.style('height', '50px');
  this.qu22o4.style('background', 'lightblue');   
  this.qu22o4.style('color', rgb(240,0,0));
  this.qu22o4.style('font-size', '17.5px');

    this.qu21.hide();
      this.qu21o1.hide();
      this.qu21o2.hide();
      this.qu21o3.hide();
      this.qu21o4.hide();
});

// ======================================
//                  qu22
// ======================================

this.qu22o1.mousePressed(()=>{
  qCheck = 23;
  q22 = "wrong";
  

  this.qu23.position(10,80);
  this.qu23o1.position(417,208.5);
  this.qu23o1.style('width', '150px');
  this.qu23o1.style('height', '50px');
  this.qu23o1.style('background', 'lightblue');
  this.qu23o1.style('color', rgb(240,0,0));
  this.qu23o1.style('font-size', '17.5px');
  this.qu23o3.position(417,625.5);
  this.qu23o3.style('width', '150px');
  this.qu23o3.style('height', '50px');
  this.qu23o3.style('background', 'lightblue');
  this.qu23o3.style('color', rgb(240,0,0));
  this.qu23o3.style('font-size', '13px');
  this.qu23o2.position(1137,208.5);
  this.qu23o2.style('width', '150px');
  this.qu23o2.style('height', '50px');
  this.qu23o2.style('background', 'lightblue');
  this.qu23o2.style('color', rgb(240,0,0));
  this.qu23o2.style('font-size', '17.5px');
  this.qu23o4.position(1137,625.5);
  this.qu23o4.style('width', '150px');
  this.qu23o4.style('height', '50px');
  this.qu23o4.style('background', 'lightblue');   
  this.qu23o4.style('color', rgb(240,0,0));
  this.qu23o4.style('font-size', '17.5px');

    this.qu22.hide();
      this.qu22o1.hide();
      this.qu22o2.hide();
      this.qu22o3.hide();
      this.qu22o4.hide();
});

this.qu22o2.mousePressed(()=>{
  qCheck = 23;
  q22 = "wrong";
  

  this.qu23.position(10,80);
  this.qu23o1.position(417,208.5);
  this.qu23o1.style('width', '150px');
  this.qu23o1.style('height', '50px');
  this.qu23o1.style('background', 'lightblue');
  this.qu23o1.style('color', rgb(240,0,0));
  this.qu23o1.style('font-size', '17.5px');
  this.qu23o3.position(417,625.5);
  this.qu23o3.style('width', '150px');
  this.qu23o3.style('height', '50px');
  this.qu23o3.style('background', 'lightblue');
  this.qu23o3.style('color', rgb(240,0,0));
  this.qu23o3.style('font-size', '13px');
  this.qu23o2.position(1137,208.5);
  this.qu23o2.style('width', '150px');
  this.qu23o2.style('height', '50px');
  this.qu23o2.style('background', 'lightblue');
  this.qu23o2.style('color', rgb(240,0,0));
  this.qu23o2.style('font-size', '17.5px');
  this.qu23o4.position(1137,625.5);
  this.qu23o4.style('width', '150px');
  this.qu23o4.style('height', '50px');
  this.qu23o4.style('background', 'lightblue');   
  this.qu23o4.style('color', rgb(240,0,0));
  this.qu23o4.style('font-size', '17.5px');

    this.qu22.hide();
      this.qu22o1.hide();
      this.qu22o2.hide();
      this.qu22o3.hide();
      this.qu22o4.hide();
});

this.qu22o3.mousePressed(()=>{
  qCheck = 23;
  q22 = "wrong";
  

  this.qu23.position(10,80);
  this.qu23o1.position(417,208.5);
  this.qu23o1.style('width', '150px');
  this.qu23o1.style('height', '50px');
  this.qu23o1.style('background', 'lightblue');
  this.qu23o1.style('color', rgb(240,0,0));
  this.qu23o1.style('font-size', '17.5px');
  this.qu23o3.position(417,625.5);
  this.qu23o3.style('width', '150px');
  this.qu23o3.style('height', '50px');
  this.qu23o3.style('background', 'lightblue');
  this.qu23o3.style('color', rgb(240,0,0));
  this.qu23o3.style('font-size', '13px');
  this.qu23o2.position(1137,208.5);
  this.qu23o2.style('width', '150px');
  this.qu23o2.style('height', '50px');
  this.qu23o2.style('background', 'lightblue');
  this.qu23o2.style('color', rgb(240,0,0));
  this.qu23o2.style('font-size', '17.5px');
  this.qu23o4.position(1137,625.5);
  this.qu23o4.style('width', '150px');
  this.qu23o4.style('height', '50px');
  this.qu23o4.style('background', 'lightblue');   
  this.qu23o4.style('color', rgb(240,0,0));
  this.qu23o4.style('font-size', '17.5px');

    this.qu22.hide();
      this.qu22o1.hide();
      this.qu22o2.hide();
      this.qu22o3.hide();
      this.qu22o4.hide();
});

this.qu22o4.mousePressed(()=>{
  qCheck = 23;
  q22 = "right";
  score += 1;

  this.qu23.position(10,80);
  this.qu23o1.position(417,208.5);
  this.qu23o1.style('width', '150px');
  this.qu23o1.style('height', '50px');
  this.qu23o1.style('background', 'lightblue');
  this.qu23o1.style('color', rgb(240,0,0));
  this.qu23o1.style('font-size', '17.5px');
  this.qu23o3.position(417,625.5);
  this.qu23o3.style('width', '150px');
  this.qu23o3.style('height', '50px');
  this.qu23o3.style('background', 'lightblue');
  this.qu23o3.style('color', rgb(240,0,0));
  this.qu23o3.style('font-size', '13px');
  this.qu23o2.position(1137,208.5);
  this.qu23o2.style('width', '150px');
  this.qu23o2.style('height', '50px');
  this.qu23o2.style('background', 'lightblue');
  this.qu23o2.style('color', rgb(240,0,0));
  this.qu23o2.style('font-size', '17.5px');
  this.qu23o4.position(1137,625.5);
  this.qu23o4.style('width', '150px');
  this.qu23o4.style('height', '50px');
  this.qu23o4.style('background', 'lightblue');   
  this.qu23o4.style('color', rgb(240,0,0));
  this.qu23o4.style('font-size', '17.5px');

    this.qu22.hide();
      this.qu22o1.hide();
      this.qu22o2.hide();
      this.qu22o3.hide();
      this.qu22o4.hide();
});

// ======================================
//                  qu23
// ======================================

this.qu23o1.mousePressed(()=>{
  qCheck = 24;
  q23 = "wrong";
  

  this.qu24.position(10,80);
  this.qu24o1.position(417,208.5);
  this.qu24o1.style('width', '150px');
  this.qu24o1.style('height', '50px');
  this.qu24o1.style('background', 'lightblue');
  this.qu24o1.style('color', rgb(240,0,0));
  this.qu24o1.style('font-size', '17.5px');
  this.qu24o3.position(417,625.5);
  this.qu24o3.style('width', '150px');
  this.qu24o3.style('height', '50px');
  this.qu24o3.style('background', 'lightblue');
  this.qu24o3.style('color', rgb(240,0,0));
  this.qu24o3.style('font-size', '17.5px');
  this.qu24o2.position(1137,208.5);
  this.qu24o2.style('width', '150px');
  this.qu24o2.style('height', '50px');
  this.qu24o2.style('background', 'lightblue');
  this.qu24o2.style('color', rgb(240,0,0));
  this.qu24o2.style('font-size', '17.5px');
  this.qu24o4.position(1137,625.5);
  this.qu24o4.style('width', '150px');
  this.qu24o4.style('height', '50px');
  this.qu24o4.style('background', 'lightblue');   
  this.qu24o4.style('color', rgb(240,0,0));
  this.qu24o4.style('font-size', '17.5px');

    this.qu23.hide();
      this.qu23o1.hide();
      this.qu23o2.hide();
      this.qu23o3.hide();
      this.qu23o4.hide();
});

this.qu23o2.mousePressed(()=>{
  qCheck = 24;
  q23 = "wrong";
  

  this.qu24.position(10,80);
  this.qu24o1.position(417,208.5);
  this.qu24o1.style('width', '150px');
  this.qu24o1.style('height', '50px');
  this.qu24o1.style('background', 'lightblue');
  this.qu24o1.style('color', rgb(240,0,0));
  this.qu24o1.style('font-size', '17.5px');
  this.qu24o3.position(417,625.5);
  this.qu24o3.style('width', '150px');
  this.qu24o3.style('height', '50px');
  this.qu24o3.style('background', 'lightblue');
  this.qu24o3.style('color', rgb(240,0,0));
  this.qu24o3.style('font-size', '17.5px');
  this.qu24o2.position(1137,208.5);
  this.qu24o2.style('width', '150px');
  this.qu24o2.style('height', '50px');
  this.qu24o2.style('background', 'lightblue');
  this.qu24o2.style('color', rgb(240,0,0));
  this.qu24o2.style('font-size', '17.5px');
  this.qu24o4.position(1137,625.5);
  this.qu24o4.style('width', '150px');
  this.qu24o4.style('height', '50px');
  this.qu24o4.style('background', 'lightblue');   
  this.qu24o4.style('color', rgb(240,0,0));
  this.qu24o4.style('font-size', '17.5px');

    this.qu23.hide();
      this.qu23o1.hide();
      this.qu23o2.hide();
      this.qu23o3.hide();
      this.qu23o4.hide();
});

this.qu23o3.mousePressed(()=>{
  qCheck = 24;
  q23 = "right";
  score += 1;

  this.qu24.position(10,80);
  this.qu24o1.position(417,208.5);
  this.qu24o1.style('width', '150px');
  this.qu24o1.style('height', '50px');
  this.qu24o1.style('background', 'lightblue');
  this.qu24o1.style('color', rgb(240,0,0));
  this.qu24o1.style('font-size', '17.5px');
  this.qu24o3.position(417,625.5);
  this.qu24o3.style('width', '150px');
  this.qu24o3.style('height', '50px');
  this.qu24o3.style('background', 'lightblue');
  this.qu24o3.style('color', rgb(240,0,0));
  this.qu24o3.style('font-size', '17.5px');
  this.qu24o2.position(1137,208.5);
  this.qu24o2.style('width', '150px');
  this.qu24o2.style('height', '50px');
  this.qu24o2.style('background', 'lightblue');
  this.qu24o2.style('color', rgb(240,0,0));
  this.qu24o2.style('font-size', '17.5px');
  this.qu24o4.position(1137,625.5);
  this.qu24o4.style('width', '150px');
  this.qu24o4.style('height', '50px');
  this.qu24o4.style('background', 'lightblue');   
  this.qu24o4.style('color', rgb(240,0,0));
  this.qu24o4.style('font-size', '17.5px');

    this.qu23.hide();
      this.qu23o1.hide();
      this.qu23o2.hide();
      this.qu23o3.hide();
      this.qu23o4.hide();
});

this.qu23o4.mousePressed(()=>{
  qCheck = 24;
  q23 = "wrong";
  

  this.qu24.position(10,80);
  this.qu24o1.position(417,208.5);
  this.qu24o1.style('width', '150px');
  this.qu24o1.style('height', '50px');
  this.qu24o1.style('background', 'lightblue');
  this.qu24o1.style('color', rgb(240,0,0));
  this.qu24o1.style('font-size', '17.5px');
  this.qu24o3.position(417,625.5);
  this.qu24o3.style('width', '150px');
  this.qu24o3.style('height', '50px');
  this.qu24o3.style('background', 'lightblue');
  this.qu24o3.style('color', rgb(240,0,0));
  this.qu24o3.style('font-size', '17.5px');
  this.qu24o2.position(1137,208.5);
  this.qu24o2.style('width', '150px');
  this.qu24o2.style('height', '50px');
  this.qu24o2.style('background', 'lightblue');
  this.qu24o2.style('color', rgb(240,0,0));
  this.qu24o2.style('font-size', '17.5px');
  this.qu24o4.position(1137,625.5);
  this.qu24o4.style('width', '150px');
  this.qu24o4.style('height', '50px');
  this.qu24o4.style('background', 'lightblue');   
  this.qu24o4.style('color', rgb(240,0,0));
  this.qu24o4.style('font-size', '17.5px');

    this.qu23.hide();
      this.qu23o1.hide();
      this.qu23o2.hide();
      this.qu23o3.hide();
      this.qu23o4.hide();
});

// ======================================
//                  qu24
// ======================================

this.qu24o1.mousePressed(()=>{
  qCheck = 25;
  q24 = "wrong";
  

  this.qu25.position(10,80);
  this.qu25o1.position(417,208.5);
  this.qu25o1.style('width', '150px');
  this.qu25o1.style('height', '50px');
  this.qu25o1.style('background', 'lightblue');
  this.qu25o1.style('color', rgb(240,0,0));
  this.qu25o1.style('font-size', '17.5px');
  this.qu25o3.position(417,625.5);
  this.qu25o3.style('width', '150px');
  this.qu25o3.style('height', '50px');
  this.qu25o3.style('background', 'lightblue');
  this.qu25o3.style('color', rgb(240,0,0));
  this.qu25o3.style('font-size', '17.5px');
  this.qu25o2.position(1137,208.5);
  this.qu25o2.style('width', '150px');
  this.qu25o2.style('height', '50px');
  this.qu25o2.style('background', 'lightblue');
  this.qu25o2.style('color', rgb(240,0,0));
  this.qu25o2.style('font-size', '17.5px');
  this.qu25o4.position(1137,625.5);
  this.qu25o4.style('width', '150px');
  this.qu25o4.style('height', '50px');
  this.qu25o4.style('background', 'lightblue');   
  this.qu25o4.style('color', rgb(240,0,0));
  this.qu25o4.style('font-size', '17.5px');

    this.qu24.hide();
      this.qu24o1.hide();
      this.qu24o2.hide();
      this.qu24o3.hide();
      this.qu24o4.hide();
});

this.qu24o2.mousePressed(()=>{
  qCheck = 25;
  q24 = "wrong";
  

  this.qu25.position(10,80);
  this.qu25o1.position(417,208.5);
  this.qu25o1.style('width', '150px');
  this.qu25o1.style('height', '50px');
  this.qu25o1.style('background', 'lightblue');
  this.qu25o1.style('color', rgb(240,0,0));
  this.qu25o1.style('font-size', '17.5px');
  this.qu25o3.position(417,625.5);
  this.qu25o3.style('width', '150px');
  this.qu25o3.style('height', '50px');
  this.qu25o3.style('background', 'lightblue');
  this.qu25o3.style('color', rgb(240,0,0));
  this.qu25o3.style('font-size', '17.5px');
  this.qu25o2.position(1137,208.5);
  this.qu25o2.style('width', '150px');
  this.qu25o2.style('height', '50px');
  this.qu25o2.style('background', 'lightblue');
  this.qu25o2.style('color', rgb(240,0,0));
  this.qu25o2.style('font-size', '17.5px');
  this.qu25o4.position(1137,625.5);
  this.qu25o4.style('width', '150px');
  this.qu25o4.style('height', '50px');
  this.qu25o4.style('background', 'lightblue');   
  this.qu25o4.style('color', rgb(240,0,0));
  this.qu25o4.style('font-size', '17.5px');

    this.qu24.hide();
      this.qu24o1.hide();
      this.qu24o2.hide();
      this.qu24o3.hide();
      this.qu24o4.hide();
});

this.qu24o3.mousePressed(()=>{
  qCheck = 25;
  q24 = "right";
  score += 1;

  this.qu25.position(10,80);
  this.qu25o1.position(417,208.5);
  this.qu25o1.style('width', '150px');
  this.qu25o1.style('height', '50px');
  this.qu25o1.style('background', 'lightblue');
  this.qu25o1.style('color', rgb(240,0,0));
  this.qu25o1.style('font-size', '17.5px');
  this.qu25o3.position(417,625.5);
  this.qu25o3.style('width', '150px');
  this.qu25o3.style('height', '50px');
  this.qu25o3.style('background', 'lightblue');
  this.qu25o3.style('color', rgb(240,0,0));
  this.qu25o3.style('font-size', '17.5px');
  this.qu25o2.position(1137,208.5);
  this.qu25o2.style('width', '150px');
  this.qu25o2.style('height', '50px');
  this.qu25o2.style('background', 'lightblue');
  this.qu25o2.style('color', rgb(240,0,0));
  this.qu25o2.style('font-size', '17.5px');
  this.qu25o4.position(1137,625.5);
  this.qu25o4.style('width', '150px');
  this.qu25o4.style('height', '50px');
  this.qu25o4.style('background', 'lightblue');   
  this.qu25o4.style('color', rgb(240,0,0));
  this.qu25o4.style('font-size', '17.5px');

    this.qu24.hide();
      this.qu24o1.hide();
      this.qu24o2.hide();
      this.qu24o3.hide();
      this.qu24o4.hide();
});

this.qu24o4.mousePressed(()=>{
  qCheck = 25;
  q24 = "wrong";
  

  this.qu25.position(10,80);
  this.qu25o1.position(417,208.5);
  this.qu25o1.style('width', '150px');
  this.qu25o1.style('height', '50px');
  this.qu25o1.style('background', 'lightblue');
  this.qu25o1.style('color', rgb(240,0,0));
  this.qu25o1.style('font-size', '17.5px');
  this.qu25o3.position(417,625.5);
  this.qu25o3.style('width', '150px');
  this.qu25o3.style('height', '50px');
  this.qu25o3.style('background', 'lightblue');
  this.qu25o3.style('color', rgb(240,0,0));
  this.qu25o3.style('font-size', '17.5px');
  this.qu25o2.position(1137,208.5);
  this.qu25o2.style('width', '150px');
  this.qu25o2.style('height', '50px');
  this.qu25o2.style('background', 'lightblue');
  this.qu25o2.style('color', rgb(240,0,0));
  this.qu25o2.style('font-size', '17.5px');
  this.qu25o4.position(1137,625.5);
  this.qu25o4.style('width', '150px');
  this.qu25o4.style('height', '50px');
  this.qu25o4.style('background', 'lightblue');   
  this.qu25o4.style('color', rgb(240,0,0));
  this.qu25o4.style('font-size', '17.5px');

    this.qu24.hide();
      this.qu24o1.hide();
      this.qu24o2.hide();
      this.qu24o3.hide();
      this.qu24o4.hide();
});

// ======================================
//             qu25 to result
// ======================================

this.qu25o1.mousePressed(()=>{
  qCheck = 26;
  q25 = "wrong";
  
  this.tellingScore.html("You have scored " + score + "/25");
  this.tellingScore.position(displayWidth/2 - 100,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  //this.tellingScore.style('color', rgb(240,0,0));

  this.tellingAboutUpdates.html("Stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "darkred");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu25.hide();
      this.qu25o1.hide();
      this.qu25o2.hide();
      this.qu25o3.hide();
      this.qu25o4.hide();

});

this.qu25o2.mousePressed(()=>{
  qCheck = 26;
  q25 = "right";
  score += 1;

  this.tellingScore.html("You have scored " + score + "/25");
  this.tellingScore.position(displayWidth/2 - 100,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  //this.tellingScore.style('color', rgb(240,0,0));

  this.tellingAboutUpdates.html("Stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "darkred");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu25.hide();
      this.qu25o1.hide();
      this.qu25o2.hide();
      this.qu25o3.hide();
      this.qu25o4.hide();
});

this.qu25o3.mousePressed(()=>{
  qCheck = 26;
  q25 = "wrong";
  
  this.tellingScore.html("You have scored " + score + "/25");
  this.tellingScore.position(displayWidth/2 - 100,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  //this.tellingScore.style('color', rgb(240,0,0));

  this.tellingAboutUpdates.html("Stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "darkred");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu25.hide();
      this.qu25o1.hide();
      this.qu25o2.hide();
      this.qu25o3.hide();
      this.qu25o4.hide();
});

this.qu25o4.mousePressed(()=>{
  qCheck = 26;
  q25 = "wrong";
  
  this.tellingScore.html("You have scored " + score + "/25");
  this.tellingScore.position(displayWidth/2 - 100,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  //this.tellingScore.style('color', rgb(240,0,0));

  this.tellingAboutUpdates.html("Stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "darkred");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu25.hide();
      this.qu25o1.hide();
      this.qu25o2.hide();
      this.qu25o3.hide();
      this.qu25o4.hide();
});



console.log(qCheck);












  }
  

}
