
myInterval = setInterval(setColor, 1000);
 
function setColor() {
  let x = document.getElementById('nav');
    x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "red" : "yellow";
}
 
function stopColor() {
  clearInterval(myInterval);
}
my_btn_Interval = setInterval(set_btn_Color, 500);
 
function set_btn_Color() {
  var y = document.querySelectorAll('.my_btn');
  for (let i=0; i < y.length ; i++){


    if(y[i].style.backgroundColor == 'red'){
      y[i].style.backgroundColor = "blue";
      y[i].style.color = "white";

    }
    else if ((y[i].style.backgroundColor == "blue")) {
      y[i].style.backgroundColor = "orange";
    }
    else{
       y[i].style.backgroundColor = "red";
    }

  }
}
 
function stop_btn_Color() {
  clearInterval(myInterval);
}
