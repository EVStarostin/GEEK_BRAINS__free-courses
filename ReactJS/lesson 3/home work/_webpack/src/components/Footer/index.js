import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <ul class="footer-menu">
            <li class="footer-menu__item"><a href="#">О проекте</a></li>
            <li class="footer-menu__item"><a href="#">Пользовательское соглашение</a></li>
            <li class="footer-menu__item"><a href="#">Помощь</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;