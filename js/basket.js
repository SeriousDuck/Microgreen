const basket = {
    'rykola': 0,
    'amarant': 0,
    'mangold': 0,
    'daikon': 0,
};


document.onclick = event => {
    if(event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
    if(event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
}

// збільшення кількості товару
const plusFunction = id => {
    basket[id]++;
    renderBasket();
}

// зменшення кількості товару
const minusFunction = id => {
    if(basket[id] - 1 == 0) {
        deleteFunction(id);
        return true;
    }
    basket[id]--;
    renderBasket();
}

// видалення товару з корзини
const deleteFunction = id => {
    delete basket[id];
    renderBasket();
}

const renderBasket = () => {
    console.log(basket);
}

renderBasket();