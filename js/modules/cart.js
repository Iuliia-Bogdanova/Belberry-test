export function initCart() {
    const cart = document.getElementById("modal-1");

    if (!cart) {
        console.error("Корзина с id 'modal-1' не найдена.");
        return;
    }

    const totalAmountElement = cart.querySelector(".total-amount");
    const totalPriceContainer = cart.querySelector(".total-price");
    const checkoutButton = cart.querySelector(".checkout-button");
    const itemsContainer = cart.querySelector(".content-item");
    const noItemsMessage = "Вы ничего не добавили в корзину";

    function updateTotalPrice() {
        const items = cart.querySelectorAll(".modal__content");
        let totalPrice = 0;
        items.forEach((item) => {
            const priceElement = item.querySelector(".price");
            const quantityElement = item.querySelector(".number");
            const price = parseInt(
                priceElement.textContent.replace("₽", "").trim(),
                10
            );
            const quantity = parseInt(quantityElement.textContent, 10);
            totalPrice += price * quantity;
        });
        totalAmountElement.textContent = `${totalPrice} ₽`;

        if (totalPrice === 0) {
            showEmptyCart();
        }
    }

    function showEmptyCart() {
        itemsContainer.innerHTML = `<p>${noItemsMessage}</p>`;
        totalPriceContainer.style.display = "none";
        checkoutButton.textContent = "Перейти в каталог";
        checkoutButton.removeAttribute("href");
        checkoutButton.setAttribute("type", "button");
    }

    function removeItem(item) {
        item.remove();
        updateTotalPrice();
    }

    cart.addEventListener("click", (event) => {
        if (event.target.closest(".plus-btn")) {
            const quantityElement = event.target
                .closest(".amount")
                .querySelector(".number");
            quantityElement.textContent =
                parseInt(quantityElement.textContent, 10) + 1;
            updateTotalPrice();
        }

        if (event.target.closest(".minus-btn")) {
            const quantityElement = event.target
                .closest(".amount")
                .querySelector(".number");
            const newQuantity = parseInt(quantityElement.textContent, 10) - 1;
            if (newQuantity > 0) {
                quantityElement.textContent = newQuantity;
            } else {
                removeItem(event.target.closest(".modal__content"));
            }
            updateTotalPrice();
        }

        if (event.target.closest(".remove-button")) {
            removeItem(event.target.closest(".modal__content"));
        }
    });

    updateTotalPrice(); // Инициализация правильной суммы при загрузке
}
