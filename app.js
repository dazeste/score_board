const homeBtn = document.getElementById("home-btn");
const guestBtn = document.getElementById("guest-btn");
// save btn
const saveBtn = document.getElementById("save-btn");
const homeCount = document.getElementById("home-count");
const guestCount = document.getElementById("guest-count");




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

 function save(){
   let total = countHome + " - "
   saveBtn.textContent += total
   homeBtn.innerText = 0
   countHome = 0
 }