# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 01

```javascript 

const buttons=document.querySelectorAll('.button')
// console.log(buttons)
const body=document.querySelector("body")
// console.log(body)
buttons.forEach(function(button){
  button.addEventListener('click', function (e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor = e.target.id
    } 
    else if(e.target.id==='yellow'){
      body.style.backgroundColor = e.target.id
    } 
    else if(e.target.id==='blue'){
      body.style.backgroundColor = e.target.id
    } 
    else if(e.target.id==='white'){
      body.style.backgroundColor = e.target.id
    }  
  })

});

```



## Project 02

```javascript
const form = document.querySelector('form')
form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML="please give a valid height";
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML="please give a valid height";
  } else {
    const bmi =(weight / ((height*height)/10000)).toFixed(2);
    //show results
    let message= "Normal Range";
    if(bmi< 18.6){
      message ="Under weight";
    }
    else if( bmi>24.9){
      message ="Overweight";
    }
    results.innerHTML = `<span>${bmi +" "+ message}</span>`
  }
})

```

## Project 03

```javascript
const clock=document.querySelector('#clock')
console.log(clock)
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```

## Project 04

```javascript
let random=parseInt(Math.random()*100+1)
console.log(random)

const userInput= document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot= document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const loeOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p= document.createElement('p');

let previousGuesses =[];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess (guess){
  if(isNaN(guess)){

    alert("Please enter a valid number")
  }else if(guess<1){
    alert("Please enter a number greater than 0")
  }else if(guess > 100){
    alert("please enter a number less than 100")
  }else{
    previousGuesses.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game over , Random number was ${random}`)
      endGame();
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess (guess) {
  if(guess===random){
    displayMessage(`You Guessed it right!!!`)
    endGame()
  }else{
    if(guess<random){
      displayMessage(`your number is too low`)
    }
    else if(guess>random){
      displayMessage(`your number is too high`)
    }
  }
}

function displayGuess (guess){
  userInput.value =''
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remainingGuesses.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
  loeOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame (){
  const newGame= document.querySelector('#newGame')
  newGame.addEventListener('click', function(e){
    random = parseInt(Math.random()*100+1)
    console.log(random);
    previousGuesses=[];
    numGuess=1;
    guessSlot.innerHTML=''
    remainingGuesses.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame =true;
  })
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame"> Start new Game </h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

```

## Project 05

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```

## Project 06

```javascript

//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```