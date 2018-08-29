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
        it('при первоначальной инициализации корзины должен заполниться ID пользователя', function() {
            expect(cart.cart.user_id).toBeDefined();
        });
    }); 

    describe('addProduct', function() {
        it('при добавлении товара в корзину длина массива товаров должна увеличиваться', async function() {
            await cart.addProduct({product: 'iPhone 8', price: 60000});
            cart.cart = await cart.getCart();
            expect(cart.cart.cart.length).toBe(1);
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
        beforeEach(async function() {
            await cart.addProduct({product: 'iPhone 8', price: 60000});
            cart.cart = await cart.getCart();
        });

        it('при удалении товара из корзины длина массива товаров должна уменьшаться', async function() {
            await cart.deleteProduct(cart.cart.cart[0].product_id);
            cart.cart = await cart.getCart();
            expect(cart.cart.cart.length).toBe(0);
        });
    }); 
        

  
    // it("should be able to play a Song", function() {
    //     player.play(song);
    //     expect(player.currentlyPlayingSong).toEqual(song);
    // });
  
    // describe("when song has been paused", function() {
    //     beforeEach(function() {
    //         player.play(song);
    //         player.pause();
    //     });
    
    //     it("should indicate that the song is currently paused", function() {
    //         expect(player.isPlaying).toBeFalsy();
    //     });
    
    //     it("should be possible to resume", function() {
    //         player.resume();
    //         expect(player.isPlaying).toBeTruthy();
    //         expect(player.currentlyPlayingSong).toEqual(song);
    //     });
    // });
  
    // // demonstrates use of spies to intercept and test method calls
    // it("tells the current song if the user has made it a favorite", function() {
    //     spyOn(song, 'persistFavoriteStatus');
    
    //     player.play(song);
    //     player.makeFavorite();
    
    //     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    // });
  
    // //demonstrates use of expected exceptions
    // describe("#resume", function() {
    //     it("should throw an exception if song is already playing", function() {
    //         player.play(song);
    
    //         expect(function() {
    //         player.resume();
    //         }).toThrowError("song is already playing");
    //     });
    // });
});
  