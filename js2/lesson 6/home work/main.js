$( function() {
    $("#datepicker").datepicker({
        monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь"
        ,"Ноябрь","Декабрь"],
        dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
        firstDay:1,
        dateFormat:"dd.mm.yy"
    });
} );

function applyjQueryUIEffect(field) {
    $(field).effect( "bounce", "slow" );
    $("#dialog").dialog( {modal:true, draggable:false, resizable: false} );
}

$('.cart .title').on('click', () => {
    $('.cart').toggleClass('show-items');
})