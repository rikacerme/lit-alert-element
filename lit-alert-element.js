// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { ElementStyles } from './element-styles';

// Extend the LitElement base class
class LitAlertElement extends LitElement {

    static get properties() { return {
      type: { type: String },
      header: { type:String },
      message: { type: String },
      _typeList: { type:Array }
    };
  }

  constructor() {
    super();

    this._typeList = ["danger", "info","success" ]
    this.type = this._typeList[1];
    this.header = "Default Header";
    this.icon = "&star;";
  }

  _getIcon(){
    switch (this.type) {
      case "danger":
        return html` 
        <svg version="1.1" class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 301.691 301.691" style="enable-background:new 0 0 301.691 301.691;" xml:space="preserve">
          <g>
            <polygon points="119.151,0 129.6,218.406 172.06,218.406 182.54,0  "></polygon>
            <rect x="130.563" y="261.168" width="40.525" height="40.523"></rect>
          </g>
        </svg>`;
        break;
      case "info":
        return html`
        <svg version="1.1" class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
          <g>
            <g id="info">
              <g>
                <path  d="M10,16c1.105,0,2,0.895,2,2v8c0,1.105-0.895,2-2,2H8v4h16v-4h-1.992c-1.102,0-2-0.895-2-2L20,12H8     v4H10z"></path>
                <circle  cx="16" cy="4" r="4"></circle>
              </g>
            </g>
          </g>
        </svg>`;
        break;
      case "success":
        return html`
        <svg version="1.1" class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"></path>
          </g></g>
        </svg>`
        break;
    }
  }

  _getClass(){
    switch (this.type) {
      case "success":
        return "toast--green add-margin"

        break;
      case "info":
        return "toast--blue add-margin"

        break;
      case "danger":
        return "toast--yellow"

        break;
    }
  }

  closeAlert(){
    this.remove();
  }

  _getCloseIcon(){
    return html`<div class="close" @click="${this.closeAlert}">
        <span class="remove">&#10006;</span>
      </div>`;
  }

  static get styles() {
    return [ ElementStyles ]
  }

  render(){
    return html`
      <div class="container">
        <div class="cell">
          <div class="toast ${this._getClass()}">
          <div class="icon">${this._getIcon()}</div>
            <div class="content">
              <p class="type">${this.header}</p>
              <p class="message">${this.message}</p>
            </div>
            ${this._getCloseIcon()}
          </div>
        </div>
      </div> `;
  }
}

// Register the new element with the browser.
customElements.define('lit-alert-element', LitAlertElement);