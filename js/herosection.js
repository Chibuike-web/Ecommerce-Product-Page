const cartDropdown = document.getElementById("cart-dropdown");
const shoppingCart = document.getElementById("shopping-cart");
const thumbnails = document.querySelectorAll(".thumbnail");
const largeProductImage = document.getElementById("large-product-image");

shoppingCart.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("click");
	cartDropdown.classList.toggle("open");
});

document.addEventListener("click", (e) => {
	if (!shoppingCart.contains(e.target) && !cartDropdown.contains(e.target)) {
		cartDropdown.classList.remove("open");
	}
});

thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener("click", (e) => {
		e.preventDefault();
		thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active-thumbnail"));
		thumbnail.classList.add("active-thumbnail");
		largeProductImage.src = `./images/image-product-${index + 1}.jpg`;
	});

	thumbnail.addEventListener("mouseenter", (e) => {
		if (thumbnail.classList.contains("active-thumbnail")) {
			return;
		} else {
			thumbnail.classList.add("opacity");
		}
	});

	thumbnail.addEventListener("mouseleave", (e) => {
		thumbnail.classList.remove("opacity");
	});
});
