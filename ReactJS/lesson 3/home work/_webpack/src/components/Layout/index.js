import React, { Component } from 'react';
import './style.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="wrapper">
          <header className="header">
            <div className="container">
              <div className="logo-bar">
                <div className="logo-section">
                  <h1 className="logo">Блог</h1>
                </div>
                <div className="login-section">
                  <button className="login-btn" data-toggle="modal" data-target="#loginModal">Войти</button>
                </div>
              </div>
            </div>
          </header>
        
          <nav className="nav">
              <div className="container">
              <ul className="nav-menu">
                <li className="nav-menu__item focused">
                  <a href="#">Главная</a>
                </li>
                <li className="nav-menu__item">
                  <a href="#">Важное</a>
                </li>
                <li className="nav-menu__item">
                  <a href="#">Слово Москве</a>
                </li>
                <li className="nav-menu__item">
                  <a href="#">ЖЖизнь</a>
                </li>
                <li className="nav-menu__item">
                  <a href="#">СССР</a>
                </li>
                <li className="nav-menu__item">
                  <a href="#">Общество</a>
                </li>
                <li className="nav-menu__item">
                  <a href="#">Рубль</a>
                </li>
              </ul>
            </div> 
          </nav>
        
          <div className="container">
            <main className="main-page">
              <article className="article">
                <header className="article__header">
                  <h3>Чем Россия может ответить на «драконовские» санкции США?</h3>
                </header>
                <p className="article__text">
                    И вот под очередным дурацким, надуманным и никем не доказанным предлогом США вводят очередные, но уже теперь "драконовские" санкции. Когда в санкционные списки вносили каких то чиновников, олигархов, бизнесменов и высылали дипломатов - это было не "больно" для всех остальных. Когда начали ограничивать деятельность крупных компаний - это тоже можно купировать дифференциацией рынков сбыта и минимизировать потери. Власти ждали, молчали и практически ничего не делали. Но теперь то понятно, что никто не планирует останавливаться и этот курс надолго. Зачем тешить себя иллюзиями, что не стоит перегибать палку, что все само собой рассосется. Хотим выглядеть красиво и цивилизовано? А надо ли?
                    <br/><br/>
                    Вот сейчас санкции включают в себя полный запрет на экспорт электронных устройств (подведя их под двойное назначение) - это уже такой приличный такой удар. А чем можем ответить мы?
                    <br/><br/>
                    Обычно на этом месте говорят, что мы можем либо "выстрелить себе в ногу" запретив поставки титана, урана или ракетных двигателей. Либо сделать что то совсем несущественное для США.
                    <br/><br/>
                    Однако и у нас есть в запасе хороший ответный ход для санкций...
                    <br/><br/>
                    Вот Европа уверенно отбивается от санкций США которые ей не выгодны. Они приняли так называемый "блокирующий статут" запрещает европейским компаниям подчиняться санкционным мерам, которые влекут за собой нарушение санкций США, а европейским судам - обязывать компании соблюдать эти меры. Также статут предусматривает возможность присуждения компенсации компаниям, пострадавшим от санкций США.
                </p>
                <footer className="article__footer">
                  <p className="article__date">07.09.2018</p>
                </footer>
              </article>
            </main>
          </div>
        </div>

        <footer class="footer">
          <div class="container">
            <ul class="footer-menu">
              <li class="footer-menu__item"><a href="#">О проекте</a></li>
              <li class="footer-menu__item"><a href="#">Пользовательское соглашение</a></li>
              <li class="footer-menu__item"><a href="#">Помощь</a></li>
            </ul>
          </div>
        </footer>

        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Войти</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="login-input"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Имя пользователя" aria-label="Username" aria-describedby="login-input"/>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="password-input"><i class="fas fa-unlock-alt"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Пароль " aria-label="Password" aria-describedby="password-input"/>
                  </div>
                  <button type="button" class="btn btn-primary float-right">Войти</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
