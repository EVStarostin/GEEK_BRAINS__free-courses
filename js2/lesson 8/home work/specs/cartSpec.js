describe("Cart", function() {
    let cart;
  
    beforeEach(async function() {
        localStorage.removeItem('userId');
        cart = new Cart('http://89.108.65.123:8080');
        await cart.createCart();
    });

    describe('createCart', function() {
        it('при первоначальной инициализации корзина должна быть пуста', function() {
            expect(cart.cart.cart.length).toBe(0);
        });
        it('при первоначальной инициализации корзины в ответе с сервера должен прийти ID пользователя', function() {
            expect(cart.cart.user_id).toBeDefined();
        });
    }); 

    describe('addProduct', function() {
        let cartLength;

        it('при добавлении товара в корзину длина массива товаров должна увеличиваться', async function() {
            cartLength = cart.cart.cart.length;
            await cart.addProduct({product: 'iPhone 8', price: 60000});
            cart.cart = await cart.getCart();
            expect(cart.cart.cart.length).toBe(cartLength+1);
        });
        it('при добавлении товара в корзину должен добавиться товар с переданными характеристиками', async function() {
            await cart.addProduct({product: 'iPhone 8', price: '60000'});
            cart.cart = await cart.getCart();
            expect(cart.cart.cart[0].product).toBe('iPhone 8');
            expect(cart.cart.cart[0].price).toBe('60000');
            expect(cart.cart.cart[0].product_id).toBeDefined();
        });
    }); 

    describe('deleteProduct', function() {
        let cartLength;

        beforeEach(async function() {
            await cart.addProduct({product: 'iPhone 8', price: 60000});
            cart.cart = await cart.getCart();
            cartLength = cart.cart.cart.length;
        });

        it('при удалении товара из корзины длина массива товаров должна уменьшаться', async function() {
            await cart.deleteProduct(cart.cart.cart[0].product_id);
            cart.cart = await cart.getCart();
            expect(cart.cart.cart.length).toBe(cartLength-1);
        });
    }); 
});
