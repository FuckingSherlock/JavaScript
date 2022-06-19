function drawBoard() {
    let board = document.querySelector('.board');
    let block;
    let flag = true;

    for (let i = 0; i < 8; i++) {

        for (let j = 0; j < 8; j++) {

            if (j == 0)
                flag = !flag;

            block = document.createElement('div');

            if (flag)
                block.className = 'block black';
            else
                block.className = 'block white';
            board.appendChild(block);
            flag = !flag;
        }
    }
}

drawBoard();


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

console.log(products.getTotalPrice());

var basket = document.getElementById('basket');

let count = products.getTotalProducts();
let cost = products.getTotalPrice();

if (!count) {
    basket.innerHTML = 'Корзина пуста';
}
else { basket.innerHTML = `В корзине: ${count} товаров на сумму ${cost} рублей` }

