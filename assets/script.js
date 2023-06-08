const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const closebtn = document.querySelector(".js-modal-close");

// Show modal and fading external content
function showModal() {
    modal.classList.add('open');
}

// Close modal
function hideModal() {
    modal.classList.remove('open');
}

// Adding events for all buy buttons 
for (buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal)
}

// Close modal when click close button
closebtn.addEventListener('click', hideModal);
// Close modal when click outside modal container
modal.addEventListener('click', hideModal);
modalContainer.addEventListener('click', function (event) {
    // Click on modal container, do nothing
    event.stopPropagation();
});

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var defaultHeight = header.clientHeight;

// Show/Hide mobile menu when click on toggle
mobileMenu.onclick = function() {
    var isClosed = (header.clientHeight === defaultHeight);
    if (isClosed == true) {
            header.style.height = 'auto';
    } else {
            header.style.height = null;
    }
}

const menuItems = document.querySelectorAll('#nav li a[href*="#"');
console.log(menuItems); 

// Show sub menu
for (var menuItem of menuItems) {
    menuItem.onclick = function() {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (!isParentMenu) {
            header.style.height = null;
        }
    }
}