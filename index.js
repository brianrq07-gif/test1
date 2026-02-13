// Grab elements
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");
var envelope = document.getElementById("envelope");
var hearts = document.getElementsByClassName("heart");
var pigs = document.getElementsByClassName("pig");

var noCount = 0;
var maxNo = 10;

var noTexts = [
  "Noo","bnrn?","Sorry ya","coba lagi",
  "fix?","ga mau mikir dlu?","100%?","Trakir bnrn no?",
  "tapi boong","Noo"
];

// Handle No button click
noBtn.onclick = function() {
    if(noCount >= maxNo) return;

    // Change text
    noBtn.innerHTML = noTexts[noCount];

    // Shrink the button gradually
    var fontSize = 16 - noCount * 0.8;
    if(fontSize < 11) fontSize = 11;
    var padding = 10 - noCount * 0.3;
    if(padding < 6) padding = 6;
    noBtn.style.fontSize = fontSize + "px";
    noBtn.style.padding = padding + "px " + (padding * 2) + "px";

var minY = 50; // distance from top
var maxY = 150; // stay in the top ~150px only
var randY = Math.random() * (maxY - minY) + minY;

var minX = 50; 
var maxX = window.innerWidth - noBtn.offsetWidth - 50;
var randX = Math.random() * (maxX - minX) + minX;

noBtn.style.left = randX + "px";
noBtn.style.top = randY + "px";

    noBtn.style.position = "absolute";
    noBtn.style.left = randX + "px";
    noBtn.style.top = randY + "px";

    // Grow the Yes button gradually
    var yesSize = 16 + noCount * 2;
    yesBtn.style.fontSize = yesSize + "px";

    noCount++;

    // Last click: hide No button and center Yes
    if(noCount === maxNo){
        noBtn.classList.add("hide");
        yesBtn.style.position = "relative";
        yesBtn.style.left = "0";
        yesBtn.style.top = "0";
        document.querySelector(".buttons").classList.add("center-yes");
        yesBtn.style.fontSize = "36px"; // final size
    }
};

// Handle Yes button click
yesBtn.onclick = function() {
    envelope.className = "open open-full";

    // Hide buttons
    yesBtn.classList.add("hide");
    noBtn.classList.add("hide");

    // Letter stays normal size (same as envelope)
    var letter = document.querySelector(".letter");
    letter.style.transform = "translateY(-5%)"; // slightly move up

    // Animate hearts
    for(var i=0;i<hearts.length;i++){
        hearts[i].classList.add("show");
        hearts[i].style.opacity = "1";
        hearts[i].style.transition = "transform 4s ease, opacity 4s ease";

        // Random diagonal movement upwards
        var angleX = (Math.random()*120) - 60; // left/right
        var angleY = -250 - (i*20); // move up more for each heart
        hearts[i].style.transform = `translate(${angleX}px, ${angleY}px)`;

        // Disappear after animation
        setTimeout((function(h){
            return function(){ h.style.opacity = "0"; }
        })(hearts[i]), 4000);
    }

    // Animate pigs
    for(var i=0;i<pigs.length;i++){
        pigs[i].classList.add("show");
        pigs[i].style.opacity = "1";
        pigs[i].style.transition = "transform 4s ease, opacity 4s ease";

        var angleX = (Math.random()*120) - 60;
        var angleY = -250 - (i*20);
        pigs[i].style.transform = `translate(${angleX}px, ${angleY}px)`;

        setTimeout((function(p){
            return function(){ p.style.opacity = "0"; }
        })(pigs[i]), 4000);
    }
};

var rainContainer = document.getElementById("rain-container");

var heartColors = ["❤️", "💖", "💗", "💜", "🩷", "💙"];

function createRainHeart() {
    var heart = document.createElement("div");
    heart.className = "rain-heart";
    heart.innerHTML = heartColors[Math.floor(Math.random() * heartColors.length)];

    var size = Math.random() * 30 + 25;
    heart.style.fontSize = size + "px";

    heart.style.left = Math.random() * 120 - 10 + "vw";
    heart.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");

    var duration = Math.random() * 3 + 4;
   heart.style.animationDuration = duration + "s, " + (duration * 1.8) + "s";

    rainContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Start raining hearts
setInterval(createRainHeart, 400);

// Grab elements
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");
var envelope = document.getElementById("envelope");
var hearts = document.getElementsByClassName("heart");
var pigs = document.getElementsByClassName("pig");

var noCount = 0;
var maxNo = 10;

var noTexts = [
  "Noo","bnrn?","Sorry ya","coba lagi",
  "fix?","ga mau mikir dlu?","100%?","Trakir bnrn no?",
  "tapi boong","Noo"
];

// Handle No button click
noBtn.onclick = function() {
    if(noCount >= maxNo) return;

    // Change text
    noBtn.innerHTML = noTexts[noCount];

    // Shrink the button gradually
    var fontSize = 16 - noCount * 0.8;
    if(fontSize < 11) fontSize = 11;
    var padding = 10 - noCount * 0.3;
    if(padding < 6) padding = 6;
    noBtn.style.fontSize = fontSize + "px";
    noBtn.style.padding = padding + "px " + (padding * 2) + "px";

var minY = 50; // distance from top
var maxY = 150; // stay in the top ~150px only
var randY = Math.random() * (maxY - minY) + minY;

var minX = 50; 
var maxX = window.innerWidth - noBtn.offsetWidth - 50;
var randX = Math.random() * (maxX - minX) + minX;

noBtn.style.left = randX + "px";
noBtn.style.top = randY + "px";

    noBtn.style.position = "absolute";
    noBtn.style.left = randX + "px";
    noBtn.style.top = randY + "px";

    // Grow the Yes button gradually
    var yesSize = 16 + noCount * 2;
    yesBtn.style.fontSize = yesSize + "px";

    noCount++;

    // Last click: hide No button and center Yes
    if(noCount === maxNo){
        noBtn.classList.add("hide");
        yesBtn.style.position = "relative";
        yesBtn.style.left = "0";
        yesBtn.style.top = "0";
        document.querySelector(".buttons").classList.add("center-yes");
        yesBtn.style.fontSize = "36px"; // final size
    }
};

// Handle Yes button click
yesBtn.onclick = function() {
    envelope.className = "open open-full";

    // Hide buttons
    yesBtn.classList.add("hide");
    noBtn.classList.add("hide");

    // Letter stays normal size (same as envelope)
    var letter = document.querySelector(".letter");
    letter.style.transform = "translateY(-5%)"; // slightly move up

    // Animate hearts
    for(var i=0;i<hearts.length;i++){
        hearts[i].classList.add("show");
        hearts[i].style.opacity = "1";
        hearts[i].style.transition = "transform 4s ease, opacity 4s ease";

        // Random diagonal movement upwards
        var angleX = (Math.random()*120) - 60; // left/right
        var angleY = -250 - (i*20); // move up more for each heart
        hearts[i].style.transform = `translate(${angleX}px, ${angleY}px)`;

        // Disappear after animation
        setTimeout((function(h){
            return function(){ h.style.opacity = "0"; }
        })(hearts[i]), 4000);
    }

    // Animate pigs
    for(var i=0;i<pigs.length;i++){
        pigs[i].classList.add("show");
        pigs[i].style.opacity = "1";
        pigs[i].style.transition = "transform 4s ease, opacity 4s ease";

        var angleX = (Math.random()*120) - 60;
        var angleY = -250 - (i*20);
        pigs[i].style.transform = `translate(${angleX}px, ${angleY}px)`;

        setTimeout((function(p){
            return function(){ p.style.opacity = "0"; }
        })(pigs[i]), 4000);
    }
};

var rainContainer = document.getElementById("rain-container");

var heartColors = ["❤️", "💖", "💗", "💜", "🩷", "💙"];

function createRainHeart() {
    var heart = document.createElement("div");
    heart.className = "rain-heart";
    heart.innerHTML = heartColors[Math.floor(Math.random() * heartColors.length)];

    var size = Math.random() * 30 + 25;
    heart.style.fontSize = size + "px";

    heart.style.left = Math.random() * 120 - 10 + "vw";
    heart.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");

    var duration = Math.random() * 3 + 4;
   heart.style.animationDuration = duration + "s, " + (duration * 1.8) + "s";

    rainContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Start raining hearts
setInterval(createRainHeart, 400);

