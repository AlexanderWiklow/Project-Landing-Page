const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `<head><link rel="stylesheet" href="stylesheets/styles.css"></head><nav id="main-nav">
            <a id="name" href="./index.html" class="active">HIKING&STUFF</a>
            <a href="./product-list-page.html">Products</a>
            <a href="./add-product-form.html">Add product</a>
            <a href="./about-us.html">About us</a>

            <!-- TODO: dark mode -->
            <!-- <button id="dark-mode-btn" onclick="myFunction3()">Dark Mode</button> -->
        </nav>`


class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'closed'
        });

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header)