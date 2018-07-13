const categories = ["Юмор", "Ужастики", "Фантастика", "Драма", "Хоррор"];
const films = [];

class Comment {
  constructor(text, author, stars) {
    this.text = text;
    this.author = author;
    this.stars = stars;
  }
}

class Film {
  constructor (name, cat) {
    this.name = name;
    this.category = categories[cat];
    this.budget = 0;
    this.expertStars = 3;
    this.comments = [];
  }
  addComment(text, author, stars) {
    this.comments.push(new Comment(text, author, stars));
  }
  getAverageStars() {
    let sumStars = 0;
    this.comments.forEach(comment => sumStars = sumStars + comment.stars);
    return this.comments.length > 0 ? sumStars / this.comments.length : 0;
  }
}

films.push(new Film("Титаник", 0));
films[0].addComment("милый фильм!", "Анна", 4);
films[0].addComment("относительно милый фильм!", "Лизавета", 3)
films.push(new Film("Один дома", 0));
films[1].addComment("очень смешной фильм!", "user", 5);
films[1].addComment("совсем не смешной фильм!", "user", 1);

films.push(new Film("УЖАС", 1));
films.push(new Film("Гарри Поттер", 2));
films.push(new Film("Грустный фильм 1", 3));
films.push(new Film("Грустный фильм 2", 3));
films.push(new Film("Стрелялка", 4));

function getFilmsByCategory(cat) {
  const newFilms = [];
  for (let film of films) {
    if (film.category === cat) {
      newFilms.push(film);
    }
  }
  return newFilms;
}

console.log(getFilmsByCategory("Драма"));
