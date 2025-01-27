const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const quantity = document.getElementById("quantity");
const addToCartBtn = document.getElementById("addToCart-btn");
const cartDropdown = document.getElementById("cart-dropdown");
const cartItem = cartDropdown.querySelector("#cart-item");

increaseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	quantity.textContent = parseInt(quantity.textContent) + 1;
});

decreaseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	quantity.textContent = parseInt(quantity.textContent) - 1;
	if (parseInt(quantity.textContent) < 0) {
		quantity.textContent = "0";
	}
});

let btnPresent = false;
addToCartBtn.addEventListener("click", (e) => {
	e.preventDefault();

	if (quantity.textContent > 0) {
		if (!btnPresent) {
			const button = document.createElement("button");
			button.textContent = "Checkout";
			button.className =
				"bg-orange rounded-[0.625rem] px-[0.9375rem] py-[1.25rem] text-white w-full";
			cartItem.className =
				"flex flex-col flex-grow items-center justify-between px-[1.5rem] pb-[2rem] pt-[1.5rem]";
			cartItem.appendChild(button);
			btnPresent = true;
			const span = document.createElement("span");
			span.className =
				"bg-orange absolute text-[8px] leading-[1.2] right-[-5px] top-[-5px] font-medium text-white px-[8px] py-[2px] rounded-full";
			span.textContent = quantity.textContent;
			const shoppingCart = document.getElementById("shopping-cart");
			shoppingCart.appendChild(span);
		}
	}
});
