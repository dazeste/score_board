const homeBtn = document.getElementById("home-htn");
const guestBtn = document.getElementById("guest-btn");
const countBtn = document.getElementById("count-btn");
const homeCount = document.getElementById("home-count");
const guestCount = document.getElementById("guest-count");

const homeOne = document.getElementById("home-one");
const homeTwo = document.getElementById("home-two");
const homeThree = document.getElementById("home-three");

const guestOne = document.getElementById("guest-one");
const guestTwo = document.getElementById("guest-two");
const guestThree = document.getElementById("guest-three");




 
let count = 0;

function incrementOne(){
  count += 1
  homeOne.innerText = count;
  guestOne.innerText = count;
}