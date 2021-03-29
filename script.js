// Select elements
const hamburgerOpen = document.getElementById('hamburger-open');
const hamburgerClose = document.getElementById('hamburger-close');
const arrowIcon = document.querySelectorAll('#arrow-icon');
const navDropdown = document.getElementById('nav-dropdown');
const linksDropdown = document.getElementById('links-dropdown');

// Open dropdown
hamburgerOpen.addEventListener('click', function () {
    hamburgerOpen.classList.add('hide');
    hamburgerClose.classList.add('show');
    navDropdown.classList.add('show');
});

// Close dropdown
hamburgerClose.addEventListener('click', function () {
    hamburgerClose.classList.remove('show');
    hamburgerOpen.classList.remove('hide');
    navDropdown.classList.remove('show');
});

// Open / close dropdown links
arrowIcon.forEach(function (icon) {
    icon.addEventListener('click', function (e) {
        arrowIcon.forEach(function (item) {
            if (item !== e.target) {
                item.classList.remove('rotate180');
                item.nextElementSibling.classList.remove('show');
            }
        });
        e.currentTarget.classList.toggle('rotate180');
        e.currentTarget.nextElementSibling.classList.toggle('show');
    });
});