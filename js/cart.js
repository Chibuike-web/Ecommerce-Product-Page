const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const quantity = document.getElementById("quantity");
const addToCartBtn = document.getElementById("addToCart-btn");
const cartDropdown = document.getElementById("cart-dropdown");
const cartItem = cartDropdown.querySelector("#cart-item");
const h1 = document.querySelector("h1");
const shoppingCart = document.getElementById("shopping-cart");

// Check if the site is running locally or on GitHub Pages
const isLocal =
	window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const baseURL = isLocal ? "" : "/Ecommerce-Product-Page";

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

let click = false;
addToCartBtn.addEventListener("click", (e) => {
	e.preventDefault();

	if (quantity.textContent > 0 && !click) {
		const firstParagraph = cartItem.querySelector("p");
		firstParagraph.className = "hidden";

		// Cart content - Top Level div
		const parentDiv = document.createElement("div");
		parentDiv.className = "flex items-center w-full";

		// Image thumbnail
		const img = document.createElement("img");
		img.src = `${baseURL}/images/image-product-1-thumbnail.jpg`;
		img.alt = "Cart image thumbnail";
		img.classList.add("cart-img");
		parentDiv.appendChild(img);

		// Items
		const childDiv = document.createElement("div");

		// Item name
		const firstParagraphElement = document.createElement("p");
		firstParagraphElement.id = "item-name";
		firstParagraphElement.textContent = h1.textContent;

		// Item price quantity
		const secondParagraphElement = document.createElement("p");
		secondParagraphElement.textContent = `$125.00 x ${quantity.textContent}`;

		const cartSpan = document.createElement("span");
		cartSpan.textContent = `$${125 * parseInt(quantity.textContent)}.00`;
		cartSpan.classList.add("total-price");
		secondParagraphElement.appendChild(cartSpan);

		childDiv.appendChild(firstParagraphElement);
		childDiv.appendChild(secondParagraphElement);
		parentDiv.appendChild(childDiv);

		// Delete icon
		const deleteImg = document.createElement("img");
		deleteImg.src = `${baseURL}/images/icon-delete.svg`;
		deleteImg.alt = "Delete Icon";
		deleteImg.id = "delete-btn";
		parentDiv.appendChild(deleteImg);

		// Append parentDiv
		cartItem.appendChild(parentDiv);

		// Add quantity indicator on shopping cart
		const span = document.createElement("span");
		span.classList.add("cart-badge");
		span.textContent = quantity.textContent;
		const shoppingCart = document.getElementById("shopping-cart");
		shoppingCart.appendChild(span);

		if (!click) {
			const button = document.createElement("button");
			button.textContent = "Checkout";
			button.id = "checkout-btn";
			button.className =
				"bg-orange rounded-[0.625rem] px-[0.9375rem] py-[1.25rem] text-white w-full";
			cartItem.className =
				"flex flex-col flex-grow items-center justify-between px-[1.5rem] pb-[2rem] pt-[1.5rem]";
			cartItem.appendChild(button);
		}

		click = true;

		deleteImg.addEventListener("click", () => {
			parentDiv.remove();

			firstParagraph.className = "block";
			cartItem.className =
				"flex flex-col flex-grow items-center justify-center px-[1.5rem] pb-[2rem] pt-[1.5rem]";

			span.remove();

			const checkoutButton = document.getElementById("checkout-btn");
			if (checkoutButton) {
				checkoutButton.remove();
			}

			quantity.textContent = 0;
			click = false;
		});
	}
});
