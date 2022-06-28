// VARS
@@include("_vars.js");

// LAZY LOADING
@@include("vendors/yall.min.js");
document.addEventListener("DOMContentLoaded", yall);

// WEBP DETECION
@@include("vendors/modernizr-webp.min.js");

// SMOOTH SCROLL
@@include("vendors/smooth-scroll.min.js");
new SmoothScroll('a[href*="#"]', {
	speed: 800
});

// SWIPER
@@include("vendors/swiper-bundle.min.js");
@@include("components/slider.js");

// FIXED HEADER
@@include("components/fixedHeader.js");

// BURGER MENU
@@include("components/burgerMenu.js");

// TABS
@@include("components/tabs.js");