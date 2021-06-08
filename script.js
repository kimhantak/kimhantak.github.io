var prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

const showSlide = (event) => {
  if (event.children[1].style.height == "0px") {
    event.children[1].style.height = "170px";
    event.children[1].style.padding = "8px";
  }
  else {
    event.children[1].style.height = "0px";
    event.children[1].style.padding = "0px";
  }
    
}

const showslide = () => {
  document.querySelector(".slide-menu ").style.width = "100vw";
  document.querySelector(".slide-menu ").style.left = "0px";
}
const hideslide = () => {
  document.querySelector(".slide-menu ").style.width = "0vw";
  document.querySelector(".slide-menu ").style.left = "-100px";
}

const introHeight = document.querySelector(".intro").scrollHeight;
const moveTo = () => {
  window.scrollTo(0, introHeight);
}

// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
var mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2 
};

var colors = [
	'#ccffff',
	'#ff9999',
	'#cfaacd',
	'#55c6aa',
  '#aa522c'
];

var gravity = 0.5;
var friction = 0.8;


// Event Listeners
addEventListener("mousemove", function(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener("resize", function() {
	canvas.width = innerWidth;	
	canvas.height = innerHeight;
  init();
});

addEventListener("click", function(event) {
	init();
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
function Ball(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.update = function() {
		if (this.y + this.radius + this.dy> canvas.height) {
			this.dy = -this.dy;
			this.dy = this.dy * friction;
			this.dx = this.dx * friction;
		} else {
			this.dy += gravity;
		}

		if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
			this.dx = -this.dx * friction;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	};

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	};
}


// Implementation
var ballArray = [];

function init() {
	ballArray = [];

	for (let i = 0; i < 80; i++) {
		var radius = randomIntFromRange(8, 20);
		var x = randomIntFromRange(radius, canvas.width - radius);
		var y = randomIntFromRange(0, canvas.height - radius);
		var dx = randomIntFromRange(-3, 3)
		var dy = randomIntFromRange(-2, 2)
	    ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < ballArray.length; i++) {
		ballArray[i].update();
	}
}


var prev = window.pageYOffset;

window.onscroll = () => {
  let current = window.pageYOffset;
  
  if (prev+45 < current) {
    ballArray = [];

	for (let i = 0; i < 80; i++) {
		var radius = randomIntFromRange(8, 20);
		var x = randomIntFromRange(radius, canvas.width - radius);
		var y = randomIntFromRange(canvas.height/2, canvas.height - radius);
		var dx = randomIntFromRange(-3, 3)
		var dy = randomIntFromRange(-2, 2)
	    ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
	}
  }

  prev = current;
}

init();
animate();
