// Testimonial Slider

// Clone first comment

const tSlider = document.querySelector(".t-carousel-slider");

function cloneFirstComment() {
	const comments = [...document.querySelectorAll(".t-card")];
	const firstClone = comments[0].cloneNode(true);
	tSlider.appendChild(firstClone);
}

cloneFirstComment();

// Assign rest of required variables

const commentsAndClones = document.querySelectorAll(".t-card");

//Assign the counter

let counter = 0;

// Add setInterval transform functionality

function slideLeft() {
	if (counter <= 4) {
		tSlider.style.transition = `transform 0.4s ease-in-out`;
		counter++;
		tSlider.style.transform = `translateX(${-100 * counter}%)`;
		colorActiveCircle();
	} else return;
}

// Add transitionend to reset slider position

tSlider.addEventListener("transitionend", () => {
	if (counter >= 5) {
		tSlider.style.transition = `none`;
		counter = 1;
		tSlider.style.transform = `translateX(${-100 * counter}%)`;
	}
});

// Progress Indicator ====================================

// Set number comments

const numbComments = commentsAndClones.length - 1;

// Progress bar variable

const progBar = document.querySelector(".progress-bar");

// Create progress circles

function createCircles() {
	let numbCircles = 0;
	while (numbCircles < numbComments) {
		const newDiv = document.createElement("div");
		progBar.appendChild(newDiv);
		progBar.lastChild.classList.add("progress-circle");
		numbCircles++;
	}
}

createCircles();

// Set current circle

const circlesArr = [...document.querySelectorAll(".progress-circle")];
const numCircles = circlesArr.length;
let currentCircle = 1;

function colorActiveCircle() {
	let currentCircleRemainder = currentCircle % numCircles;
	circlesArr.forEach((el) => {
		el.classList.remove("active-circle-color");
	});
	circlesArr[currentCircleRemainder].classList.add("active-circle-color");
	currentCircle++;
	// console.log(currentCircle, currentCircleRemainder);
}

setInterval(slideLeft, 5000);
