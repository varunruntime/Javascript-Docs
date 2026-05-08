/* 
Dom manipulation 
Select the element from the html 
change the text 
change the html 
chnage the css
change the attribute 
add event listeners 
*/


// ==> Selecting elements: getElementByID, getElementsByClassName, querySelector,querySelectorAll

// 1. Select an element by id 

let abcd = document.getElementById("abcd") // store the element id in a variable
console.log(abcd)

// 2. Select an element by class 

let ABCD = document.getElementsByClassName("abcd") // store the element class in a variable, will give the node list in a console 

// 3. Select the element directly if there are many elements it will show
// the first element and leave the rest 

let a = document.querySelector("h1")
console.dir(a)

// 4. Select the element directly if there are any elemenys it will show all
// all of them 

let b = document.querySelectorAll("h1")
console.log(b)


// ==> Text/Content access: innerText, textContent, innerHTML

let h1 = document.querySelector("h1")
// h1.textContent = "hello bhai kesa hai" 
// h1.innerHTML = "Haa bhai khana kha lia"
// h1.innerText = "Haa bhai vere ki haal kesa hai"

// innerText work same as textContent

// innerHTML: if you want to write or put html in any element you use innerHTML

let hey1 = document.querySelector("h1")
hey1.innerHTML = "<i>wow crazy bhai</>"

hey1.hidden = false


// ==> Attribute Manipulation: getAttribute, setAttribute, removeAttribute

let link = document.querySelector("a")
console.log(link)
// link.href = "https://www.google.com"
link.setAttribute("href", "https://www.google.com") // (attribute name, value)

let img = document.querySelector("img")
img.setAttribute("src", "https://images.unsplash.com/photo-1723211945446-afc7718df136?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

let google = document.querySelector("a")
console.log(google.getAttribute("href")) // gives the value of the atribute 

let links = document.querySelector("a")
console.log(links.removeAttribute("href")) // remove the attribute of the tag 


// => Create element 
// append/ prepend karo jaha bhi element chahiye 

let h2 = document.createElement("h2")
h2.textContent = "Hello x people how are you ?"
document.querySelector("body").append(h2)
// document.querySelector("body").prepend(h2)
// append means last element in body 
// prepend means first element in body 

let newH1 = document.createElement("h1")
newH1.textContent = "kesi chal rahi hai padhayi fir"

document.querySelector("div").prepend(newH1)

// => js me css badalna 

newH1.style.color = "green"
newH1.style.backgroundColor = "yellow"
newH1.style.textTransform = "capitalize"
newH1.style.fontFamily = "arial"
console.dir(newH1)
 
