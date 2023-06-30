let a = document.getElementById("box");
let b = document.getElementById("btn");
let c = document.getElementById("btn2");
let e = document.getElementById("btn3");
let d = document.getElementsByTagName("body")[0];

function info() {
    let fname = prompt('enter first name:')
    let lname = prompt('enter first name:')
    confirm('are you sure as ' + fname +' '+ lname)
    alert('your name is ' + fname +' '+ lname)
}
e.addEventListener("click", function () {
  let color = prompt("enter color name:");

  a.style.backgroundColor = color;
// document.body.style.backgroundColor=prompt('select color') 
});

a.addEventListener("mouseover", function () {
  a.style.backgroundColor = "black";
});
b.addEventListener("click", function () {
  a.style.backgroundColor = "red";
});
c.addEventListener("click", function () {
  d.style.backgroundColor = "red";
});
