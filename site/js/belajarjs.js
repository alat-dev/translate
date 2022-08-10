const textbox = document.getElementById("name");
var greet=document.getElementById("greet");
greet=document.querySelector("#greet");
console.log(HTMLDocument);

function sayHello(){
console.log(this);
this.textContent="Said It";
var message = "Hello, "+ textbox.value;
console.log("message");

//untuk ubah textnya aja di tampilan
greet.textContent=message;

// untuk ubah dokumen htmlnya
greet.innerHTML="<h2>"+message+"</h2>"


if(textbox.value==="student"){
var title=document.getElementById("title");
title.textContent="Student Page";
}
};

// atau bisa juga begini
document.querySelector("button").addEventListener("click",sayHello);
//document.querySelector("button").onclick = sayHello;