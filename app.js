// navigation slider

const burger = document.querySelector('.burger');
const burgerTop = document.querySelector('.burgerTop');
const burgerMid = document.querySelector('.burgerMid');
const burgerBottom = document.querySelector('.burgerBottom');
const mainNav = document.querySelector('.mainNav');
const contactBtn = document.getElementById('contactBtn');

burger.addEventListener('click', () => {
  burgerTop.classList.toggle('burgerTopTransform');
  burgerMid.classList.toggle('burgerMidTransform');
  burgerBottom.classList.toggle('burgerBottomTransform');
  mainNav.classList.toggle('navSlide');
});

contactBtn.addEventListener('click', () => {
	burgerTop.classList.toggle('burgerTopTransform');
  burgerMid.classList.toggle('burgerMidTransform');
  burgerBottom.classList.toggle('burgerBottomTransform');
	mainNav.classList.toggle('navSlide');
});




