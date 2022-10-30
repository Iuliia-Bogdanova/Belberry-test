//элементы формы
const squareInput = document.querySelector('#square-input');
//console.log(squareInput); - проверяем
const squareRange = document.querySelector('#square-range');
//console.log(squareRange); 

//слушаем событие input - "добавить прослушку события"
//связываем событие с текстовым полем - отслеживаем передвижение бегунка
squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value
})

//связка текстового поля с range
squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
})