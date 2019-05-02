export default class Chat {
  constructor(parent) {
    this.parent = parent;
    this.mainDiv = null;
    this.closed = null;
    this.form = null;
    this.label = null;
    this.area = null;
    this.button = null;
  }

  create() {
    this.mainDiv = document.createElement('div');
    this.closed = document.createElement('div');
    this.closed.innerHTML = '&#10060';
    this.closed.setAttribute('class', 'closed');
    this.form = document.createElement('form');
    this.label = document.createElement('label');
    this.button = document.createElement('button');
    this.area = document.createElement('textarea');
    this.label.innerHTML = 'Напишите нам';
    this.form.appendChild(this.label);
    this.form.appendChild(this.area);
    this.form.appendChild(this.button);
    this.parent.appendChild(this.mainDiv);
    this.mainDiv.appendChild(this.closed);
    this.mainDiv.appendChild(this.form);
    this.mainDiv.setAttribute('class', 'mainDiv');
    this.form.setAttribute('class', 'form');
    this.button.setAttribute('class', 'button');
    this.label.setAttribute('class', 'label');
    this.area.setAttribute('class', 'area');
    this.button.innerHTML = 'Отправить';
  }

  addListener() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.textContDiv.classList[0] === 'textContDiv') {
        this.textContDiv.classList.remove('textContDiv');
        this.textContDiv.classList.add('textContDivClick');
      } else {
        this.textContDiv.classList.remove('textContDivClick');
        this.textContDiv.classList.add('textContDiv');
      }
    });
  }
}
