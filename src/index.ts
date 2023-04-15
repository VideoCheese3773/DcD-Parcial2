import "./components/export"
import styles from "./index.css"
import { loadCss } from "./utils/styles"
import { fetchCategories } from "./services/data"
import { fetchJoke } from "./services/fetchCategoryJoke"
import Button, { AttributeButton } from "./components/Button/Button"


class AppContainer extends HTMLElement {
    buttonList: Button[] = [];
    actualJoke: string = "Select a category to show a joke";
    actualCategory: string = "";

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    async connectedCallback() {
        const dataAPI = await fetchCategories();
        console.log(dataAPI)
        dataAPI.forEach((category: any) => {
            const newButton = this.ownerDocument.createElement('app-button') as Button;
            newButton.setAttribute(AttributeButton.btn_text, category)
            newButton.addEventListener('click', () => {
                console.log(newButton.btn_text)
                this.createJoke(newButton.btn_text!)
            })
            this.buttonList.push(newButton)
        });
        this.render(this.buttonList)
    }

    async createJoke(btn_text: string) {
        const jokeResult = await fetchJoke(btn_text);
        //console.log("joke",jokeResult)
        this.actualJoke = jokeResult;
        this.actualCategory = btn_text;
        this.render(this.buttonList)
    }

    render(buttonList: any) {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
        }

        loadCss(this, styles)

        const mainApp = this.ownerDocument.createElement('section');
        mainApp.className = "mainApp";

        const title = this.ownerDocument.createElement('h1')
        title.className = "title"
        title.innerText = "😂 Chuck Norris Jokes 😂"
        mainApp.appendChild(title)

        const buttonContainer = this.ownerDocument.createElement('div')
        buttonContainer.className = "buttonContainer";
        this.buttonList.forEach((button) => {
            buttonContainer.appendChild(button)
        })
        mainApp.appendChild(buttonContainer);


        const jokeContainer = this.ownerDocument.createElement('div')
        jokeContainer.className = "jokeContainer"

        const renderCat = this.ownerDocument.createElement('h4')
        renderCat.innerText = this.actualCategory
        jokeContainer.appendChild(renderCat)

        const renderJoke = this.ownerDocument.createElement('h3')
        renderJoke.innerText = this.actualJoke
        jokeContainer.appendChild(renderJoke)

        mainApp.appendChild(jokeContainer)
        //loadCss(this, styles)
        this.shadowRoot?.appendChild(mainApp);
    }
}

customElements.define('app-container', AppContainer)