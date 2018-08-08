function showMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('menu-opened');
}

window.onresize = function (e) {
    setTimeout(function () {
        if (document.documentElement.clientWidth > 991) {
            var menu = document.querySelector('.menu');
            menu.classList.remove('menu-opened');
        }
    }, 500);
}
