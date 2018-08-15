/* 
    1. С помощью jQuery создать контрол, работающий с вкладками. Пример -
    http://dimox.name/examples/universal-jquery-tabs-script/ . Можно использовать любую анимацию,
    методы show, hide и подобные. Код примера желательно не смотреть. 
*/

$(document).ready(function(){
    $(".tabs__tab").on("click", function(){
        $(".tabs__tab").removeClass("active");
        $(this).addClass("active");

        let idx = $(this).index();
        $(".content").css("display", "none");
        $(".content").eq(idx).fadeIn("slow");
    })
})

/* 
    2. В форму обратной связи добавить возможность выбора города обращения. Сам список
    должен загружаться после загрузки страницы через AJAX.
*/
let cities = [];
function addOptions(data) {
    cities = data;
    $.each(data, (idx, city) => {
        $("#inputCity").append( "<option>"+city.name+"</option>" );
    });
}

$(document).ready(function(){
    $.ajax({
        url: "cities.json"
    }).done(addOptions);
});

/* 
    3. * Список из п.2 превратить в текстовое поле-автокомплит. Если пользователь ввёл 3 и более
    символов, нужно подгрузить список городов и показать подходящие по вводу. При клике на
    подходящий город, ввести его полное название в текстовое поле.
*/

$("#inputCityAutoComplete").on("input", function() {
    $(".city-list li").remove();
    if ( $(this).val().length > 2 ) {
        const val = $(this).val().toLowerCase();
        const filteredCities = cities.filter(city => city.name.toLowerCase().indexOf(val) !== -1);
        $.each(filteredCities, (idx, city) => {
            const li = $( "<li>"+city.name+"</li>" );
            li.on("click", function() {
                $("#inputCityAutoComplete").val( $(this).text() );
                $(".city-list li").remove();
            });
            $(".city-list").append( li );
        });
    }
});

$("#inputCityAutoComplete").on("blur", function(e) {
    setTimeout(() => {
        $(".city-list li").remove(); 
    }, 100);
})