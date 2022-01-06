var getAuthor = document.querySelector("#author");
getAuthor.innerHTML =
` <!--
-----------------------------------------------
Open Source Application
Name:        Time Travela
Version:     1.0.0
Author:      Tsquare07
Author Url:  https://www.iamtsquare07.com
----------------------------------------------- 
-->`;
//Retrieving Date
var targetDate = new Date(),
yearNow = targetDate.getFullYear(),
day = targetDate.getDate(),
months = [1,2,3,4,5,6,7,8,9,10,11,12],
month = targetDate.getMonth(),
monthNow = months[month];

var getInput = document.querySelector("#year");
function openNew(bool){
  if(bool){
    window.open("https://iamtsquare07.github.io/", "_self")
  }else {
    window.open("https://iamtsquare07.github.io/")
  }
}

var docBody = document.querySelector("#mainBody"),
programbox = document.querySelector("#main"),
programBody = document.querySelector("#body"),
successMessage = document.querySelector("#success"),
switchBtn = document.querySelector("#switch"),
//loadImage = "https://www.sonscores.com/wp-content/uploads/2021/09/sonscore-load.gif",
loadImage = "images/sonscore-load.gif",
userAge = document.querySelector("#age"),
playerYear = document.querySelector("#year");
function unloadMessage() {
  return "Take a screenshot of your time travel profile to share with friends";
}

function setConfirmUnload(on) {//Warn user of losing data when closing the window
  window.onbeforeunload = (on) ? unloadMessage : null;
}

function yearFocus(){ playerYear.focus()}

userAge.addEventListener('keypress', function (e) {
if (e.key === 'Enter') yearFocus();
}); // Change focus
playerYear.addEventListener('keypress', function (e) {
if (e.key === 'Enter') process();
}); 

//Generating a random background color
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
var importantSwitch = document.querySelector("#important");
importantSwitch.innerHTML = "Portfolio";
function callPopup() {
  const CookieService = {
    setCookie(name, value, days) {
        let expires = '';
  
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
  
        document.cookie = name + '=' + (value || '')  + expires + ';';
    },
  
    getCookie(name) {
        const cookies = document.cookie.split(';');
  
        for (const cookie of cookies) {
            if (cookie.indexOf(name + '=') > -1) {
                return cookie.split('=')[1];
            }
        }
  
        return null;
    }
  };
  
  const exit = e => {
    const shouldExit =
        [...e.target.classList].includes('exit-intent-popup') || // user clicks on mask
        e.target.className === 'close' || // user clicks on the close icon
        e.keyCode === 27; // user hits escape
  
    if (shouldExit) {
        document.querySelector('.exit-intent-popup').classList.remove('visible');
    }
  };
  
  const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;
  
    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        document.querySelector('.exit-intent-popup').classList.add('visible');
  
        CookieService.setCookie('exitIntentShown', true, 30);
    }
  };
  
  if (!CookieService.getCookie('exitIntentShown')) {
    setTimeout(() => {
        document.addEventListener('mouseout', mouseEvent);
        document.addEventListener('keydown', exit);
        document.querySelector('.exit-intent-popup').addEventListener('click', exit);
    }, 0);
  }
  
}



if (importantSwitch.innerHTML = "Portfolio"){
function switchProgram() {
  //Switching the application
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
 //Start of Age Calculator application
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
  console.log(bbmm,bmm);
  //Checking the the day of the month to assign the appropriate suffix
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
    function removeBtn(){//removing recheck button on certain conditions
      setTimeout(() => {
        document.getElementById("re-check").style.display = "none";
      }, 3);
      
    }
    removeBtn();
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
        programBody.innerHTML = ageCalculator(bbyy,byy) + `<br><br><br><div id="Ai"></div><br><br><br><button class="reload" id="re-check" onclick="run()">Re-check</button>`;
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
}
importantSwitch.href="https://www.iamtsquare07.com/#portfolio";
let count = 0;
count++

if(importantSwitch.innerHTML = "Portfolio"){
function process(){
  setConfirmUnload(true)
  let fMessages = ["Never seen you this happy in the past, You're now so rich!","According to what I see, You are now a professional.","I know your secrets, but let's just pretend I did'nt. I can't do this, you are in love.","I can't believe what I am seeing, You now own 3 electric cars?","Wow! I am out of words,  You lucky bastard :)😂","Now, this is what I called a bright future."],
  pMessages = ["Yeehoo! this is the past, this old boys have no idea what Bitcoin mean, WTF!","I bet you must have loved this, except for this RAM, Damn this old Gadget!","There is nothing worth regretting right here, for God's sake there is Facebook or Insta","Well, you better be right where you are now buddy! unless you enjoy riding a horse.","Truth be told, you missed Nothing in the past depending on what I am seeing","I bet you won't want to be here, I can't believe this people are surviving here."],
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
//An AI Algorithm for user persona
function ai(input){
let AI = document.querySelector("#Ai");
let Relationship = ["Single","Married","Divorced","Complicated"],
Cars = [3,4,5,6,7,8,9,10,12,1],
Job = ["Programmer","Social Media Influencer","Alaye","Doctor","Bitcoin Trader","CEO","Pastor","Artist","Engineer","Gamer"],
Children = [2,3,4,5,6,7,8,9,10,"None"],
Networth = ["1 Million","50 Million","70 Million","Broke","100 Million","10 Billion","100 Billion","700 Billion","1 Billion","It is well"],
UploadedMind = ["Mind Detected","Corrupted","No Mind Detected","Error 370"],
aiPicker = Math.floor(Math.random()*10),
aiRandom = Math.floor(Math.random()*4)
  setTimeout(() => {
    AI.innerHTML = `<h4 style="color:goldenrod">Your Profile In ${newYear}</h4><table>
<tr>
    <td><b>Relationship Status:</b></td>
    <td>${Relationship[aiRandom]}</td>
</tr>
<tr>
    <td><b>Cars:</b></td>
    <td>${Cars[aiPicker]}</td>
</tr>
<tr>
    <td><b>Job Title:</b></td>
    <td>${Job[aiPicker]}</td>
</tr>
<tr>
    <td><b>Children:</b></td>
    <td>${Children[aiPicker]}</td>
</tr>
<tr>
    <td><b>Networth:</b></td>
    <td>${Networth[aiPicker]}</td>
</tr>
<tr>
    <td>Uploaded Mind Status:</td>
    <td>${UploadedMind[aiRandom]}</td>
</tr>
</table>`;
    if(input){

    }
  }, 1000);
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
    return `Welcome to the Future<br><br>You are now ${newAge} years, We are in ${year}.<br><br><span style="color:aqua;">Looking you up...</span><br><img width="170px" height: auto; src="https://wallpaperaccess.com/full/1371433.jpg"></img><br> ${randomFTMessage}`;
  }else if(newAge < 0){
    return `The year is ${year}, it was ${Math.abs(newAge)} years before you were born.<br><br><span style="color:aqua;">Checking what the future look like: </span><br><br> ${randomPmessage}`;
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
      programBody.innerHTML = yourAge(newAgeValue,newYear) + `<br><div id="Ai"></div><br><button class="reload" onclick="process()">Re-check</button>`;
      successMessage.innerHTML = "Successful!";
      switchBtn.innerHTML = `<span>Switch To: </span><button id="mySwitch" onclick="switchProgram()">Age Calculator</button>`;
      if (newYear > yearNow){
        ai(true);
      }
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
callPopup();

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
let darkModeSwitch = document.querySelector("#darkSwitch");
var theHeading = document.querySelector("#mainHead");
var theSpanH1 = document.querySelector(".h1span2");
const blackMode = () => {
  if (modeON){
  document.body.style.backgroundColor = "black";
  document.body.style.color = "#caeaff !important";
  programbox.style.backgroundColor = "#001f33";
  darkModeSwitch.innerHTML = "On";
  modeON = false;
  theHeading.style.color = "#0000ff";
  theSpanH1.style.color = "#0000ff";
  }else {
    colorChange();
    modeON = true;
    document.body.style.color = "white";
    darkModeSwitch.innerHTML = "Off";
    theHeading.style.color = "black";
    theSpanH1.style.color = "black";
  }

}
