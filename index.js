const images = [
	{
		id: 0,
		src: "./images/image-product-1-thumbnail.jpg",
	},
	{
		id: 1,
		src: "./images/image-product-2-thumbnail.jpg",
	},
	{
		id: 2,
		src: "./images/image-product-3-thumbnail.jpg",
	},
	{
		id: 3,
		src: "./images/image-product-14-thumbnail.jpg",
	},
];

const cartDropdown = document.getElementById("cart-dropdown");
const shoppingCart = document.getElementById("shopping-cart");

shoppingCart.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("click");
	cartDropdown.classList.toggle("open");
});

// Close the dropdown when clicking outside of it
document.addEventListener("click", (e) => {
	if (!shoppingCart.contains(e.target) && !cartDropdown.contains(e.target)) {
		cartDropdown.classList.remove("open");
	}
});
