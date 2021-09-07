import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  colorChange() {
    let color = 0;
    if (this.counter < 26) {
      color = `color: rgb(${this.counter * 10},0,0)`;
    } else if (this.counter > 25 && this.counter < 51) {
      color = `color: rgb(${250 - (this.counter - 25) * 10},${
        (this.counter - 25) * 10
      },0)`;
    } else if (this.counter > 50) {
      color = `color: rgb(0,${250 - (this.counter - 50) * 10},${
        (this.counter - 50) * 10
      })`;
    }
    this.shadowRoot.getElementById('h2').style = color;
  }

  __increment() {
    this.counter += 1;
    console.log('Up');
    if (this.counter > 0) {
      this.shadowRoot.getElementById('down').disabled = false;
    }
    this.colorChange();
  }

  __decrement() {
    this.counter -= 1;
    console.log('Down');
    if (this.counter < 1) {
      this.shadowRoot.getElementById('down').disabled = true;
    }
    this.colorChange();
  }

  render() {
    return html`
      <h2 id="h2">${this.title} Nr. ${this.counter}!</h2>
      <button id="up" @click=${this.__increment}>increment</button>
      <button id="down" @click=${this.__decrement}>decrement</button>
      <br />
      <input
        id="input"
        type="number"
        .value="${this.counter}"
        disabled="true"
      />
      <!--Help-->
    `;
  }
}
