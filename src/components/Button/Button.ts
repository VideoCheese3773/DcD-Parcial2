import styles from "./Button.css"
import { loadCss } from "../../utils/styles"

export enum AttributeButton {
    "btn_text" = "btn_text",
}

export default class Button extends HTMLElement {
    btn_text?: string;

    static get observedAttributes() {
        const attrs: Record<AttributeButton, null> = {
            btn_text: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButton,
        _: string | undefined,
        newValue: string | undefined //any
    ) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = '';
        loadCss(this, styles)
        const button = this.ownerDocument.createElement('button');
        button.className = "appButton";
        button.innerText = this.btn_text!;
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-button', Button)