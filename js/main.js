////// Nav Bar //////

const navSlide = () => {
    const burger = document.querySelector('.menu-burger');
    const nav = document.querySelector('.nav-links');
    // Need to fix "navExtend" when not in mobile view
    const navExtend = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', () => {
        // Toggle Navigation Bar
        nav.classList.toggle('nav-links-active');
        navExtend.classList.toggle('nav-active');

        // Animation Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
            
        });

        // Animation Burger
        burger.classList.toggle('toggle');

    });

    // When a link is clicked, toggle nav bar off
    nav.onclick = ()=>{
        // Toggle Navigation Bar & Burger
        nav.classList.remove('nav-links-active');
        navExtend.classList.remove('nav-active');
        burger.classList.remove('toggle');

        // Animation Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = '';
            }
        });
    }

    // window.addEventListener('resize',() => {
    //     if(window.innerWidth > 768)
    //     {
    //         nav.classList.remove('nav-links-active');
    //         navExtend.classList.remove('nav-active');

    //         burger.classList.remove('toggle');
    //     } else {
            
    //     }
    // });

}


////// Reveal Animation //////

const revealAnimation = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            } // else {
         //       entry.target.classList.remove('reveal');
         //   }
        });
    });

    const hiddenElements = document.querySelectorAll('.conceal');
    hiddenElements.forEach((el) => observer.observe(el));
}


////// Footer //////

document.getElementById("copyright-date").innerHTML = "Copyright © " + new Date().getFullYear() + ", Blaise Gozé";


navSlide();
revealAnimation();