//Paths fyrir SVG myndinar
const moon = "M 100 200 A 50 50 0 1 1 100 50 C 50  100 50 150 100 200";
const sun  = "M 100 200 A 50 50 0 1 1 100 50 C 200 50 200 200 100 200";

//Snúningurinn stýrir öllum animations
function deviceOrientation(DIR) { 
    //Birtir tíma dags
    timeOfDay(Math.round(DIR));
    
    //Seek leyfir manni að hoppa inn í kvikun á tiltektum punkti, svo ég tek ég snúninginn og breyti honum í númer sem passar á bilið 1-100
    let value = DIR / (36/0.1);
    background.seek(background.duration * value);
    circle.seek    (circle.duration     * value);
    morph.seek     (morph.duration      * value);
}

//Birtir tíma dags
function timeOfDay(time) {
    let text = document.querySelector("#timi");
    document.querySelector("#timi2").innerHTML = Math.round((time / 30) + 12) + ":00"; //Skilar inn klukku tíma
    
    //Skilar in tíma dags
    if(time > 0 && time < 180) text.innerHTML = "Dagur";
    else                       text.innerHTML = "Nótt";
}

//Þegar síminn hreyfir sig þá náum við í snúninginn á z-ásinum (alpha)
window.addEventListener('deviceorientation', function (eventData) { 
    var DIR = eventData.alpha; 
    deviceOrientation(DIR); 
}, false);


//
// Anime.js v3.2.1
//

//Breytir litinum á bakgrunninum
var background = anime({
    targets: "body",
    color: "#fff",
    backgroundColor: ["#f5f5f0", "#151d29"], //Fade-ar á milli tveggja lita
    easing: 'linear',
    autoplay: false
});

//Breytir sólinni í tungl og öfugt
var morph = anime({
    targets: "path",
     //Fade-ar á milli tveggja forma
    d: [
      { value: sun  },
      { value: moon }
    ],
    autoplay: true,
    easing: 'linear',
    autoplay: false
})

//Skiptir um lit á SVG myndinni (sól og tungl)
var circle = anime({
    targets: "path",
    loop: true,
    fill: ["#fca903", "#acadad"], //Fade-ar á milli tveggja lita
    direction: 'alternate',
    easing: 'linear',
    autoplay: false
});



