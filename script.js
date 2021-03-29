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

// Open dropdown links
arrowIcon.forEach(function (icon) {
    icon.addEventListener('click', function () {
        if (icon.classList.contains('rotate180')) {
            icon.classList.remove('rotate180');
            icon.nextElementSibling.classList.remove('show');
        } else {
            icon.classList.add('rotate180');
            icon.nextElementSibling.classList.add('show');
        }
    })
});

