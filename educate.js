function func1(){
  var x = document.getElementById("box");
  if (x.style.display === "none") {
    x.style.display = "block";
document.getElementById("section1").innerHTML = "- Racial Justice";
  } else {
    x.style.display = "none";
    document.getElementById("section1").innerHTML = "+ Racial Justice";
  }
}

function func2(){
  var x = document.getElementById("box2");
  if (x.style.display === "none") {
    x.style.display = "block";
document.getElementById("section2").innerHTML = "- Gender Justice";
  } else {
    x.style.display = "none";
    document.getElementById("section2").innerHTML = "+ Gender Justice";
  }
}

 function func3(){
 var x = document.getElementById("box3");
   if (x.style.display === "none") {
     x.style.display = "block";
document.getElementById("section3").innerHTML = "- Environmental Justice";
   } else {
     x.style.display = "none";
    document.getElementById("section3").innerHTML = "+ Environmental Justice";
 }
 }

// function func4(){
//     var x = document.getElementById("box4");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//   document.getElementById("section1").innerHTML = "- Racial Justice";
//     } else {
//       x.style.display = "none";
//       document.getElementById("section1").innerHTML = "+ Racial Justice";
// }

// function func5(){
//     var x = document.getElementById("box5");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//   document.getElementById("section1").innerHTML = "- Racial Justice";
//     } else {
//       x.style.display = "none";
//       document.getElementById("section1").innerHTML = "+ Racial Justice";
//   }