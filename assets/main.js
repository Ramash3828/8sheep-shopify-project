// Menu bar -----------------
const navbar = document.querySelector(".nav");
const menuButton = document.querySelector(".nav__menu-box ");
const closeButton = document.querySelector(".nav__close");
const toggleButton = document.querySelector(".nav__button");
const icon = document.querySelectorAll(".nav__link-img");
const logo = document.querySelector(".logo__img");
const mainHeader = document.querySelector(".announcement-bar");

toggleButton.addEventListener("click", function () {
	menuButton.classList.toggle("show");
});
closeButton.addEventListener("click", function () {
	menuButton.classList.remove("show");
});

// Change background color
window.addEventListener("scroll", function () {
	const position = window.pageYOffset;

	if (position > 10) {
		navbar.style.backgroundColor = `#fff`;
		logo.style.filter = `brightness(0.3)`;
		icon[0].style.filter = `brightness(0.3)`;
		icon[1].style.filter = `brightness(0.3)`;
		icon[2].style.filter = `brightness(0.3)`;
	} else {
		navbar.style.backgroundColor = `#ffffff36`;
		logo.style.filter = `brightness(1)`;
		icon[0].style.filter = `brightness(1)`;
		icon[1].style.filter = `brightness(1)`;
		icon[2].style.filter = `brightness(1)`;
	}
});

// Brand logo slider
$(".brand__logo-mobile").slick({
	centerMode: true,
	centerPadding: "50px",
	slidesToShow: 1,
	draggable: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
	],
});

// Product Cullection slider----------
$(".featured-collection__product-mobile").slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 1.25,
	slidesToScroll: 1,
	draggable: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1.25,
				slidesToScroll: 1,
			},
		},
	],
});
// Video slider----------
$(".videos__content-mobile").slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 1.5,
	slidesToScroll: 1,
	draggable: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1.5,
				slidesToScroll: 1,
			},
		},
	],
});

// Product Cullection slider----------
$(".review__content-slider").slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	draggable: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			},
		},
	],
});

// Footer Accordion--------------
$(document).ready(function () {
	// toggle the component with class accordion_body
	$(".footer__link-title-mobile").click(function () {
		if ($(".footer__link-content-mobile").is(":visible")) {
			$(".footer__link-content-mobile").slideUp(500);

			// $(".plusminus").text("+");
			$(".footer__link-title-mobile").removeClass("active");
		}
		if ($(this).next(".footer__link-content-mobile").is(":visible")) {
			$(this).next(".footer__link-content-mobile").slideUp(500);

			// $(this).children(".asked-question__plus").text("+");
			$(this).removeClass("active");
		} else {
			$(this).next(".footer__link-content-mobile").slideDown(500);

			// $(this).children(".asked-question__plus").text("+");
			$(this).addClass("active");
		}
	});
});
