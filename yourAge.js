//Retrieving Date
var targetDate = new Date(),
yearNow = targetDate.getFullYear(),
day = targetDate.getDate(),
months = [1,2,3,4,5,6,7,8,9,10,11,12],
month = targetDate.getMonth(),
monthNow = months[month];

var getInput = document.querySelector("#year");

let docBody = document.querySelector("#mainBody");
let programbox = document.querySelector("#main")
let programBody = document.querySelector("#body");
let successMessage = document.querySelector("#success");
let switchBtn = document.querySelector("#switch");
//let loadImage = "https://www.sonscores.com/wp-content/uploads/2021/09/sonscore-load.gif";
let loadImage = "images/sonscore-load.gif";
let userAge = document.querySelector("#age");
let playerYear = document.querySelector("#year");
function setConfirmUnload(on) {//Warn user of losing data when closing the window
  window.onbeforeunload = (on) ? unloadMessage : null;
}

function unloadMessage() {
  return "Are you sure you want to leave this page";
}
function yearFocus(){ playerYear.focus()}

userAge.addEventListener('keypress', function (e) {
if (e.key === 'Enter') yearFocus();
}); // Change focus
playerYear.addEventListener('keypress', function (e) {
if (e.key === 'Enter') process();
}); 

const randomNum = Math.floor(Math.random() * 10);
console.log(randomNum)
function colorChange() {
switch(randomNum) {
  case(0):
   document.body.style.backgroundColor = "darkblue";
  break;
  case(1):
   document.body.style.backgroundColor = "indigo";
  break;
  case(2):
   document.body.style.backgroundColor = "darkgreen";
  break;
  case(3):
   document.body.style.backgroundColor = "#590080";
  break;
  case(4):
  document.body.style.backgroundColor = "#103a89";
  break;
  case(5):
  document.body.style.backgroundColor = "##0000cc";
  break;
  case(6):
  document.body.style.backgroundColor = "#1f604b";
  break;
  case(7):
  document.body.style.backgroundColor = "dark";
  break;
  case(8):
  document.body.style.backgroundColor = "darkslategrey";
  break;
  case(9):
  document.body.style.backgroundColor = "darkmagenta";
  break;
}
}
colorChange();


function switchProgram() {
  setConfirmUnload(false)
successMessage.innerHTML = "";
programBody.innerHTML = "";
switchBtn.innerHTML = "";
document.getElementById("left").innerHTML = `<a class="activeNav" href="#">Home</a><a onclick="location.reload(true)" href="#">Time Travela</a><a href="https://www.iamtsquare07.com/#portfolio" target="_blank">More Projects</a>`;
document.getElementById("programSwitch").innerHTML = `<div id="programSwitch" onclick="location.reload(true)">Switch App</div>`;
document.getElementById("mainHead").innerHTML = "Age Calculator";
document.getElementById("helper").innerHTML = "Check your current age, enter birthday and current date to proceed";
document.getElementById("programForm").innerHTML = `<label>Birth Date</label>
<input id="birthyear" type="date" value="1998-08-26" required>
<label>Current Date</label>
<input id="currentyear" type="date" value="2021-01-04" required><input id="trigger" type="button" value="Check">`;
Date.prototype.toDateInputValue = (function() {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});
let Year = document.querySelector("#currentyear");
let Birth = document.querySelector("#birthyear");
Year.value = new Date().toDateInputValue();
let theTrigger = document.querySelector("#trigger");
function focusOnYear() {Year.focus()};
Birth.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') focusOnYear();
}); // Change focus
 //Age Calculator

theTrigger.addEventListener('click', run = () => {
let ranMessesges = ["Hang on!","Let's go there!","Off we go!","You're already there!","How about that!", "You know you will!","Trust that!"],
ranmessage = ["You desearve some respect!","Take pride in that!!","You're a hot cake!","C'mon be proud!","Damn legend.","Common! you fine wine.","Look at you!"],
randomNum = Math.floor(Math.random() * 6),
randomM = ranmessage[randomNum],
randomMessesge = ranMessesges[randomNum];
let birthYearData = Birth.value, bdob = birthYearData.split("-"), bbyy = bdob[0], bbmm = bdob[1], bbdd = bdob[2],
currentYearData = Year.value, dob = currentYearData.split("-"), byy = dob[0], bmm = dob[1], bdd = dob[2],
monthInString = ['','January','February','March','April','May','June','July','August',
'September','October','November','December'];
console.log(yearNow,monthNow,day)
function ageCalculator(birthdate,currentYear){
  let newUserAge = currentYear - birthdate;
  console.log(bbmm,bmm)
  const checkDay = (val) => {
    switch(val){
      case(01):
      return "st";
      case(02):
      return "nd";
      case(03):
      return "rd";
      case(21):
      return "st";
      case(22):
      return "nd";
      case(23):
      return "rd";
      case(31):
      return "st";
      default:
       return "th";
    }
  }
  function checkMonth(value) {
    if(value < 10){
      return monthInString[bbmm[1]] //Convert months to strings using only the second character EG: 01 = January
    }else {
      return monthInString[bbmm] //Convert months to strings
    }
  }
 
  if (newUserAge > 0 && bbmm > bmm && bbdd > bdd && byy < yearNow){//Check if the users birth year has reached and if it is not the current date.
    return `You were ${newUserAge} years in ${byy}, not current date though, but hey! ${randomM}`;
  }else if(newUserAge > 0 && bbmm > bmm && bbdd > bdd && byy > yearNow){//Check if the users birth year has reached and if it is not the current date.
    return `You will be ${newUserAge} years in ${byy}, You're time travelling now right? why not use time travela.`;
  } else if(newUserAge > 0 && bbmm > bmm && bbdd > bdd){//Check if the users birth year has reached but his birthday hasn't reached yet
    return `You are ${newUserAge - 1} years old, You will be ${newUserAge} years by ${bbdd}${checkDay(bbdd)} ${checkMonth(bbmm)} ${byy}, ${randomMessesge}`;
  } else if (newUserAge > 0 && bbmm <= bmm & bbdd <= bdd) {//Check if the users Birthday has reached
    return `You are ${newUserAge} years old, ${randomM}`;
  }else if (newUserAge < 0) {
    function removeBtn(){
      setTimeout(() => {
        document.getElementById("re-check").style.display = "none";
      }, 3);
      
    }
    removeBtn()
    return `You are trying to check a year in the past, switch to: <br><button class="reload" onclick="location.reload()">Time Travela</button>`;
  }else {
    return "Invalid birthdate or year"
  }
  }
  if (Year.value.length > 1 && Birth.value.length > 1){
    setTimeout(() => {
      successMessage.innerHTML = "Calculation in Progress...";
      programBody.innerHTML = `<img src="${loadImage}" width="50px" height="auto">`;
      setTimeout(() => {
        programBody.innerHTML = ageCalculator(bbyy,byy) + `<br><button class="reload" id="re-check" onclick="run()">Re-check</button>`;
        successMessage.innerHTML = "Calculation Completed!"
        switchBtn.innerHTML = `<span>Switch To: </span><button id="mySwitch" onclick="location.reload(true)">Time Travela</button>`;
      }, 2000)
    }, 100)
  }else if(Birth.value == ""){
    successMessage.innerHTML = "Please add a birth year";
    Birth.focus();
  }else if(Year.value == ""){
    successMessage.innerHTML = "Please add a valid year";
    Year.focus();
  }else {
    console.log("Something went wrong");
  }
  }
);
Year.addEventListener('keypress', function (e) {
if (e.key === 'Enter') run();
});
}
let count = 0;
count++



function process(){
  let fMessages = ["Welcome to the Future, You now so rich!","According to what I see, You are now a professional.","I know your secrets, but let's just pretend I did'nt. I can't do this, you have 4 children.","I can't believe what I am seeing, 3 electric cars?","Wow! now I am out of words,  You lucky bastard :)😂","Now, this is what I called a bright future."],
  pMessages = ["Yeehoo! this is the past, them boys have no idea what you're talking about.","I bet you must have loved this, except this RAM, Damn this!","There is nothing worth regretting right here.","Well, you better be right where you are now buddy!","Truth be told, you missed Nothing","I bet you won't want to be here, I can't believe there are surviving."],
  lMessages = ["you have got to be kidding me, you can't remember this?","Well, if you don't remember this, I can't help you.","But you think this is from the past? LOL!","Are you serious? This is like yesterday.","I'll tell you want, stop playing around here.","Let's say you thought you were happier, but you are now better."],
  ranNum = Math.floor(Math.random()*6),
  randomFTMessage = fMessages[ranNum],
  randomPmessage = pMessages[ranNum],
  randomLTmessage = lMessages[ranNum];
let newAgeValue = Number(userAge.value);
let newYear = Number(playerYear.value);
function twentyTwenty(y){
  if(y === 2020){
    return " Anyway, apart from Godamned lockdowns and Corona virus, what else can 2020 get you."
  }else {
    return "";
  }
}
//Converting current years to get real age
function yourAge(age,year){
  const yearDifference = year - yearNow;
  const newAge = age + yearDifference;
  if (newAge > 0 && newAge < age ){//Check if the year is in the future but not before birthday
    return `You were ${newAge} years in the year ${year}, ${randomLTmessage}${twentyTwenty(year)}`;
  }else if(newAge === age){
      return `You are ${newAge} years in ${year}. But why ${year}? you can use Age Calculator, I am not good at this.`;
  }else if (newAge > 0){
    return `You will be ${newAge} years in the year ${year}, ${randomFTMessage}`;
  }else if(newAge < 0){
    return `The year ${year} was ${Math.abs(newAge)} years before you were born, ${randomPmessage}`;
  }
}

if (userAge.value.length > 1 && playerYear.value.length > 1){
  setTimeout(() => {
    successMessage.innerHTML = "Initializing...";
  }, 50);
  
  setTimeout(() => {
    successMessage.innerHTML = "Querying Time Machine...";
    programBody.innerHTML = `<img src="${loadImage}" width="50px" height="auto">`;
    setTimeout(() => {
      programBody.innerHTML = yourAge(newAgeValue,newYear) + `<br><button class="reload" onclick="process()">Re-check</button>`;
      successMessage.innerHTML = "Successful!";
      switchBtn.innerHTML = `<span>Switch To: </span><button id="mySwitch" onclick="switchProgram()">Age Calculator</button>`;
    }, 2000)
  }, 700)
}else if(userAge.value == ""){
  successMessage.innerHTML = "Please add you age";
  userAge.focus();
}else if(playerYear.value == ""){
  successMessage.innerHTML = "Please add a valid year";
  playerYear.focus();
}else {
  console.log("Something went wrong");
}

}
/*
let theAge = Number(prompt("Enter your age", "23"));
let theYear = Number(prompt("Enter any year", "2100"));
userAge.value = theAge;
playerYear.value = theYear;
setTimeout(() => {
programBody.innerHTML = `<img src="${loadImage}" width="50px" height="auto">`;
setTimeout(() => {
  programBody.innerHTML = yourAge(theAge,theYear) + `<br><button class="reload" onclick="process()">Re-check</button>`;
  successMessage.innerHTML = "Calculation Completed!";
  switchBtn.innerHTML = `<span>Switch To: </span><button id="mySwitch" onclick="switchProgram()">Age Calculator</button>`;
  if (count > 0){
    setConfirmUnload(true)
  }
}, 2000)
}, 500) */
let menu = document.querySelector(".nav");
let menuButton = document.querySelector("#menuBtn");
let menuOn = true;

menuButton.addEventListener("click", () => {
  if (menuOn){
    menu.style.display = "block";
    menuOn = false;
  }else{
    menu.style.display = "none";
    menuOn = true;
  }
  
});
docBody.addEventListener("click", closeMenu = () => {
  if (menuOn === false){ 
    menu.style.display = "none";
    menuOn = true;
  }else{
    menuOn = true;
  }
})
let modeON = true;
let darkModeSwitch = document.querySelector("#darkSwitch")
const blackMode = () => {
  
  if (modeON){
    document.body.style.backgroundColor = "black";
  document.body.style.color = "#caeaff";
  programbox.style.backgroundColor = "#001f33";
  darkModeSwitch.innerHTML = "On"
  modeON = false;
  }else {
    colorChange();
    modeON = true;
    document.body.style.color = "white";
    darkModeSwitch.innerHTML = "Off"
  }

}
