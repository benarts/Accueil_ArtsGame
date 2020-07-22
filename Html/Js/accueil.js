
var artsbook = document.getElementById("artsbook");
var cv = document.getElementById("cv");
function big(x) {
    x.style.width = "60%";
    artsbook.style.width = "40%";
    artsbook.style.opacity = "1";

    Accéder[0].style.opacity = "0";
    Accéder[0].style.top = "70vh";

    blocktitre[0].style.width = "45%";

    titre[0].style.opacity = "0";

    titre2[0].style.opacity = "0";
    titre2[0].style.marginTop = "9vw";
  }
  function normal(x) {
    x.style.width = "30%";

    artsbook.style.width = "70%";
    artsbook.style.opacity = "1";

    Accéder[0].style.opacity = "1";
    Accéder[0].style.top = "55vh";

    blocktitre[0].style.width = "70%";

    titre[0].style.opacity = "1";

    titre2[0].style.opacity = "1";
    titre2[0].style.marginTop = "11vw";
  }

var ben = document.getElementsByClassName("ben");
var kader = document.getElementsByClassName("kader");
var Accéder = document.getElementsByClassName("Accéder");
var titre = document.getElementsByClassName("titre");
var titre2 = document.getElementsByClassName("titre2");
var blocktitre = document.getElementsByClassName("block-titre");

function title() {
    var title = document.getElementsByClassName("svg1");
    title[0].style.top = '-0.5%';
    title[0].style.height = '7vh';
    //title[0].style.opacity = '.6'
}
function barre() {
  var block1 = document.getElementById("block1");
  var block2 = document.getElementById("block2");
  block1.style.width = '100%';
  block2.style.width = '100%';
}
function body() {
    var body = document.getElementsByClassName("body1");
    body[0].style.opacity = '1';
    var body2 = document.getElementsByClassName("body2");
    body2[0].style.opacity = '1';
}
setInterval(barre, 8000);
setInterval(body, 7000);
setInterval(title, 5000);
/////////////////////////////////////////
//particule
////////////////////////////////////////
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 88,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#FFFFFF",
      "opacity": 0,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});