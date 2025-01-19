const MobileRightArrow = document.getElementById("mobile-right-arrow");
const MobileLeftArrow = document.getElementById("mobile-left-arrow");
const MobileLargeProductImage = document.getElementById("mobile-large-product-image");
const harmburgerMenu = document.querySelector(".harmburger-menu");
const mobileNavSidebar = document.querySelector(".mobile-nav-sidebar");
const overlay = document.querySelector(".overlay");
const mobileCloseBtn = document.querySelector(".mobile-close-btn");

let rightClick = 0;
const totalImages = 4;

MobileRightArrow.addEventListener("click", (e) => {
	e.preventDefault();
	rightClick = (rightClick + 1) % totalImages;
	MobileLargeProductImage.src = `./images/image-product-${rightClick + 1}.jpg`;
});

let leftClick = totalImages - 1;

MobileLeftArrow.addEventListener("click", (e) => {
	e.preventDefault();
	leftClick = (leftClick - 1 + totalImages) % totalImages;
	MobileLargeProductImage.src = `./images/image-product-${leftClick + 1}.jpg`;
});

harmburgerMenu.addEventListener("click", (e) => {
	e.preventDefault();
	mobileNavSidebar.classList.add("visible");
	overlay.classList.add("visible");
});

mobileCloseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	mobileNavSidebar.classList.remove("visible");
	overlay.classList.remove("visible");
});
