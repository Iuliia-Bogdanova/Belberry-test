// import { initCart } from "./modules/cart.js";

// document.addEventListener("DOMContentLoaded", () => {
//     initCart(); // Инициализация функционала корзины после загрузки страницы

//     // Получаем элементы
//     const openCartButton = document.querySelector(".checkout .image-block");
//     const closeCartButton = document.querySelector(".modal .close-button");
//     const modal = document.getElementById("modal-1");
//     const checkoutButton = modal.querySelector(".checkout-button");

//     // Открыть попап при клике на кнопку корзины
//     openCartButton.addEventListener("click", () => {
//         modal.showModal();
//     });

//     // Закрыть попап при клике на кнопку закрытия
//     closeCartButton.addEventListener("click", () => {
//         modal.close();
//     });

//     // Закрыть попап при клике на оверлей
//     modal.addEventListener("click", (event) => {
//         if (event.target === modal) {
//             modal.close();
//         }
//     });

//     // Закрыть попап при клике на "Перейти в каталог", если корзина пуста
//     checkoutButton.addEventListener("click", (event) => {
//         if (checkoutButton.textContent === "Перейти в каталог") {
//             modal.close();
//             event.preventDefault();
//         } else {
//             modal.close(); // Временно закрываем попап на "Перейти к оформлению"
//         }
//     });

//     // Сброс корзины к начальному состоянию при закрытии попапа
//     modal.addEventListener("close", () => {
//         initCart(); // Переинициализация корзины для сброса к начальному состоянию
//     });
// });


import { initCart } from "./modules/cart.js";

document.addEventListener("DOMContentLoaded", () => {
    initCart();

    // Получаем элементы
    const openCartButton = document.querySelector(".checkout .image-block");
    const closeCartButton = document.querySelector(".close-button");
    const modal = document.getElementById("modal-1");

    // Открыть попап и показать кнопку закрытия
    openCartButton.addEventListener("click", () => {
        modal.showModal(); // Открывает диалоговое окно
        closeCartButton.style.display = "block"; // Показываем кнопку закрытия
    });

    // Закрыть попап и скрыть кнопку закрытия
    closeCartButton.addEventListener("click", () => {
        modal.close(); // Закрывает диалоговое окно
        closeCartButton.style.display = "none"; // Скрываем кнопку закрытия
    });

    // Закрыть попап при клике на оверлей
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
            closeCartButton.style.display = "none"; // Скрываем кнопку закрытия
        }
    });
});
