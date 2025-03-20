const product = document.querySelector("#product");
const company = document.querySelector("#company");
const connect = document.querySelector("#connect");

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");




function show() {
    item1.style.display = "block";
}
function hide() {
    item1.style.display = "none";
}
function show1() {
    item2.style.display = "block";
}
function hide1() {
    item2.style.display = "none";
}
function show2() {
    item3.style.display = "block";
}
function hide2() {
    item3.style.display = "none";
}

item3.addEventListener("mouseleave",hide2);

company.addEventListener("mouseover",show2);
//this is item2 
item2.addEventListener("mouseleave",hide1);


product.addEventListener("mouseover",show1);
//this is item 3
item1.addEventListener("mouseleave",hide);

connect.addEventListener("mouseover",show)

