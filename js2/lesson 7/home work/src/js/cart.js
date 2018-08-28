class Http {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async request(path = '', method = 'get') {
        try {
            return await fetch(`${this.baseUrl}${path}`, {
                method
            }).then(
                (res) => res.json());
        } catch(e) {
            console.error(e);
            return false;
        }
    }
}

export class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = Number(productPrice);
    }
    getProductData() {
        return {
            product: this.name,
            price: this.price
        }
    }
}

class Cart {
    constructor(baseUrl, container) {
        this.http = new Http(baseUrl);
        this.container = container;
        this.createCart();
    }
    async render() {
        const cartData = await this.getCart();
        document.querySelector('.cart .status').innerText = `(${cartData.length} шт. — ${cartData.reduce((sum, product) => {return sum + +product.price}, 0)} руб.)`;
        this.container.innerHTML = '';
        cartData.forEach(product => {
            this.container.innerHTML += `
                <div class="card">
                    <div class="card-body">
                        <button class="btn btn-danger float-right delete-btn" data-product_id=${product.product_id} onclick=handleDelete(this)>&times;</button>
                        <h5 class="card-title">${product.product}</h5>
                        <p class="card-text">${product.price}</p>
                    </div>
                </div>`;
        });
    }
    async createCart() {
        const userId = localStorage.getItem('userId');
        if (userId) {
            this.cart = await this.http.request(`/shop?user_id=${userId}`);
        } else {
            this.cart = await this.http.request(`/shop`);
            localStorage.setItem('userId', this.cart.user_id);
        }
        this.userId = this.cart.user_id;
        this.render();
    }
    async getCart() {
        const cart = await this.http.request(`/shop?user_id=${this.userId}`);
        return cart.cart;
    }
    async addProduct(productData) {
        await this.http.request(`/shop?user_id=${this.userId}&product=${productData.product}&price=${productData.price}`, 'post');
        this.render();
    }
    // Метод удаления товара из корзины
    async deleteProduct(productId) {
        await this.http.request(`/shop?user_id=${this.userId}&product_id=${productId}`, 'delete');
        this.render();
    }
}

export let cart = new Cart('http://89.108.65.123:8080', document.querySelector('.cart .items'));

window.handleDelete = (btn) => {
    const productId = btn.dataset.product_id;
    cart.deleteProduct(productId);
}