const largeProductImage = document.getElementById("large-product-image");
const lightboxLargeProductImage = document.getElementById("lightbox-large-product-image");
const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const closeBtn = document.querySelector(".close-btn");

largeProductImage.addEventListener("click", (event) => {
	event.preventDefault();
	const lightboxContainer = document.getElementById("lightbox-container");
	const lightboxBackdrop = document.getElementById("lightbox-backdrop");
	lightboxContainer.classList.remove("hidden");
	lightboxBackdrop.addEventListener("click", (e) => {
		e.preventDefault();
		lightboxContainer.classList.add("hidden");
	});
});

lightboxThumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener("click", (e) => {
		e.preventDefault();
		lightboxThumbnails.forEach((thumbnail) => thumbnail.classList.remove("active-thumbnail"));
		thumbnail.classList.add("active-thumbnail");
		lightboxLargeProductImage.src = `./images/image-product-${index + 1}.jpg`;
	});

	thumbnail.addEventListener("mouseenter", (e) => {
		if (thumbnail.classList.contains("active-thumbnail")) {
			return;
		} else {
			thumbnail.classList.add("white-opacity");
		}
	});

	thumbnail.addEventListener("mouseleave", (e) => {
		thumbnail.classList.remove("white-opacity");
	});
});

closeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const lightboxContainer = document.getElementById("lightbox-container");
	lightboxContainer.classList.add("hidden");
});

let rightClick = 0;
const totalImages = 4; // Total number of images available

// Event listener for right arrow
rightArrow.addEventListener("click", (e) => {
	e.preventDefault();
	rightClick = (rightClick + 1) % totalImages; // Cycle through images
	lightboxLargeProductImage.src = `./images/image-product-${rightClick + 1}.jpg`;

	// Update active thumbnail class
	lightboxThumbnails.forEach((thumbnail, index) => {
		thumbnail.classList.toggle("active-thumbnail", index === rightClick);
	});
});

let leftClick = totalImages - 1;

// Event listener for left arrow
leftArrow.addEventListener("click", (e) => {
	e.preventDefault();
	leftClick = (leftClick - 1 + totalImages) % totalImages; // Cycle through images backward
	lightboxLargeProductImage.src = `./images/image-product-${leftClick + 1}.jpg`;

	// Update active thumbnail class
	lightboxThumbnails.forEach((thumbnail, index) => {
		thumbnail.classList.toggle("active-thumbnail", index === leftClick);
	});
});
