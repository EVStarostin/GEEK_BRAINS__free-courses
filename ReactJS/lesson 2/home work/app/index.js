import Developer from './components/Developer/Developer';

const developer = new Developer('Старостин Евгений Валерьевич');

const root = document.getElementById('app');
root.appendChild(developer.render());
