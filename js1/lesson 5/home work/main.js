function getIATA() {
  var data = null;

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      getPrices(
        JSON.parse(this.responseText).origin.iata,
        JSON.parse(this.responseText).destination.iata,
        findTheCheapestTicket
      );
    }
  });

  xhr.open("GET", "https://www.travelpayouts.com/widgets_suggest_params?q=%D0%98%D0%B7%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D1%8B%20%D0%B2%20%D0%9D%D0%B8%D1%86%D1%86%D1%83");

  xhr.send(data);
}

function getPrices(originIATA, destinationIATA, callback) {
  var data = null;

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      callback(JSON.parse(this.responseText).best_prices);
    }
  });

  xhr.open("GET", `http://min-prices.aviasales.ru/calendar_preload?origin=${originIATA}&destination=${destinationIATA}&depart_date=2018-09-01&one_way=true`);

  xhr.send(data);
}

function findTheCheapestTicket(tickets) {
  tickets = tickets.filter( (ticket) => ticket.depart_date.match(/(2018)-((09)|(10)|(11))-\d\d/g) );
  const theCheapestTicket = tickets.sort( (a, b) => a.value - b.value )[0];
  console.log(`
    The cheapest ticket from Moscow to Nice:
    price: ${theCheapestTicket.value}
    depart_date: ${theCheapestTicket.depart_date}
  `);
}

getIATA();