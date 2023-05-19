const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const bannerImage = document.querySelector(".banner-img");
const flecheGauche = document.querySelector(".arrow_left");
const flecheDroite = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const texte = document.querySelector(".tag-line");
let slidePosition = 0;


function changeSlide (){
	let newSrc = "./assets/images/slideshow/" + slides[slidePosition].image
	bannerImage.setAttribute("src",newSrc)
};

function changeTagLine (){
	let newTagLine = slides[slidePosition].tagLine
	texte.innerHTML = newTagLine
};


function changeDots (){
	const dotArray = dots.querySelectorAll(".dot")
	let dotSelect = document.querySelector(".dot_selected");
	dotSelect.classList.remove("dot_selected");
	dotArray[slidePosition].classList.add("dot_selected");
}

function initDots (){
	for (let dotIndex = 0; dotIndex < slides.length ; dotIndex++) {
		let newDot = document.createElement("div");
		newDot.classList.add("dot");
		dots.appendChild(newDot);
	}	
		const dotSelect = document.querySelector(".dot");
		dotSelect.classList.add("dot_selected");
}


initDots()

flecheGauche.addEventListener("click", function (event) {
	slidePosition--;

	if (slidePosition < 0) {
		slidePosition = 3
	}
	changeSlide()
	changeTagLine()
	changeDots()
});

flecheDroite.addEventListener("click", function (event) {
	slidePosition++;

	if (slidePosition == slides.length) {
		slidePosition = 0
	}
	changeSlide()
	changeTagLine()
	changeDots()
});

	
