const moon = "M 100 200 A 50 50 0 1 1 100 50 C 50  100 50 150 100 200";
const sun  = "M 100 200 A 50 50 0 1 1 100 50 C 200 50 200 200 100 200";

function deviceOrientation(DIR) { 
  timeOfDay(Math.round(DIR));
  
  let value = DIR / (36/0.1);
  background.seek(background.duration * value);
  circle.seek    (circle.duration     * value);
  morph.seek     (morph.duration      * value);
}

function timeOfDay(time) {
  let text = document.querySelector("#timi");
  document.querySelector("#timi2").innerHTML = Math.round((time / 30) + 12) + ":00";
  
  if(time > 0 && time < 180) text.innerHTML = "Dagur";
  else                       text.innerHTML = "Nótt";
}

window.addEventListener('deviceorientation', function (eventData) { 
    var DIR = eventData.alpha; 
    deviceOrientation(DIR); 
}, false);

// anime.js v3.2.1
var background = anime({
    targets: "body",
    color: "#fff",
    backgroundColor: ["#f5f5f0", "#151d29"],
    easing: 'linear',
    autoplay: false
});
var morph = anime({
  targets: "path",
  d: [
    { value: sun  },
    { value: moon }
  ],
    autoplay: true,
    easing: 'linear',
    autoplay: false
})
var circle = anime({
    targets: "path",
    loop: true,
    fill: ["#fca903", "#acadad"],
    direction: 'alternate',
    easing: 'linear',
    autoplay: false
});



