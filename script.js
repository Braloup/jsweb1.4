"use strict";
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

// Creating functions for the current date...
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

// Creation of the function to calculate the age of the user....
function calculAge() {

  let bYear = "";
  let bMonth = "";
  let bDay = "";
  let age = 0;

  bYear = document.getElementById("bYear").value;
  bMonth = document.getElementById("bMonth").value;
  bDay = document.getElementById("bDay").value;

  age = year - bYear;

  if (month < bMonth) {

    age = age - 1;
  }

  document.getElementsByClassName("result")[0].innerHTML = 'Nous avons calculer que vous deviez avoir: ' + age + ' ans';
}


document.querySelector("#calcul").addEventListener("click", calculAge, false);
