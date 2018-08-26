$( function() {
    $("#datepicker").datepicker({
        monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь"
        ,"Ноябрь","Декабрь"],
        dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
        firstDay:1,
        dateFormat:"dd.mm.yy"
    });

    $('.cart .title').on('click', () => {
        $('.cart').toggleClass('show-items');
    })

    $('.product').draggable({
        revert: true, 
        revertDuration: 1,
        stack: '.cart',
        scroll: false,
        start: function() {
            $(this).css("transform", "scale(.5)")
        },
        stop: function() {
            $(this).css("transform", "")
        }
    });
    
    $('.cart').droppable({
        accept: ".product",
        over: function(){
            $(this).css("background-color","#d7fa99");
        },
        out: function(){
            $(this).css("background-color","");
        },
        drop: function( event, ui ){
            // alert(`Вы перетащили элемент ${ui.draggable} в область ${$(this)}.`);
            $(this).css("background-color","");
            const product = new Product($(ui.draggable).find('.name').text(), parseFloat($(ui.draggable).find('.price').text()));
            cart.addProduct(product.getProductData());
        }
    });
} );

function applyjQueryUIEffect(field) {
    $(field).effect( "bounce", "slow" );
    $("#dialog").dialog( {modal:true, draggable:false, resizable: false} );
}
    