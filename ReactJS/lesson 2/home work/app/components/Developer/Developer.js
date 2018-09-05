import CurrentDate from '../CurrentDate/CurrentDate';

export default class Developer {
    constructor(name) {
        this.name = name;
    }

    showDate() {
        const currentDate = new CurrentDate();
        this.parentNode.appendChild(currentDate.render());
    }

    render() {
        const componentNode = document.createElement('div');
        componentNode.classList.add('component');
        const nameNode = document.createElement('p');
        nameNode.innerText = this.name;
        nameNode.classList.add('name');
        nameNode.addEventListener('click', this.showDate);
        componentNode.appendChild(nameNode);
        return componentNode;
    }
}
