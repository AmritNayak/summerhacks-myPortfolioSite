/* 
    Summer Hacks
    SOA Code Room
    Project Template
    Use this template: https://github.com/SOACodeRoom/summerhacks-projectName/generate
    script.js: You will write your Javascript code for your portfolio website here. You can add other Javascript files too but it must be under "js" folder.
*/

// Multiple Description

var TEXTS = ["A Programmer", "Android Developer", "Web Developer", "Python Developer"];

var current_text = 0;
var text_index = 0;
var interval;

var description = document.querySelector("#text");

function typewWritter() {
  var txt = TEXTS[current_text].substring(0, text_index + 1);
  description.innerHTML = txt;
  text_index++;

  if (txt == TEXTS[current_text]) {
    clearInterval(interval);
    setTimeout(function () {
      interval = setInterval(deleteText, 100);
    }, 1500);
  }
}

function deleteText() {
  var txt = TEXTS[current_text].substring(0, text_index - 1);
  description.innerHTML = txt;
  text_index--;

  if (txt == "") {
    clearInterval(interval);

    if (current_text == TEXTS.length - 1) current_text = 0;
    else current_text++;

    text_index = 0;

    setTimeout(function () {
      interval = setInterval(typewWritter, 100);
    }, 200);
  }
}

interval = setInterval(typewWritter, 100);

// Scroll Reveal

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) reveals[i].classList.add("active");
    else reveals[i].classList.remove("active");
  }
}
