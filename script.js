/*============toggle navbar=============*/
let menuIcon = document.querySelector('#menu-icon');
let navBars = document.querySelector('.nav-bar')

menuIcon.onclick = () => {
    navBars.classList.toggle('active');
    menuIcon.classList.remove('active');
    
};

/*============Scroll Section Active Link=============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offSet && top < offSet + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*============Stiky Navber=============*/
    let header = document.querySelector('header');

    header.classList.toggle('stiky', window.scrollY > 100);
};

/*==============scroll reveal===================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-title, .heading-title', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-content, .portfolio-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-title h1, .about-image img', { origin: 'left' });
ScrollReveal().reveal('.home-title p, .about-content', { origin: 'right' });

/*===================typed js ======================*/
let typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Grapich Designer', 'Digital Marketer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});