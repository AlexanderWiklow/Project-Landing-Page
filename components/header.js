const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `<link rel="stylesheet" href="stylesheets/styles.css"><nav id="main-nav">
            <a id="name" href="./index.html" class="active">HIKING&STUFF</a>
            <a href="./product-list-page.html">Products</a>
            <a href="./add-product-form.html">Add product</a>
            <a href="./about-us.html">About us</a>
        </nav>`

// Skapar en klass 'Header' som ärver egenskaper från HTMLElement. Det blir en child class.
class Header extends HTMLElement {

    //
    constructor() {
        // Super() metoden refererar till parent och får samma metoder och får även tillgång till samma properties. 
        super();
    }

    // ShadowRoot tillåter att ett dolt DOM-struktur kan användas på den synliga DOM-delen. 
    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'closed'
        });

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header)