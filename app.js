const homeBtn = document.getElementById("home-btn");
const guestBtn = document.getElementById("guest-btn");
const countBtn = document.getElementById("count-btn");
const homeCount = document.getElementById("home-count");
const guestCount = document.getElementById("guest-count");

// const homeOne = document.getElementById("home-one");
// const homeTwo = document.getElementById("home-two");
// const homeThree = document.getElementById("home-three");

// const guestOne = document.getElementById("guest-one");
// const guestTwo = document.getElementById("guest-two");
// const guestThree = document.getElementById("guest-three");


let countHome = 0;
let countGuest= 0;

// Add+1
function incrementOne(){
 countHome += 1
 homeBtn.innerText = countHome; 
}
function incrementGuestOne(){
  countGuest += 1
  guestBtn.innerText = countGuest;
}
// Add +2
function incrementTwo(){
  countHome += 2
  homeBtn.innerText = countHome; 
 } 
 function incrementGuestTwo(){
   countGuest += 2
   guestBtn.innerText = countGuest;
 }
 // Add +3
function incrementThree(){
  countHome += 3
  homeBtn.innerText = countHome; 
 } 
 function incrementGuestThree(){
   countGuest += 3
   guestBtn.innerText = countGuest;
 }