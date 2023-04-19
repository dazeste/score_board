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
// let countGuest= 0;

function incrementOne(){
 countHome += 1
 homeBtn.innerText = countHome;

}

function incrementTwo(){
  count += 2
  homeBtn.innerText = countHome;
  guestBtn.innerText = countGuest;
}
function incrementThree(){
  count += 3
  homeBtn.innerText = countHome;
  guestBtn.innerText = countGuest;
}