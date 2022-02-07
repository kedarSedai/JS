// 1. From [X]
// 2. taking getValue; [X]
// var bmi = w / h2; [X]
// result

//Promise
//Hoisting
//ES6 let const.

function bmicalculate() {
  event.preventDefault();
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);
  var result = document.getElementById("result");

  if (height == "" || height < 0 || isNaN(height)) {
    alert("enter Valid Height");
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    alert("enter Valid weights");
  } else {
    var bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML = `Your bmi is ${bmi}`;
    console.log(bmi);
  }
}
