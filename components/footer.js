const footerTemplate = document.createElement('template')

footerTemplate.innerHTML = `
        <link rel="stylesheet" href="stylesheets/styles.css"><footer id="footer">
        <div class="footer-container">
            <div class="social-media-icons">

                <a href="https://www.facebook.com/" target="_blank">
                    <img class="social-media-icons-footer" src="./assets/images/icons/icon1.png" alt="">
                </a>

                <a href="https://www.instagram.com/" target="_blank">
                    <img class="social-media-icons-footer" src="./assets/images/icons/icon2.png" alt="">
                </a>

                <a class="social-media-links" href="https://www.youtube.com/" target="_blank">
                    <img class="social-media-icons-footer" src="./assets/images/icons/icon3.png" alt="">
                </a>
            </div>

            <div class="footer-links">
                <a class="footer-links" id="name" href="./index.html" class="active">HIKING&STUFF</a>
                <a class="footer-links" href="./product-list-page.html">Products</a>
                <a class="footer-links" href="./add-product-form.html">Add product</a>
                <a class="footer-links" href="./about-us.html">About us</a>
            </div>
        </div>
    </footer>`

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'closed'
        });

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer)