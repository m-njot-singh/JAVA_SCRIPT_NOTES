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