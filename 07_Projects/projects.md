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
cosnole.log("Varun")
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
