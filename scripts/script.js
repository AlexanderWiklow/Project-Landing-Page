/* click on the button, 
toggle between hiding and showing the dropdown content */
function dropDown(event) {
    // Parent of the specified node. 
    const parent = event.target.parentNode;
    // Add following class to the parent. It will be styled in the stylesheet with css. "An element that has the display property set to block starts on a new line and takes up the available screen width."
    parent.querySelector(`.dropdown-content`).classList.toggle(`show`)
}

// Close the dropdown 
window.onclick = function (event) {
    if (!event.target.matches(`.dropbtn`)) {
        document.querySelectorAll(`.dropdown-content.show`)
            .forEach(element => element.classList.remove(`show`));
    }
}

/* ========= DROPDOWN MENU ENDS ======== */

/* ====== CONTACT FORM =====  */

document.forms['contact-form'].addEventListener('submit', function (event) {
    // Do something with the form's data here
    this.style['display'] = 'none';

    event.preventDefault();
    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
});

/* ====== HIDE FORM AND DISPLAY MESSAGE =====  */

const button = document.getElementById("myButton")
const thankYou = document.getElementById("thankYou")

//whenever the button is clicked, toggle the ".hidden" class
button.addEventListener("click", () => {
    thankYou.classList.toggle("hidden")
})


let nextStep = document.querySelector('#nextStep');

nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('my_form').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
});


let hidden = document.querySelector("#hidden");

hidden.addEventListener("click", function () {
    document.getElementById("hidden1").style.display = "none";
});

/* ========== HIDE FORM ENDS ==========  */

/* ===== MORE INFO BUTTON ON DETAIL PAGE ========== */

function moreInfo() {
    let divElement = document.getElementById("myDIV");
    let buttonElement = document.getElementById("more-info-btn");
    if (divElement.style.display === "block") {
        divElement.style.display = "none";
        buttonElement.textContent = "Show more info";
    } else {
        divElement.style.display = "block";
        buttonElement.textContent = "Hide";
    }
}

/* ===== MORE INFO BUTTON ON DETAIL PAGE ========== */