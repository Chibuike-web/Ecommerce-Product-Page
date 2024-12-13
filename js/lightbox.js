const largeProductImage = document.getElementById("large-product-image");
const lightboxLargeProductImage = document.getElementById("lightbox-large-product-image");
const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");

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
