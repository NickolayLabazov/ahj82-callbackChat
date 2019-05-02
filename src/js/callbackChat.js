import Chat from './chat.js';

export default class CallbackChat {
  constructor(parent) {
    this.parent = parent;
    this.chat = null;
    this.mainDiv = null;
    this.redButton = null;
    this.closed = null;
  }

  create() {
    this.mainDiv = document.createElement('div');
    this.parent.appendChild(this.mainDiv);
    this.chat = new Chat(this.mainDiv);
    this.chat.create();
    this.redButton = document.createElement('div');
    this.redButton.setAttribute('class', 'redButton');
    this.mainDiv.setAttribute('class', 'mainDivCallBackChat');
    this.mainDiv.appendChild(this.redButton);
    this.closed = this.chat.closed;
    this.addListener();
  }

  addListener() {
    this.redButton.addEventListener('click', () => {
      this.chat.mainDiv.classList.add('mainDivtransform');
      this.chat.mainDiv.style.transform = 'scale(1)';
      this.chat.mainDiv.addEventListener('animationend', () => {
        this.chat.mainDiv.classList.remove('mainDivtransform');
      });

      this.redButton.classList.add('redButtonNormal');
      this.redButton.style.opacity = '0';
      this.redButton.addEventListener('animationend', () => {
        this.redButton.classList.remove('redButtonNormal');
      });
    });

    this.closed.addEventListener('click', () => {
      this.chat.mainDiv.classList.add('mainDivtransformReverse');
      this.chat.mainDiv.style.transform = 'scale(0)';
      this.chat.mainDiv.addEventListener('animationend', () => {
        this.chat.mainDiv.classList.remove('mainDivtransformReverse');
      });

      this.redButton.classList.add('redButtonReverse');
      this.redButton.style.opacity = '1';
      this.redButton.addEventListener('animationend', () => {
        this.redButton.classList.remove('redButtonReverse');
      });
    });
  }
}
