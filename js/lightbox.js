const largeProductImage = document.getElementById("large-product-image");
const lightboxLargeProductImage = document.getElementById("lightbox-large-product-image");
const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");

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

//Lighbox thumbnails
lightboxThumbnails.forEach((thumbnail, index) => {
	// Click event
	thumbnail.addEventListener("click", (e) => {
		e.preventDefault();
		lightboxThumbnails.forEach((thumbnail) => thumbnail.classList.remove("active-thumbnail"));
		thumbnail.classList.add("active-thumbnail");
		lightboxLargeProductImage.src = `./images/image-product-${index + 1}.jpg`;
	});

	// Mouseenter event
	thumbnail.addEventListener("mouseenter", (e) => {
		if (thumbnail.classList.contains("active-thumbnail")) {
			return; // Do nothing if it's already active
		} else {
			thumbnail.classList.add("opacity");
		}
	});

	// Mouseleave event to clean up opacity
	thumbnail.addEventListener("mouseleave", (e) => {
		thumbnail.classList.remove("opacity");
	});
});
