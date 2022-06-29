const products = {
    items: [
        {
            name: 'Хлеб',
            price: 40,
            count: 0,
        },
        {
            name: 'Футболка',
            price: 300,
            count: 0,
        },
        {
            name: 'Очки',
            price: 500,
            count: 0,
        },
        {
            name: 'Молоко',
            price: 80,
            count: 0,
        },
        {
            name: 'Сидр',
            price: 90,
            count: 0,
        },
        {
            name: 'Сникерс',
            price: 70,
            count: 0,
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

let bul = 0
function buy(product, bul) {
    for (var i in products.items) {
        if (products.items[i].name == product) {
            if (bul == 0) { products.items[i].count += 1; }
            else if (products.items[i].count > 0) {
                products.items[i].count -= 1;
            }
            break
        }
    }
    update(); viever()
}

function viever() {
    let viev = document.getElementById('viev')
    viev.innerHTML = '<h3>Сотав корзины</><br/>'
    for (var i in products.items) {
        viev.innerHTML += products.items[i].name + "<br/>" + " Цена за шт.  " + products.items[i].price + " Количество в корзине   " + products.items[i].count + "<br/><br/>";
    }
}

viever()

function getButtons() {
    let buttons = document.getElementById('product-list')
    buttons.innerHTML = '<br/>'
    for (var i in products.items) {
        let btn = document.createElement('A')
        let btn2 = document.createElement('A')
        btn.innerHTML += `<button>Добавить ${products.items[i].name}</button>`;
        btn.setAttribute('onclick', `buy('${products.items[i].name}', 0)`)
        buttons.appendChild(btn);
        btn2.innerHTML += `<button>Убрать ${products.items[i].name}</button>` + '<br /><br />';
        btn2.setAttribute('onclick', `buy('${products.items[i].name}', 1)`)
        buttons.appendChild(btn2);
    }
}


getButtons()