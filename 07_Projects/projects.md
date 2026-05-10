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
cosnole.log("Varun")
```

## Project 4

```javascript
cosnole.log("Varun")
```

## Project 5

```javascript
cosnole.log("Varun")
```

## Project 6

```javascript
cosnole.log("Varun")
```
