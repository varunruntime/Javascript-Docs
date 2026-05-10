# Project Related to DOM

## project link  [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  });
});

``` 

## Project 2

```javascript
const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)
// not used outside because this usecase will give you empty 

form.addEventListener('submit', function(e){
  e.preventDefault(); // prevents the default submit
  const height = parseInt(document.querySelector('#height').value) // .value gives the value what user have written in the input field. Input fields always store user data as text by default. ParseInt converts the string in array
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height) ){ // height != NaN the upadated technique gives true or false isNaN(height)
    results.innerHTML = "Please give a valid height"
  } else if(weight === '' || weight < 0 || isNaN(weight) ){ 
    results.innerHTML = "Please give a valid weight"
  }
   else {
     const bmi = (weight / ((height * height)/ 10000)).toFixed(2) 
    // show the result
    if(weight < 18.6){
      results.innerHTML = `<div>${bmi}</div>
      <div>You are under weight</div>`
    }
    if(18.6 < weight < 24.9){
      results.innerHTML = `<div>${bmi}</div>
      <div>You lie in the normal range</div>`
    }
    if(weight > 24.9){
      results.innerHTML = `<div>${bmi}</div>
      <div>You are overweight</div>`
    }
    
  }
})

```

## Project 3

```javascript
const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date(); // stores a todays date 
  console.log(date.toLocaleTimeString()); // gives the time in the console in every second 
  clock.innerHTML = date.toLocaleTimeString(); // it inputs the time in the innerhtml <div id = "clock">11:02:25</div>
  // and it creating new object Date after every second and updating the innerHtml after every second 
}, 1000)
```

## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector("#subt")
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = [] // to show the user all his guess
let numGuess = 1 // user guess starting from 1 to 10

let playGame = true 

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault() // it is a form so value server par chali jaayegi to prevent that we use this 
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  // checks that user have entered the valif number between 1 to 100
  if(isNaN(guess)){
    alert("Please enter a valid number")
  } else if(guess < 1){
    alert("Please enter a number more than 1")
  } else if(guess > 100){
    alert("Please enter a number less than 100")
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 11){
      cleanup(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }else{
      cleanup(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  // checks the guess is whether equal to random number and asks the displayMessage to print the message 
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  } else if (guess > randomNumber){
    displayMessage(`Number is too high`)
  } else if (guess < randomNumber){
    displayMessage(`Number is too low`)
  }
}

function cleanup(guess){
  // cleans the current value to input the next guess
  // update the guess array 
  // update the remaining guess

  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  // endgame
  userInput.value = '' // cleared the input 
  userInput.setAttribute('disabled', '') // disabled from enetering more input
  p.classList.add('button') // add class button in the element 
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>` // add innerHTML in the element p
  startOver.appendChild(p) // append element p in the startover 
  playGame = false; // playgame have set false 
  newGame(); // start the newGame
}

function newGame(){
  // newgame
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess  = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  })
}


```

## Project 5

```javascript
cosnole.log("Varun")
```

## Project 6

```javascript
cosnole.log("Varun")
```
