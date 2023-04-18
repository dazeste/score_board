const homeBtn = document.getElementById("home-btn");
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
  homeBtn.innerText = count;
  // guestBtn.innerText = count;
}
function incrementGuestOne(){
  count += 1
  // homeBtn.innerText = count;
  guestBtn.innerText = count;
}
function incrementTwo(){
  count += 2
  homeBtn.innerText = count;
  guestBtn.innerText = count;
}
function incrementThree(){
  count += 3
  homeBtn.innerText = count;
  guestBtn.innerText = count;
}