
/* 
    2. В форму обратной связи добавить возможность выбора города обращения. Сам список
    должен загружаться после загрузки страницы через AJAX.
*/
let cities = [];
function addOptions(data) {
    cities = JSON.parse(data);
    $.each(cities, (idx, city) => {
        $("#inputCity").append( "<option>"+city.name+"</option>" );
    });
}

$(document).ready(function(){
    $.ajax({
        url: "https://raw.githubusercontent.com/EVStarostin/GEEK_BRAINS__free-courses/master/js2/lesson%204/home%20work/src/cities.json"
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