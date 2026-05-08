// Style updates via ,style and classlist(add, remove, toggle)
 // 1st way to apply css property 
let h1 = document.querySelector("h1");
h1.style.color = "orange";
h1.style.backgroundColor = "green";
h1.style.fontFamily = "arial"
h1.style.textTransform = "capitalize"; // makes first letter of every word 

// 2nd way(recommended way) to apply css property using classlist 
let h2 = document.querySelector("h2");
h2.classList.add("hero");

// to remove the class 
h1.classList.remove("h1");

// toggle basically adds class if it was not there and removes the class if it was there 
h1.classList.toggle("villain")

let heading = document.querySelector("#heading")
console.dir(heading)
heading.textContent = "Welcome to amazing spiderman"

// select all <li> elemsnts and print their text using a loop
// also solve it using foreach  
let lists = document.querySelectorAll("li")
for (let i = 0; i < lists.length; i++) {
    const loop = lists[i];
    console.log(loop.textContent)
}

/*
when should you use textContent instead of innerText ?
- textContent is faster as compared to innerText
- textContent shows all the content irrespective of what is hidden using 
  display none wheareas innerText shows only the visible content
- always recommended to use textContent as it is faster  
*/
                          
/*
 Select a paragraph and replace its content with:
 <b>Updated<b> by javascript  
*/
let para = document.querySelector("p")
para.innerHTML = "<b>Updated</b> by javascript"

/*
Select a link and update its href to point to https://www.google.com
*/
let a = document.querySelector("a")
a.setAttribute("href", "https://www.google.com")

// add a title attribute to div dynamically (basically add tootip)
let div = document.querySelector("div")
div.setAttribute("title", "some info")
// another way using is div.title = ""

// remove the disabled attribute from a button 
let btn = document.querySelector("button")
btn.removeAttribute("disabled")

// Create a new list item <li>New Task</li> and add it to end of ul
let ul = document.querySelector("ul")
let newli = document.querySelector("li")
newli.textContent = "new task"
ul.appendChild(newli)

// Create a new image element with placement source and add it to top of a div 
let img = document.createElement("img")
img.setAttribute("src", "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
img.classList.add("placeholder")
let newdiv = document.querySelector("div.ques") // or (".ques") both are correct 
newdiv.prepend(img)

//Select the first element from the list and delete it from the dom 
let newul = document.querySelector(".fruits")
let sts = document.querySelector("li")
newul.removeChild(sts)
console.log(newul)
console.log(li)
// i don't know why it's not working





