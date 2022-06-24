const products = {
    items: [
        {
            name: 'Хлеб',
            price: 40,
            count: 4,
        },
        {
            name: 'Футболка',
            price: 300,
            count: 3,
        },
        {
            name: 'Очки',
            price: 500,
            count: 1,
        },
        {
            name: 'Молоко',
            price: 80,
            count: 1,
        },
        {
            name: 'Сидр',
            price: 90,
            count: 3,
        },
        {
            name: 'Сникерс',
            price: 70,
            count: 2,
        },
    ],

    getTotalProducts() {
        return this.items.reduce((acc, item) => {
            return acc + item.count;
        }, 0);
    },

    getTotalPrice() {
        return this.items.reduce((acc, item) => {
            return acc + item.price * item.count;
        }, 0);
    },

    addToCart(product) {
        this.items.push(product)
    }
};


function update() {
    console.log(products.getTotalPrice());
    let basket = document.getElementById('monitor');
    let count = products.getTotalProducts();
    let cost = products.getTotalPrice();

    if (!count) {
        basket.innerHTML = 'Корзина пуста';
    }
    else { basket.innerHTML = `В корзине: ${count} товаров на сумму ${cost} рублей` }
}

update()

function buy(product) {
    for (var i in products.items) {
        if (products.items[i].name == product) {
            products.items[i].count += 1;
            break
        }
    }
    update()
}

console.log(products.items)