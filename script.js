window.onload = init;
let map;
let ctxMap;
let gameWidth = 800;
let gameHeight = 800;
let background = new Image();
background.src = "doroga.png";
function init() {
  map = document.getElementById("map");
  ctxMap = map.getContext("2d");
  map.width = gameWidth;
  map.height = gameHeight;
  drawBg();
}
let requestAnimFrame = window.requestAnimationFrame;
let isPlaing;

function Loop() {
  if (isPlaing) {
  }
}
function start() {
  isPlaing = true;
  Loop();
}
function stop() {
  isPlaing = folse;
}
function drawBg() {
  ctxMap.drawImage(background, 0, 0, 800, 800);
}

function myMove() {
  var elem = document.getElementById("car1");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
