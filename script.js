// Random price from 250 to 4000
// const randomPrice = () => Math.floor(Math.random() * 3750) + 250;

// const shoes = [{
//         name: 'Nike Air Force 1',
//         price: randomPrice(),
//         unit: "$",
//         image: "https://picsum.photos/200",
//         description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
//     },
//     {
//         name: 'Nike Air Force 2',
//         price: randomPrice(),
//         unit: "$",
//         image: 'https://picsum.photos/201',
//         description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
//     },
//     {
//         name: 'Nike Air Force 3',
//         price: randomPrice(),
//         unit: "$",
//         image: 'https://picsum.photos/202',
//         description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
//     },
//     {
//         name: 'Nike Air Force 4',
//         price: randomPrice(),
//         unit: "$",
//         image: 'https://picsum.photos/203',
//         description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
//     },
//     {
//         name: 'Nike Air Force 5',
//         price: randomPrice(),
//         unit: "$",
//         image: 'https://picsum.photos/204',
//         description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
//     },
//     {
//         name: 'Nike Air Force 6',
//         price: randomPrice(),
//         unit: "$",
//         image: 'https://picsum.photos/205',
//         description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
//     },
//     {
//         name: 'Nike Air Force 7',
//         price: randomPrice(),
//         unit: "$",
//         image: 'https://picsum.photos/206',
//         description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
//     },
//     {
//         name: 'Nike Air Force 8',
//         price: randomPrice(),
//         unit: "$",
//         image: 'https://picsum.photos/207',
//         description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
//     },
//     {
//         name: 'Nike Air Force 9',
//         price: randomPrice(),
//         unit: "$",
//         image: 'https://picsum.photos/208',
//         description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
//     },
// ]


/* ===== Sticky nav ========= */

/* let navbar = document.getElementById("main-nav");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("main-nav").offsetHeight;

let navbarLinks = document.querySelectorAll("nav a"); */

// window.addEventListener("scroll", e => {
//     scrollpos = window.scrollY;
//     navbarLinks.forEach(link => {
//         let section = document.querySelector(link.hash);
//         if (section.offsetTop <= scrollpos + 150 &&
//             section.offsetTop + section.offsetHeight > scrollpos + 150) {
//             link.classList.add("active");
//         } else {
//             link.classList.remove("active");
//         }
//     });
// });




/* click on the button, 
toggle between hiding and showing the dropdown content */
function dropDown(event) {
    const parent = event.target.parentNode;
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

/* ====== HIDE FORM AND DISPLAY MESSAGE =====  */

document.forms['contact-form'].addEventListener('submit', function (event) {
    // Do something with the form's data here
    this.style['display'] = 'none';

    event.preventDefault(); /*w  w w.  j av  a2s.c  o  m*/
    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
});

/* ====== HIDE FORM AND DISPLAY MESSAGE =====  */

//JS

const button = document.getElementById("myButton")
const thankYou = document.getElementById("thankYou")

//whenever the button is clicked, toggle the ".hidden" class
button.addEventListener("click", () => {
    thankYou.classList.toggle("hidden")
})


var nextStep = document.querySelector('#nextStep');

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

/* ==== HAMBURGER MENU START =======  */

/* ===== MORE INFO BUTTON ON DETAIL PAGE ========== */



document.addEventListener("DOMContentLoaded", function () {
    // your code here
});

function myFunction2() {
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

/* ===== DARK MODE ===== */

function darkModeToggle() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let element2 = document.nav;
    element2.classList.toggle("dark-mode");
}

/* ===== DARK MODE ENDS ===== */